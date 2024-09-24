import { NextResponse } from "next/server";

const publicPath = ["/signin", "/signup"];

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  const isPublicPath = publicPath.includes(path);

  // if user is logged in and tries to access public auth route
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/not-found", "/signin", "/signup"],
};
