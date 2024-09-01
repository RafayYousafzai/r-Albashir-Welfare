import { NextResponse } from "next/server";
import { user } from "./static";

export function middleware(request) {
  // if (user !== null && request.nextUrl.pathname.startsWith("/auth/")) {
  //   return NextResponse.rewrite(new URL("/", request.url));
  // }

  // if (
  //   user === null &&
  //   (request.nextUrl.pathname.startsWith("/administrator/") ||
  //     request.nextUrl.pathname.startsWith("/contributor/"))
  // ) {
  //   return NextResponse.rewrite(new URL("/Signin", request.url));
  // }

  // if (
  //   user.role === "Contributor" &&
  //   request.nextUrl.pathname.startsWith("/administrator/")
  // ) {
  //   return NextResponse.rewrite(new URL("/", request.url));
  // }
}

export const config = {
  matcher: [
    "/",
    "/About",
    "/Contact",
    "/administrator/:path*",
    "/contributor/:path*",
    "/auth/:path*",
  ],
};
