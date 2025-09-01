import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathnames = ["/_next", "/api", "/favicon.ico"];

  if (pathnames.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // เข้าสู่หน้าหลัก root (/) -> redirect ไป /en
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:path*"],
};
