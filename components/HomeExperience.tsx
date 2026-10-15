"use client";

import { useEffect, useMemo, useState } from "react";
import {
  achievements,
  carinho,
  chapters,
  discoveriesAboutDel,
  discoveriesAboutLeandro,
  letters,
  plans,
  quickDates,
  relationship,
  relationshipFoundations,
  songs,
} from "@/data/content";
import { importedMedia } from "@/data/imported-media";
import { timelinePhotos } from "@/data/timeline-photos";

function dayDiff(date: string) {
  return Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / 86_400_000));
}

const section = "mx-auto w-[min(1180px,90vw)] py-24";
const eyebrow = "text-xs font-bold uppercase tracking-[.25em] text-[#e9a1b8]";
const card = "rounded-[1.5rem] border border-white/10 bg-white/[0.03]";

function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="mb-10 grid grid-cols-[1.1fr_.9fr] items-end gap-12 max-md:grid-cols-1 max-md:gap-3">
      <div>
        <p className={eyebrow}>{kicker}</p>
        <h2 className="serif mt-2 text-[clamp(2.5rem,5vw,5rem)] leading-tight">{title}</h2>
      </div>
      {text && <p className="max-w-xl leading-7 text-[#bfaeb5]">{text}</p>}
    </div>
  );
}

