-- Portfolio content is public only after publishing. Draft writes and media uploads
-- require a user ID explicitly listed in public.site_admins.
create table public.site_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  added_at timestamptz not null default now()
);

alter table public.site_admins enable row level security;

create or replace function public.is_site_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.site_admins
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_site_admin() from public;
grant execute on function public.is_site_admin() to anon, authenticated;

create table public.site_content (
  id integer primary key check (id = 1),
  draft_json jsonb not null,
  published_json jsonb,
  is_published boolean not null default false,
  updated_by uuid references auth.users(id),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

alter table public.site_content enable row level security;
grant select on public.site_content to anon, authenticated;
grant insert, update on public.site_content to authenticated;

create policy "Anyone can read published portfolio content"
  on public.site_content for select to anon, authenticated
  using (is_published = true or public.is_site_admin());

create policy "Site admins can create portfolio content"
  on public.site_content for insert to authenticated
  with check (public.is_site_admin());

create policy "Site admins can update portfolio content"
  on public.site_content for update to authenticated
  using (public.is_site_admin())
  with check (public.is_site_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('portfolio-media', 'portfolio-media', true, 10485760, array['image/jpeg','image/png','image/webp','image/avif','image/svg+xml'])
on conflict (id) do nothing;

create policy "Portfolio images are public"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'portfolio-media');

create policy "Site admins can upload portfolio images"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'portfolio-media' and public.is_site_admin());

create policy "Site admins can update portfolio images"
  on storage.objects for update to authenticated
  using (bucket_id = 'portfolio-media' and public.is_site_admin())
  with check (bucket_id = 'portfolio-media' and public.is_site_admin());
