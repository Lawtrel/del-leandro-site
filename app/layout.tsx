import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Del & Leandro ♥",
  description: "Do primeiro oi ao namoro: um arquivo vivo da história de Del e Leandro."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
