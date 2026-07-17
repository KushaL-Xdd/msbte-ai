import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/ai",
  "/notes",
  "/pyqs",
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get(
    "sb-access-token"
  );

  const pathname = request.nextUrl.pathname;

  const protectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (protectedRoute && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/ai/:path*",
    "/notes/:path*",
    "/pyqs/:path*",
  ],
};