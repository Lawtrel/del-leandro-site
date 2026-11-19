"use client";

import { useState } from "react";
import { timelinePhotos } from "@/data/timeline-photos";

type Memory = {
  photoId: string;
  date: string;
  label: string;
  title: string;
  description: string;
};

const memories: Memory[] = [
  {
    photoId: "primeiro-encontro-cafeteria",
    date: "04 de julho",
    label: "o nosso começo",
    title: "Um café, mil possibilidades",
    description: "O nosso primeiro encontro no Felicità Café. Quem diria que aquela tarde seria o começo de tantas lembranças?",
  },
  {
    photoId: "milkshake-mr-shake",
    date: "05 de setembro",
    label: "os momentos simples",
    title: "A doçura das pequenas coisas",
    description: "O milkshake no Mr. Shake me lembra como é bom dividir até os passeios mais simples com você.",
  },
  {
    photoId: "hamburguer-artesanal",
    date: "13 de setembro",
    label: "mais uma memória",
    title: "Mais um encontro, mais uma história",
    description: "Entre conversas, risadas e um hambúrguer, a gente foi colecionando nossos momentos.",
  },
  {
    photoId: "foto-de-casal",
    date: "10 de outubro",
    label: "nós dois",
    title: "A minha foto favorita é a que tem nós dois",
    description: "Em 4 de outubro a gente oficializou o namoro. Essa foto é um pedacinho da nossa história depois daquele sim.",
  },
];

const littleNotes = [
  { title: "Uma coisa que eu admiro", message: "Seu jeito carinhoso e a intensidade com que você vive aquilo que importa pra você." },
  { title: "Uma lembrança querida", message: "Nosso primeiro encontro. Ainda gosto de lembrar de como tudo começou." },
  { title: "Um desejo para você", message: "Que você tenha um novo ciclo com saúde, tranquilidade, conquistas e motivos sinceros para sorrir." },
  { title: "Uma vontade minha", message: "Continuar criando memórias bonitas com você, com cuidado, carinho e presença de verdade." },
];

