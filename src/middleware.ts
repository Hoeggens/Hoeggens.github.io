import { NextRequest, NextResponse } from 'next/server';
import { getSlugs } from './app/lib/getSlugsServer';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const [, lang, slug, ...rest] = url.pathname.split('/');
    const cookieLang = req.cookies.get(process.env.LANGUAGECOOKIE)?.value || process.env.SWEDISH;
    
    if (!lang) {
        url.pathname = `/${cookieLang}`;
        return NextResponse.redirect(url);
    }
    
    if (lang !== process.env.SWEDISH && lang !== process.env.ENGLISH) {
        url.pathname = `/${cookieLang}/${lang}${slug ? '/' + [slug, ...rest].join('/') : ''}`;
        return NextResponse.redirect(url);
    }
    
    if (cookieLang !== lang && slug) {
        const currentSlugs = getSlugs(lang);
        const newSlugs = getSlugs(cookieLang);
        const slugIndex = currentSlugs.indexOf(slug);
        
        if (slugIndex !== -1) {
            const translatedSlug = newSlugs[slugIndex];
            url.pathname = `/${cookieLang}/${translatedSlug}${rest.length ? '/' + rest.join('/') : ''}`;
            return NextResponse.redirect(url);
        }
    }
    
    if (cookieLang !== lang) {
        url.pathname = `/${cookieLang}${slug ? '/' + [slug, ...rest].join('/') : ''}`;
        return NextResponse.redirect(url);
    }
    
    if (slug && lang !== process.env.ENGLISH) {
        const langSlugs = getSlugs(lang);
        const englishSlugs = getSlugs(process.env.ENGLISH);
        const slugIndex = langSlugs.indexOf(slug);
        
        if (slugIndex !== -1) {
            url.pathname = `/${englishSlugs[slugIndex]}${rest.length ? '/' + rest.join('/') : ''}`;
        } else {
            url.pathname = `/${slug}${rest.length ? '/' + rest.join('/') : ''}`;
        }
    } else {
        url.pathname = `/${slug || ''}${rest.length ? '/' + rest.join('/') : ''}`;
    }
    
    const response = NextResponse.rewrite(url);
    response.cookies.set(process.env.LANGUAGECOOKIE, lang, { secure: true, sameSite: "strict", path: "/" });
    return response;
}