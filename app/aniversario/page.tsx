import type { Metadata } from "next";
import { cookies } from "next/headers";
import LoginGate from "@/components/LoginGate";
import BirthdaySurprise from "@/components/BirthdaySurprise";
import { ACCESS_COOKIE, verifyAccessToken } from "@/lib/auth";
import "./birthday.css";

export const metadata: Metadata = {
  title: "Feliz aniversário, Del! ♥ | Del & Leandro",
  description: "Um presente especial de aniversário, feito com carinho por Leandro.",
};

export default async function BirthdayPage() {
  const cookieStore = await cookies();
  const access = cookieStore.get(ACCESS_COOKIE)?.value;

  if (!verifyAccessToken(access)) return <LoginGate />;

  return <BirthdaySurprise />;
}
