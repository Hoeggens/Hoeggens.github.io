import { slugMap } from "./Slug-map";

export function getSlugs(language: string): string[] {
  return language === process.env.NEXT_PUBLIC_SWEDISH ? slugMap.sv : slugMap.en;
}
export function getSlug(language: string): string {
  const slugs = getSlugs(language)[3];
  return slugs;
}
