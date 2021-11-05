import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server';


type LocalRedirects = {
    [k: string]:
        | string
        | undefined
}


export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const signedIn = !!req.cookies['user-token'];
    const {pathname} = req.nextUrl;

    if (signedIn) {
        const redirects = {
            '/auth/sign-in': '/'
        }

        const localRedirect = (redirects as unknown as LocalRedirects)[pathname]

        if (localRedirect) {
            return NextResponse.redirect(localRedirect)
        }
    } else {
        const redirects = {
            '/auth/sign-out': '/auth/sign-in',
            '/profile': '/auth/sign-in',
            '/users': '/auth/sign-in',
            '/forms/gtb-os': '/auth/sign-in',
            '/forms/district-work': '/auth/sign-in',
            '/': '/auth/sign-in',
        }

        const localRedirect = (redirects as unknown as LocalRedirects)[pathname]

        if (localRedirect) {
            return NextResponse.redirect(localRedirect)
        }
    }
}
