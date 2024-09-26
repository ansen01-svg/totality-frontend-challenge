import { NextResponse } from "next/server";

const publicPath = ["/signin", "/signup"];
const privatePath = ["/checkout"];

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  const isPublicPath = publicPath.includes(path);
  const isPrivatePath = privatePath.includes(path);

  // if user is logged in and tries to access public auth route
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // if user is not logged in and tries to access private route
  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/checkout"],
};
