import { NextRequest, NextResponse } from 'next/server';
import { getSlugs } from './app/lib/Slug-map';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const [, lang, slug, ...rest] = url.pathname.split('/');
    const cookieLang = req.cookies.get('languageCookie')?.value || 'sv';
    
    if (!lang) {
        url.pathname = `/${cookieLang}`;
        return NextResponse.redirect(url);
    }
    
    if (lang !== 'sv' && lang !== 'eng') {
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
    
    if (slug && lang !== 'eng') {
        const langSlugs = getSlugs(lang);
        const englishSlugs = getSlugs('eng');
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
    response.cookies.set('languageCookie', lang, { secure: true, sameSite: "strict", path: "/" });
    return response;
}