import { createContext, useContext, useEffect, useState } from "react";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { defaultContent, mergeContent } from "../data/content";
import type { SiteContent } from "../types/content";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
export const supabase: SupabaseClient | null = url && anonKey ? createClient(url, anonKey) : null;

type SiteValue = { content: SiteContent; setContent: (content: SiteContent) => void };
const SiteContext = createContext<SiteValue>({ content: defaultContent, setContent: () => undefined });

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState(defaultContent);
  useEffect(() => {
    if (!supabase) return;
    void supabase.from("site_content").select("published_json").eq("id", 1).eq("is_published", true).maybeSingle()
      .then(({ data }) => { if (data?.published_json) setContent(mergeContent(data.published_json as Partial<SiteContent>)); });
  }, []);
  return <SiteContext.Provider value={{ content, setContent }}>{children}</SiteContext.Provider>;
}

export const useSite = () => useContext(SiteContext);
