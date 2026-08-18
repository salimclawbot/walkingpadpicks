import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const legacyRoutes: Record<string, string> = {
  "/walking-pad-vs-elliptical": "/walking-pad-vs-exercise-bike",
  "/best-walking-pad-300-lb-capacity": "/best-walking-pad-heavy-users",
  "/best-walking-pad-for-apartments": "/best-walking-pad-for-small-apartments",
  "/best-walking-pad-small-apartments": "/best-walking-pad-for-small-apartments",
  "/walking-pad-buying-guide-2026": "/walking-pad-buying-guide",
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase();
  if (host === "walkingpadpicks.com") {
    const canonical = request.nextUrl.clone();
    canonical.hostname = "www.walkingpadpicks.com";
    canonical.port = "";
    canonical.protocol = "https:";
    return NextResponse.redirect(canonical, 308);
  }

  const destination = legacyRoutes[request.nextUrl.pathname];
  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/:path*",
};
