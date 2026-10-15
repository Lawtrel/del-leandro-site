import { NextRequest, NextResponse } from "next/server";
import { ACCESS_COOKIE, accessToken, safeEqual } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return NextResponse.json({ ok: false, message: "SITE_PASSWORD não configurado." }, { status: 500 });

  const body = await request.json().catch(() => ({}));
  const password = typeof body.password === "string" ? body.password : "";
  if (!safeEqual(password, expected)) return NextResponse.json({ ok: false }, { status: 401 });

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ACCESS_COOKIE,
    value: accessToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });
  return response;
}
