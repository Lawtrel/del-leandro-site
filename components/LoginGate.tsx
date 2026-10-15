"use client";

import { FormEvent, useState } from "react";

export default function LoginGate() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function submit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    if (!response.ok) return setStatus("error");
    window.location.reload();
  }

  return (
    <main className="min-h-screen grid place-items-center p-6">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">
        <div className="text-4xl text-[#f1769e]">♥</div>
        <p className="mt-3 text-xs font-bold uppercase tracking-[.25em] text-[#e9a1b8]">um cantinho só nosso</p>
        <h1 className="serif mt-2 text-5xl">Del & Leandro</h1>
        <p className="mt-3 leading-7 text-[#bfaeb5]">Algumas coisas bonitas merecem ficar entre quem viveu.</p>
        <form onSubmit={submit} className="mt-7 grid gap-3">
          <label htmlFor="password" className="text-sm text-[#bfaeb5]">Senha</label>
          <input id="password" type="password" autoComplete="current-password" placeholder="Digite a senha" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-[#f1769e]/60" />
          <button disabled={status === "loading"} className="rounded-2xl bg-[#f1769e] px-4 py-3 font-extrabold text-[#210e15] disabled:opacity-60">{status === "loading" ? "Entrando..." : "Entrar"}</button>
          {status === "error" && <p className="text-sm text-[#ff9fb4]">Essa não foi. Tenta de novo ♥</p>}
        </form>
      </section>
    </main>
  );
}
