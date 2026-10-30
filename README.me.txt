# Sarthak Gupta — Portfolio

A responsive editorial portfolio built with React, TypeScript, Vite and React Router. Public copy and all seven project case studies are maintained as typed structured content in `src/data/content.ts`; layout and presentation live in `src/App.tsx` and `src/styles.css`.

## Run locally

1. Install Node.js 20 or newer.
2. From this folder run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` for the production build, or `npm run preview` to view it locally.
5. Run `npm run lint` for lint checks.

## Editing content

Edit `src/data/content.ts` to update the home introduction, portrait image path, about text, interests, tools, projects, case-study sections, diagrams, image galleries, experience, education, certifications, recognition, contact details and footer. The TypeScript definitions are in `src/types/content.ts`.

Project order comes from the `projects` array. Each project has a stable `slug`, summary, category, context, status, technology list, case-study sections, optional diagram, and gallery. Add a gallery item with an `image` path and descriptive `alt` text when an approved original is ready. The first real image appears in the work listing and as the project lead image; additional photos form the lightbox gallery. No empty project gallery is rendered. Add a project by adding a typed object to the array; the work listing and `/work/:slug` route are generated from it.

## Private content studio and Supabase

The public site runs without Supabase and uses the local content file. To enable `/admin`:

1. Create a Supabase project and copy `.env.example` to `.env.local`.
2. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the project URL and public anon key. Never put a service-role key in a `VITE_` variable or browser code.
3. Apply `supabase/migrations/202610300001_portfolio_content.sql` in the Supabase SQL editor.
4. Create the owner's user through Supabase Auth. After confirming that account, insert its UUID into `public.site_admins` from the SQL editor: `insert into public.site_admins (user_id) values ('OWNER_AUTH_USER_UUID');` The owner table has no client write policy, so only a trusted project owner should add accounts.
5. Restart Vite. Sign in at `/admin` with the owner account. Edit the structured JSON, save a draft, and publish when ready. The public site reads only the published JSON row; RLS checks the admin table for every write.
6. Upload images in the content studio. The tool copies the public storage URL; paste it into the matching `portrait` or gallery `image` field in the JSON and save/publish.

The admin editor intentionally exposes the complete content object as JSON so every field remains editable without adding a separate control for each paragraph. Project list operations such as adding or reordering entries are performed by editing the `projects` array. Supabase Auth handles sign-in; table and storage policies enforce authorization beyond route visibility.

## Images and confidentiality

Only approved original photos should be added under `public/images/`; subfolders are prepared for profile, each project and Monkeytype. Use the corresponding `/images/...` path in `src/data/content.ts`, or upload through the admin editor when Supabase storage is enabled. Captions and alt text are content fields. Shipsy internal screenshots, employee data and training material must not be uploaded. The résumé is included at `public/resume.pdf` and is served at `/resume.pdf`.

## Deployment to Vercel

Import the repository as a Vite project in Vercel. Use `npm ci` for installation, `npm run build` for the build command, and `dist` for the output directory. The current `vercel.json` rewrite sends client-side routes to the SPA entry point. The public portfolio and résumé work without Supabase. To enable `/admin` and published database content, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel for Production (and Preview only if desired), then apply the SQL migration and configure Supabase Auth Site URL and allowed redirect URLs for the deployed domain. The anon key is public by design; never add a service-role key to browser code or a `VITE_` variable. RLS and the `site_admins` allow-list enforce write access.

## Routes

- `/` home
- `/work` seven-entry work index
- `/work/:slug` individual project detail
- `/about`, `/experience`, `/education`, `/contact`
- `/admin` authenticated content studio

