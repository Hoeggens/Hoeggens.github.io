import { slugMap } from "./Slug-map";

export function getSlugs(language : string) {
    if(language === process.env.SWEDISH) {
        return slugMap.sv;
    }
    else
    {
        return slugMap.en;
    }

}
export function getSlug(language: string): string {
  const slugs = getSlugs(language)[3];
  return slugs;
}