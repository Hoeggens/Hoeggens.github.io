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
