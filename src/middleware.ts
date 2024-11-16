// export { auth as middleware } from "@/auth";

import { auth } from "@/auth";
import { NextRequest, NextResponse } from 'next/server'
 
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
 
export async function middleware(req: NextRequest ) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.nextUrl.hostname;
    console.log({url, hostname});

    const subdomain = hostname.split(".")[0];

  if (subdomain === "www" || subdomain === "localhost") {
    return NextResponse.next();
  }

  req.nextUrl.pathname = `/_websites/${subdomain}${req.nextUrl.pathname}`;
  return NextResponse.rewrite(req.nextUrl);
    
}

