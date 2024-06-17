import { NextResponse } from 'next/server'

export  function middleware(req) {

    const { pathname } = req.nextUrl
    // console.log('pathname',pathname);
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/getting-started/introduction', req.url))
    }
    return NextResponse.next()
}
