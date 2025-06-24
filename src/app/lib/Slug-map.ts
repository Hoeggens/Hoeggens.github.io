const slugMap = {
  sv: [
    "/",
    "om-mig",
    "kontakt",
    "mina-projekt",
  ],
  en: [
    "/",
    "about",
    "contact",
    "my-projects",
]
};

export function getSlugs(language : string) {
    if(language === process.env.SWEDISH) {
        return slugMap.sv;
    }
    else
    {
        return slugMap.en;
    }

}
