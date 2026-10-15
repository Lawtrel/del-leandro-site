import crypto from "crypto";

export const ACCESS_COOKIE = "nos_access";

function getSecret() {
  const value = process.env.APP_SECRET;
  if (!value) throw new Error("APP_SECRET não configurado.");
  return value;
}

export function accessToken() {
  return crypto.createHmac("sha256", getSecret()).update("del-leandro-private-site").digest("hex");
}

export function verifyAccessToken(value?: string) {
  if (!value) return false;
  const expected = accessToken();
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function safeEqual(aText: string, bText: string) {
  const a = Buffer.from(aText);
  const b = Buffer.from(bText);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
