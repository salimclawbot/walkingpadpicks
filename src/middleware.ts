import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const legacyRoutes: Record<string, string> = {
  "/walking-pad-vs-elliptical": "/walking-pad-vs-exercise-bike",
  "/best-walking-pad-300-lb-capacity": "/best-walking-pad-heavy-users",
};

export function middleware(request: NextRequest) {
  const destination = legacyRoutes[request.nextUrl.pathname];
  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/walking-pad-vs-elliptical", "/best-walking-pad-300-lb-capacity"],
};
