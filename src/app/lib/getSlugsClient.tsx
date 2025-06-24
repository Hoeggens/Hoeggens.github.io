import { slugMap } from "./Slug-map";

export function getSlugs(language: string): string[] {
  return language === "sv" ? slugMap.sv : slugMap.en;
}
export function getSlug(language: string): string {
  const slugs = getSlugs(language)[3];
  return slugs;
}
