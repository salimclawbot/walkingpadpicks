import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/guides") {
    return NextResponse.redirect(new URL(`/${search}`, request.url), 301);
  }

  if (pathname.startsWith("/guides/")) {
    const targetPath = pathname.replace(/^\/guides/, "") || "/";
    return NextResponse.redirect(new URL(`${targetPath}${search}`, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/guides", "/guides/:path*"],
};
