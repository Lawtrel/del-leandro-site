import { cookies } from "next/headers";
import HomeExperience from "@/components/HomeExperience";
import LoginGate from "@/components/LoginGate";
import { ACCESS_COOKIE, verifyAccessToken } from "@/lib/auth";

export default async function Home() {
  const cookieStore = await cookies();
  const access = cookieStore.get(ACCESS_COOKIE)?.value;
  if (!verifyAccessToken(access)) return <LoginGate />;
  return <HomeExperience />;
}
