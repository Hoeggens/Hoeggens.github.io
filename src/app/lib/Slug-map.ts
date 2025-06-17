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
    if(language === "sv") {
        return slugMap.sv;
    }
    else
    {
        return slugMap.en;
    }

}