export default function HomeExperience() {
  const [daysSinceHello, setDaysSinceHello] = useState(() => dayDiff(relationship.firstChatDate));
  const [daysSinceFirstDate, setDaysSinceFirstDate] = useState(() => dayDiff(relationship.firstDate));
  const [daysOfficial, setDaysOfficial] = useState(() => dayDiff(relationship.officialDate));
  const [activeLetter, setActiveLetter] = useState(letters[0]);
  const [randomCarinho, setRandomCarinho] = useState(carinho[0]);
  const [storyFilter, setStoryFilter] = useState("Todos");

  const monthsOfficial = useMemo(() => Math.floor(daysOfficial / 30.44), [daysOfficial]);
  const visibleChapters = useMemo(
    () => storyFilter === "Todos" ? chapters : chapters.filter((chapter) => chapter.month === storyFilter),
    [storyFilter]
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setDaysSinceHello(dayDiff(relationship.firstChatDate));
      setDaysSinceFirstDate(dayDiff(relationship.firstDate));
      setDaysOfficial(dayDiff(relationship.officialDate));
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    window.location.reload();
  }

  function drawCarinho() {
    setRandomCarinho(carinho[Math.floor(Math.random() * carinho.length)]);
  }

  return (
    <main>
      <header className="sticky top-0 z-50 grid h-[72px] grid-cols-[1fr_auto_1fr] items-center border-b border-white/10 bg-[#100d0f]/80 px-[5vw] backdrop-blur-xl max-md:grid-cols-[1fr_auto]">
        <a href="#inicio" className="serif text-xl font-bold tracking-widest">D<span className="text-[#f1769e]">♥</span>L</a>
        <nav className="flex gap-7 text-sm text-[#bfaeb5] max-md:hidden">
          <a href="#historia">História</a>
          <a href="#descobertas">Descobertas</a>
          <a href="#galeria">Fotos</a>
          <a href="#cartinhas">Cartinhas</a>
          <a href="#planos">Planos</a>
        </nav>
        <button onClick={logout} className="justify-self-end rounded-full border border-white/10 px-4 py-2 text-sm text-[#bfaeb5]">Sair</button>
      </header>

      <section id="inicio" className="relative grid min-h-[calc(100svh-72px)] grid-cols-[1.15fr_.62fr] items-center gap-[5vw] overflow-hidden px-[8vw] py-[8vh] max-md:grid-cols-1 max-md:px-[6vw]">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#6f263f]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-[#f1769e]/10 blur-3xl" />
        <div className="relative z-10">
          <p className={eyebrow}>desde o primeiro oi · 16 · 06 · 2026</p>
          <h1 className="serif mt-4 max-w-5xl text-[clamp(3.6rem,7.7vw,8.2rem)] leading-[.92] tracking-[-.04em]">{relationship.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#bfaeb5]">{relationship.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#historia" className="rounded-full bg-[#f1769e] px-5 py-3 font-bold text-[#210e15]">Ver nossa história</a>
            <a href="#duvida" className="rounded-full border border-white/10 px-5 py-3 text-[#bfaeb5]">Quando você duvidar</a>
          </div>
        </div>

        <aside className={`${card} relative z-10 overflow-hidden p-7 shadow-2xl`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,118,158,.13),transparent_45%)]" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[.2em] text-[#bfaeb5]">nossa linha do tempo</span>
            <div className="mt-6 grid gap-5">
              <div>
                <strong className="serif block text-6xl leading-none text-[#e9a1b8]">{daysSinceHello}</strong>
                <span className="text-sm text-[#bfaeb5]">dias desde o primeiro oi</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div><b className="block text-2xl">{daysSinceFirstDate}</b><small className="text-[#bfaeb5]">dias desde o 1º encontro</small></div>
                <div><b className="block text-2xl">{daysOfficial}</b><small className="text-[#bfaeb5]">dias de namoro</small></div>
              </div>
              <div className="border-t border-white/10 pt-5"><b className="block text-2xl">{monthsOfficial}</b><small className="text-[#bfaeb5]">meses oficiais completos</small></div>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto w-[min(980px,90vw)] py-24 text-center">
        <p className={eyebrow}>três datas, uma história</p>
        <h2 className="serif mt-3 text-[clamp(2.5rem,5vw,5rem)] leading-tight">O namoro começou em outubro.<br/>A gente começou bem antes.</h2>
        <div className="mt-12 grid grid-cols-3 gap-4 text-left max-md:grid-cols-1">
          {quickDates.map((item) => (
            <article key={item.label} className={`${card} p-6`}>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#e9a1b8]">{item.date}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.label}</h3>
              <p className="mt-3 leading-7 text-[#bfaeb5]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="historia" className={section}>
        <SectionTitle
          kicker="nossa história completa"
          title="Do Tinder ao ‘minha namorada’"
          text="Do primeiro oi aos nossos encontros. Junho, julho, agosto, setembro, outubro — cada fase tem seu próprio capítulo."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {["Todos", ...chapters.map((chapter) => chapter.month)].map((filter) => (
            <button
              key={filter}
              onClick={() => setStoryFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${storyFilter === filter ? "border-[#f1769e]/50 bg-[#f1769e]/10 text-white" : "border-white/10 text-[#bfaeb5]"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-10">
          {visibleChapters.map((chapter) => (
            <article key={chapter.month} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
              <div className="grid grid-cols-[.35fr_1fr] gap-6 border-b border-white/10 bg-white/[0.025] p-7 max-md:grid-cols-1">
                <div>
                  <p className={eyebrow}>{chapter.month}</p>
                  <h3 className="serif mt-2 text-3xl">{chapter.title}</h3>
                </div>
                <p className="leading-7 text-[#bfaeb5]">{chapter.intro}</p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/10 max-md:grid-cols-1">
                {chapter.events.map((event) => {
                  const photo = timelinePhotos.find((item) => item.id === event.photoId);
                  return (
                  <div key={`${chapter.month}-${event.date}-${event.title}`} className="bg-[#100d0f] p-7">
                    <span className="text-xs font-bold uppercase tracking-[.16em] text-[#e9a1b8]">{event.date}</span>
                    <h4 className="mt-3 text-xl font-semibold">{event.title}</h4>
                    <p className="mt-3 leading-7 text-[#bfaeb5]">{event.text}</p>
                    {photo && (
                      <a href={`#foto-${photo.id}`} className="mt-5 inline-flex rounded-full border border-[#f1769e]/30 px-4 py-2 text-sm text-[#e9a1b8] transition hover:bg-[#f1769e]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f1769e]">
                        Ver foto de {photo.displayDate} →
                      </a>
                    )}
                  </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="descobertas" className={section}>
        <SectionTitle
          kicker="quem você foi se tornando pra mim"
          title="Coisas que eu fui descobrindo sobre você"
          text="Nem tudo precisa ser uma grande data. Às vezes a história está nas coisas pequenas que a gente aprende sobre a outra pessoa."
        />
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {discoveriesAboutDel.map((item, index) => (
            <article key={item.title} className={`${card} p-6`}>
              <span className="text-xs font-bold tracking-widest text-[#e9a1b8]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#bfaeb5]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={section}>
        <SectionTitle
          kicker="e o outro lado"
          title="Coisas que você foi descobrindo sobre mim"
          text="Um relacionamento não é só conhecer a outra pessoa. É também aprender a deixar alguém conhecer a gente de verdade."
        />
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {discoveriesAboutLeandro.map((item) => (
            <article key={item.title} className={`${card} p-6`}>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#bfaeb5]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(980px,90vw)] py-24">
        <p className={eyebrow}>o que queremos preservar</p>
        <h2 className="serif mt-3 text-[clamp(2.5rem,5vw,5rem)] leading-tight">As bases da nossa relação</h2>
        <div className="mt-10 grid gap-3">
          {relationshipFoundations.map((item, index) => (
            <div key={item} className={`${card} grid grid-cols-[50px_1fr] items-center gap-4 p-5`}>
              <span className="text-xs font-bold tracking-widest text-[#e9a1b8]">{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className={section}>
        <SectionTitle
          kicker="nossas fotos desde o começo"
          title="Nossas fotos, em ordem"
          text="Do primeiro encontro à foto de casal: oito registros da nossa história. Toque em uma foto para abrir a imagem completa."
        />

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {timelinePhotos.map((photo) => (
            <figure key={photo.id} id={`foto-${photo.id}`} className={`${card} scroll-mt-28 overflow-hidden`}>
              <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Abrir foto completa: ${photo.displayDate} — ${photo.caption}`} className="block bg-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f1769e]">
                <img src={photo.src} width={photo.width} height={photo.height} alt={`${photo.displayDate} — ${photo.caption}`} loading="lazy" decoding="async" className="aspect-[3/4] w-full object-contain" />
              </a>
              <figcaption className="p-6">
                <time dateTime={photo.date} className="text-xs font-bold uppercase tracking-[.16em] text-[#e9a1b8]">{photo.displayDate}</time>
                <p className="mt-3 text-xl font-semibold">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={eyebrow}>arquivo importado do WhatsApp</p>
              <h3 className="serif mt-2 text-3xl">Fotos e vídeos encontrados</h3>
              <p className="mt-3 max-w-2xl leading-7 text-[#bfaeb5]">
                Outras fotos e vídeos do backup podem continuar fazendo parte deste álbum.
              </p>
            </div>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#bfaeb5]">{importedMedia.length} mídias importadas</span>
          </div>

          {importedMedia.length > 0 ? (
            <div className="mt-8 grid grid-cols-4 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              {importedMedia.map((media) => (
                <figure key={media.src} className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  {media.kind === "image" ? (
                    <img src={media.src} alt={`Memória de ${media.date}`} className="aspect-square w-full object-cover" loading="lazy" />
                  ) : (
                    <video src={media.src} controls preload="metadata" className="aspect-square w-full object-cover" />
                  )}
                  <figcaption className="p-3 text-xs text-[#bfaeb5]">{media.date} · {media.author}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-white/15 p-8 text-center text-[#bfaeb5]">
              As oito fotos acima já fazem parte do álbum. Outras memórias podem chegar por aqui.
            </div>
          )}
        </div>
      </section>

      <section id="cartinhas" className={section}>
        <SectionTitle kicker="abra quando precisar" title="Cartinhas" text="Pequenos textos para dias diferentes — saudade, insegurança, tristeza, dúvida ou conquista." />
        <div className="grid grid-cols-[.8fr_1.2fr] gap-4 max-md:grid-cols-1">
          <div className="grid content-start gap-3">
            {letters.map((letter) => (
              <button key={letter.id} onClick={() => setActiveLetter(letter)} className={`rounded-2xl border px-5 py-4 text-left transition ${activeLetter.id === letter.id ? "translate-x-1 border-[#f1769e]/40 bg-[#f1769e]/10 text-white" : "border-white/10 text-[#bfaeb5]"}`}>
                {letter.title}
              </button>
            ))}
          </div>
          <article className="min-h-[360px] rounded-[2rem] bg-[#f3e8df] p-[clamp(2rem,5vw,4rem)] text-[#4a333a] shadow-2xl">
            <span className="serif italic">para Del,</span>
            <h3 className="serif mt-4 text-[clamp(2rem,4vw,3.6rem)]">{activeLetter.title}</h3>
            <p className="mt-5 text-lg leading-9">{activeLetter.text}</p>
            <strong className="serif mt-8 block">— Leandro ♥</strong>
          </article>
        </div>
      </section>

      <section id="duvida" className="mx-auto w-[min(900px,88vw)] py-24 text-center">
        <p className={eyebrow}>um lembrete importante</p>
        <h2 className="serif mt-3 text-[clamp(2.5rem,5vw,5rem)]">Quando você duvidar...</h2>
        <blockquote className="serif my-8 text-[clamp(2rem,4.8vw,4.7rem)] leading-tight text-[#e9a1b8]">“Eu não quero apenas chegar em você. Quero continuar escolhendo você depois também.”</blockquote>
        <p className="mx-auto max-w-2xl leading-8 text-[#bfaeb5]">Não quero que nossas palavras sejam maiores que nossas atitudes. Quero que a confiança venha do tempo, da constância e da forma como a gente cuida um do outro.</p>
      </section>

      <section className={section}>
        <p className={eyebrow}>um carinho aleatório</p>
        <div className={`${card} mt-5 grid min-h-72 place-items-center bg-[radial-gradient(circle_at_top,rgba(241,118,158,.16),transparent_50%)] p-8 text-center`}>
          <div>
            <p className="serif mx-auto max-w-4xl text-[clamp(1.8rem,4vw,3.8rem)] leading-tight">{randomCarinho}</p>
            <button onClick={drawCarinho} className="mt-7 rounded-full bg-[#f1769e] px-5 py-3 font-bold text-[#210e15]">Me dá outro carinho ♥</button>
          </div>
        </div>
      </section>

      <section id="planos" className={section}>
        <SectionTitle kicker="capítulo que ainda está sendo escrito" title="Nossos planos" text="Amor também pode ser parceria, incentivo e espaço para os dois crescerem." />
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          {plans.map((plan, i) => (
            <article key={plan} className={`${card} grid grid-cols-[52px_1fr] items-center gap-4 p-5`}>
              <span className="text-xs font-bold tracking-widest text-[#e9a1b8]">{String(i + 1).padStart(2, "0")}</span>
              <p>{plan}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={section}>
        <SectionTitle kicker="a trilha da gente" title="Músicas" text="A música apareceu desde junho e continuou virando conversa, flerte, reflexão e memória." />
        <div className="grid gap-3">
          {songs.map((song, i) => (
            <article key={`${song.artist}-${song.title}`} className={`${card} grid grid-cols-[48px_1fr_1.5fr] items-center gap-4 p-5 max-md:grid-cols-[40px_1fr]`}>
              <span className="font-bold text-[#e9a1b8]">{String(i + 1).padStart(2, "0")}</span>
              <div><h3 className="font-semibold">{song.title}</h3><p className="text-[#bfaeb5]">{song.artist}</p></div>
              <small className="text-[#bfaeb5] max-md:col-start-2">{song.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className={section}>
        <SectionTitle kicker="crescer juntos" title="Conquistas" text="Relacionamento não precisa diminuir os sonhos de ninguém. Quero que a gente celebre carreira, estudos, projetos e evolução individual." />
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {achievements.map((item) => (
            <article key={item.who} className={`${card} p-7`}>
              <span className="text-xs uppercase tracking-[.18em] text-[#e9a1b8]">{item.who}</span>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#bfaeb5]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid min-h-[70svh] place-items-center bg-[radial-gradient(circle,rgba(241,118,158,.13),transparent_45%)] px-[6vw] py-28 text-center">
        <div className="max-w-4xl">
          <p className={eyebrow}>do primeiro oi até aqui</p>
          <h2 className="serif my-5 text-[clamp(4rem,10vw,9rem)]">Eu escolhi você.</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#bfaeb5]">Pelo seu jeito, pelas nossas conversas, pelas coisas que temos em comum e por tudo que ainda podemos aprender um com o outro.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-[#e9a1b8]">
            <span>16.06.2026 · primeiro oi</span><span>•</span><span>04.07.2026 · primeiro encontro</span><span>•</span><span>04.10.2026 · namoro</span>
          </div>
        </div>
      </section>

      <footer className="flex min-h-28 items-center justify-between gap-6 border-t border-white/10 px-[5vw] py-8 text-sm text-[#bfaeb5] max-md:flex-col max-md:items-start">
        <span>Feito com ♥ para Del.</span>
        <span>Um arquivo vivo: continue adicionando fotos, músicas, conquistas e capítulos.</span>
      </footer>
    </main>
  );
}