export default function BirthdaySurprise() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [revealedNotes, setRevealedNotes] = useState<number[]>([]);

  function toggleNote(index: number) {
    setRevealedNotes((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  }

  return (
    <main className="birthday-page min-h-screen text-[#fff4f5]">
      <header className="birthday-header mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-6">
        <a href="/" className="birthday-serif text-xl tracking-wider">
          D<span className="text-[#ffc0ce]">♥</span>L
        </a>
        <a
          href="/"
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-[#f4d6de] transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffc0ce]"
        >
          ← Nosso cantinho
        </a>
      </header>

      {!giftOpened ? (
        <section className="birthday-cover relative mx-auto grid min-h-[calc(100svh-95px)] w-[min(960px,92vw)] place-items-center py-10 text-center">
          <div className="birthday-glow" aria-hidden="true" />
          <div className="birthday-float birthday-float-a" aria-hidden="true">✦</div>
          <div className="birthday-float birthday-float-b" aria-hidden="true">♥</div>
          <div className="birthday-float birthday-float-c" aria-hidden="true">✧</div>
          <div className="relative z-10 w-full max-w-2xl rounded-[2.5rem] border border-[#f6b2c0]/25 bg-[#311722]/75 p-7 shadow-[0_30px_90px_rgba(0,0,0,.4)] backdrop-blur-xl sm:p-14">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.34em] text-[#f8bed0]">22 de novembro de 2026</p>
            <div className="birthday-heart mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full border border-[#f8bdcd]/30 bg-[#f8bdcd]/10 text-4xl" aria-hidden="true">♥</div>
            <p className="text-lg text-[#ffe3e9]">Tem uma coisa que eu preparei para você...</p>
            <h1 className="birthday-serif mt-5 text-[clamp(3.5rem,10vw,7.5rem)] leading-[.98]">
              Feliz aniversário,<br/><em className="font-normal text-[#ffc3d1]">minha pretinha.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-md leading-8 text-[#edd1d9]">
              Não é um presente de loja. É um pedacinho do meu carinho, das nossas memórias e do que eu te desejo hoje.
            </p>
            <button
              type="button"
              onClick={() => setGiftOpened(true)}
              className="birthday-primary mt-9 rounded-full px-8 py-4 font-bold text-[#391821] transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc3d1]"
            >
              Abrir meu presente ♥
            </button>
            <p className="mt-5 text-xs tracking-wider text-[#dcbac4]">Feito com carinho, por Leandro</p>
          </div>
        </section>
      ) : (
        <div className="birthday-reveal">
          <section className="birthday-open-hero relative overflow-hidden px-5 pb-20 pt-20 text-center sm:pt-28">
            <div className="birthday-confetti" aria-hidden="true">
              {["✦", "♥", "✧", "✦", "♥", "✧", "♥"].map((shape, i) => (
                <span key={i} className={"birthday-confetti-item birthday-confetti-" + i}>{shape}</span>
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-[.35em] text-[#ffc0ce]">Hoje é o seu dia · 22.11.2026</p>
            <h1 className="birthday-serif mx-auto mt-6 max-w-4xl text-[clamp(3.7rem,10vw,8rem)] leading-none">
              O mundo ficou mais bonito<br/><em className="font-normal text-[#ffc0ce]">com você nele.</em>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#efced6]">
              Feliz aniversário, Del! Hoje eu queria te lembrar do quanto você é especial para mim — e reviver um pouquinho da nossa história.
            </p>
            <a href="#lembrancas" className="birthday-primary mt-10 inline-block rounded-full px-7 py-3 font-bold text-[#391821]">
              Relembrar nossos momentos ↓
            </a>
          </section>

          <section id="lembrancas" className="mx-auto w-[min(1080px,92vw)] scroll-mt-10 py-16">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[.29em] text-[#ffc0ce]">capítulos que guardo com carinho</p>
              <h2 className="birthday-serif mt-3 text-[clamp(2.8rem,6vw,5rem)]">Alguns pedacinhos de nós</h2>
              <p className="mx-auto mt-4 max-w-xl text-[#eed0d9]">Nossa história tem muitos momentos bonitos. Escolhi alguns para visitar outra vez com você.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {memories.map((memory, index) => {
                const photo = timelinePhotos.find((item) => item.id === memory.photoId);
                if (!photo) return null;
                return (
                  <article key={memory.photoId} className="birthday-memory overflow-hidden rounded-[2rem] border border-[#f8bdcd]/20">
                    <div className="relative h-72 overflow-hidden bg-[#2b111c] sm:h-96">
                      <img src={photo.src} alt={photo.caption} className="h-full w-full object-contain" loading="lazy" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1d0f15]/65 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-[#2c1621]/70 px-4 py-2 text-xs tracking-widest backdrop-blur">
                        {memory.date}
                      </span>
                    </div>
                    <div className="p-7 sm:p-8">
                      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffc0ce]">{String(index + 1).padStart(2, "0")} · {memory.label}</p>
                      <h3 className="birthday-serif mt-3 text-3xl">{memory.title}</h3>
                      <p className="mt-4 leading-7 text-[#e7c7d0]">{memory.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mx-auto w-[min(1000px,92vw)] py-16">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[.29em] text-[#ffc0ce]">pequenos bilhetinhos</p>
              <h2 className="birthday-serif mt-3 text-[clamp(2.8rem,6vw,5rem)]">Toque para abrir ♥</h2>
              <p className="mt-3 text-[#e7c7d0]">Quatro recadinhos feitos especialmente para você.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {littleNotes.map((note, index) => {
                const revealed = revealedNotes.includes(index);
                return (
                  <button
                    key={note.title}
                    type="button"
                    onClick={() => toggleNote(index)}
                    aria-expanded={revealed}
                    className="birthday-note min-h-52 rounded-[1.6rem] border border-[#ffc3d1]/25 p-7 text-left transition hover:border-[#ffc3d1]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffc3d1]"
                  >
                    <span className="text-xs font-bold uppercase tracking-[.2em] text-[#ffc3d1]">bilhete {index + 1} de 4</span>
                    <h3 className="birthday-serif mt-4 text-2xl">{note.title}</h3>
                    <p className="mt-4 leading-7 text-[#f1d6dc]">{revealed ? note.message : "Toque aqui para descobrir o que eu escrevi pra você..."}</p>
                    <span className="mt-5 inline-block text-sm text-[#ffc3d1]">{revealed ? "Fechar bilhete ↑" : "Abrir bilhete ♥"}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="px-4 py-20">
            <article className="birthday-letter mx-auto max-w-3xl rounded-[2rem] p-8 text-[#452633] shadow-2xl sm:p-14">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#945d72]">uma carta só para você</p>
              <h2 className="birthday-serif mt-5 text-[clamp(2.7rem,6vw,4.6rem)] leading-tight">Para minha pretinha, com carinho.</h2>
              <div className="mt-8 space-y-5 text-lg leading-9">
                <p>Meu bem, hoje eu queria te dar algo que tivesse um pouquinho de nós dois.</p>
                <p>Desde aquele encontro no Felicità Café, a gente viveu dias que viraram lembranças especiais. As conversas, os passeios, os pequenos detalhes e a alegria de dividir momentos com você são coisas que guardo com carinho.</p>
                <p>Admiro seu jeito de sentir as coisas, seu carinho e a pessoa que você é. E quero que você saiba que merece ser celebrada não só hoje, mas também nos pequenos dias.</p>
                <p>Para esse novo ciclo, desejo saúde, paz, felicidade, conquistas e muitos sorrisos. Que você siga encontrando motivos para realizar seus sonhos e que a vida te trate com toda a delicadeza que você merece.</p>
                <p>Obrigado por fazer parte da minha história. Espero que a gente ainda crie muitas lembranças bonitas juntos.</p>
              </div>
              <p className="birthday-serif mt-10 text-2xl italic">Feliz aniversário, Del. ♥</p>
              <p className="mt-3 text-sm font-semibold tracking-wide text-[#945d72]">Com carinho, Leandro.</p>
            </article>
          </section>

          <section className="px-5 pb-28 pt-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#ffc0ce]">22 · 11 · 2026</p>
            <h2 className="birthday-serif mx-auto mt-5 max-w-3xl text-[clamp(3.4rem,8vw,6.3rem)] leading-tight">
              Que venham muitas coisas boas, <em className="font-normal text-[#ffc3d1]">minha pretinha.</em>
            </h2>
            <p className="mt-7 text-[#e4c4cd]">Um presente simples, feito por mim, pensando em você. ♥</p>
            <a href="/" className="mt-10 inline-flex rounded-full border border-[#ffc0ce]/40 px-6 py-3 text-sm text-[#ffe2e9] transition hover:bg-white/10">
              Voltar para nossa história
            </a>
          </section>
        </div>
      )}
    </main>
  );
}
