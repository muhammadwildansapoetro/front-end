import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

const protectedPages = ["/profile", "/dashboard"];
const protectedAfterAuth = ["/register", "/sign-in"];
const protectedAdmin = ["/blog/create"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const url = request.nextUrl.pathname;

  if (protectedPages.some((page) => url.startsWith(page)) && !token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (protectedAdmin.some((page) => url.startsWith(page)) && !token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  } else if (protectedAdmin.some((page) => url.startsWith(page)) && token) {
    const user: { role: "Admin" | "User" } = jwtDecode(token?.value);
    if (user.role !== "Admin")
      return NextResponse.redirect(new URL("/", request.url));
  }

  if (protectedAfterAuth.some((page) => url.startsWith(page)) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
