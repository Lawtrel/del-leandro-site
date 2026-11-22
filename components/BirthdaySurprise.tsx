"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BirthdayMusic from "@/components/BirthdayMusic";
import EnchantedLandscape from "@/components/EnchantedLandscape";
import Starfall from "@/components/Starfall";
import { timelinePhotos } from "@/data/timeline-photos";

/* Preserved word-for-word from the birthday edition in PR #1. */
const memories = [
  { photoId: "primeiro-encontro-cafeteria", date: "04 JUL · 2026", label: "Primeiro capítulo", title: "Tudo começou com um café.", text: "Aquele primeiro encontro no Felicità Café. Ainda gosto de pensar em quantas histórias cabiam naquele começo." },
  { photoId: "milkshake-mr-shake", date: "05 SET · 2026", label: "Pequenas alegrias", title: "A felicidade mora nos detalhes.", text: "Um milkshake, uma conversa e mais uma lembrança que eu gosto de guardar com você." },
  { photoId: "hamburguer-artesanal", date: "13 SET · 2026", label: "Mais um dia nosso", title: "O simples também vira especial.", text: "Não é só sobre os lugares aonde a gente vai, mas sobre ter você ali para dividir o momento." },
  { photoId: "foto-de-casal", date: "10 OUT · 2026", label: "Oficialmente nós", title: "E então, nós dois.", text: "Em 4 de outubro decidimos chamar essa história de namoro. Essa foto guarda um pedacinho desse novo capítulo." },
];

const notes = [
  { label: "01 / Admiração", title: "O que eu admiro em você", text: "Seu carinho, sua força e esse seu jeito intenso de se importar com quem você ama. Você tem uma presença que não passa despercebida." },
  { label: "02 / Memória", title: "Uma lembrança que guardo", text: "Nosso primeiro encontro. Às vezes as coisas que mudam a gente começam com uma conversa e um café." },
  { label: "03 / Desejo", title: "O que desejo para seu novo ciclo", text: "Que não faltem saúde, paz, conquistas e momentos de leveza. Que você encontre muitos motivos para sorrir, inclusive nos dias comuns." },
  { label: "04 / Futuro", title: "O que ainda quero viver", text: "Mais passeios, músicas, conversas tranquilas, risadas espontâneas e pequenas memórias que, com o tempo, viram uma história bonita." },
];

const couplePhoto = timelinePhotos.find((photo) => photo.id === "foto-de-casal");

export default function BirthdaySurprise() {
  const [opened, setOpened] = useState(false);
  const [openedNotes, setOpenedNotes] = useState<number[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (opened) headingRef.current?.focus({ preventScroll: true });
  }, [opened]);

  function toggleNote(index: number) {
    setOpenedNotes((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  }

  return (
    <main className="bd-page">
      <a className="bd-skip" href={opened ? "#bd-content" : "#bd-open"}>Pular para o conteúdo</a>
      <header className="bd-header">
        <div className="bd-header-inner">
          <a href="/" className="bd-monogram" aria-label="Del e Leandro, voltar ao site">D<span>♥</span>L</a>
          <span className="bd-edition">Um mundo feito só para você <span aria-hidden="true">✧</span> 22.11.2026</span>
          <a className="bd-back" href="/">Voltar ao nosso cantinho <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      {!opened ? (
        <section className="bd-portal" aria-labelledby="bd-gift-title">
          <Starfall />
          <EnchantedLandscape variant="portal" />
          <div className="bd-portal-inner">
            <div className="bd-portal-object" aria-hidden="true">
              <div className="bd-door-stars">✦ <span>✧</span> ✦</div>
              <div className="bd-door-arch">
                <span className="bd-door-stitch" />
                <span className="bd-door-emblem">D <span>♡</span> L</span>
                <span className="bd-door-knob" />
                <span className="bd-door-plaque">22 · NOV</span>
              </div>
              <span className="bd-door-ground">✿ &nbsp; ✧ &nbsp; ✿</span>
            </div>
            <div className="bd-portal-copy">
              <p className="bd-eyebrow"><span className="bd-eyebrow-line" /> ERA UMA VEZ, UM DIA ESPECIAL <span className="bd-eyebrow-line" /></p>
              <p className="bd-portal-prologue">Uma porta secreta se abriu no dia do seu aniversário...</p>
              <h1 id="bd-gift-title" className="bd-display bd-portal-title">Feliz aniversário, <em>minha pretinha ❤️</em></h1>
              <p className="bd-portal-description">Preparei um pequeno mundo só nosso, cheio de lembranças, carinho e coisas que eu queria te dizer.</p>
              <p className="bd-portal-original">Del, eu preparei um cantinho novo na nossa história. Porque hoje é o seu dia — e você merece ser celebrada.</p>
              <button type="button" className="bd-cta bd-portal-cta" id="bd-open" onClick={() => setOpened(true)}>
                <span aria-hidden="true">✧</span> Entrar no nosso mundo mágico <span aria-hidden="true">↗</span>
              </button>
              <span className="bd-script-signature">De Leandro, com carinho.</span>
            </div>
          </div>
          <p className="bd-portal-bottom" aria-hidden="true">UM PRESENTE ESCONDIDO ENTRE ESTRELAS E MEMÓRIAS</p>
        </section>
      ) : (
        <div className="bd-world" id="bd-content">
          <section className="bd-hero" aria-labelledby="bd-hero-title">
            <Starfall />
            <EnchantedLandscape variant="garden" />
            <div className="bd-hero-inner">
              <div className="bd-hero-copy">
                <div className="bd-chapter-label"><span>PRÓLOGO</span> <span className="bd-chapter-rule" /> <span>22 DE NOVEMBRO</span></div>
                <p className="bd-hero-intro">Para a minha pretinha, com todo o meu amor.</p>
                <h1 className="bd-display bd-hero-title" ref={headingRef} tabIndex={-1} id="bd-hero-title">Hoje o mundo celebra <em>você.</em></h1>
                <p className="bd-hero-lead">Feliz aniversário, meu bem. Separei algumas lembranças e palavras que queria te entregar de um jeito diferente.</p>
                <a className="bd-cta" href="#bd-memories">Descobrir nossas lembranças <span aria-hidden="true">↓</span></a>
                <p className="bd-hero-handwritten">Feito à mão, em forma de pixels. ♥</p>
              </div>
              <div className="bd-hero-photo-wrap">
                <div className="bd-orbit" aria-hidden="true"><span>✧</span><span>✦</span></div>
                <div className="bd-hero-photo">
                  {couplePhoto && <Image src={couplePhoto.src} width={couplePhoto.width} height={couplePhoto.height} priority sizes="(max-width: 720px) 78vw, 32vw" alt="Foto real de Del e Leandro juntos em outubro" />}
                  <span className="bd-hero-photo-corner" aria-hidden="true">✺</span>
                </div>
                <span className="bd-photo-date">22 <small>NOV</small></span>
                <p className="bd-photo-caption">DEL & LEANDRO <span aria-hidden="true">✧</span> NOSSA HISTÓRIA CONTINUA</p>
              </div>
            </div>
          </section>

          <nav className="bd-chapter-nav" aria-label="Mapa do nosso mundo">
            <span className="bd-nav-label">MAPA DO NOSSO MUNDO</span>
            <a href="#bd-memories"><span aria-hidden="true">✿</span> Jardim das memórias</a>
            <a href="#bd-notes"><span aria-hidden="true">✉</span> Portas secretas</a>
            <a href="#bd-letter"><span aria-hidden="true">♡</span> A carta especial</a>
          </nav>

          <section className="bd-interlude" aria-label="Dedicatória">
            <div className="bd-interlude-symbol" aria-hidden="true">✧ <span>♡</span> ✧</div>
            <p className="bd-interlude-label">UM PRESENTE SOBRE O QUE IMPORTA</p>
            <p className="bd-display">Existem datas que a gente comemora. <em>E pessoas que a gente celebra.</em></p>
            <span className="bd-interlude-thread" aria-hidden="true" />
          </section>

          <section className="bd-memory-section" id="bd-memories" aria-labelledby="bd-memories-title">
            <div className="bd-section-heading">
              <p className="bd-chapter-kicker">CAPÍTULO I <span aria-hidden="true">—</span> UM JARDIM DE LEMBRANÇAS</p>
              <h2 className="bd-display" id="bd-memories-title">Momentos que <em>ficaram.</em></h2>
              <p>Das primeiras conversas aos pequenos encontros. Algumas fotos carregam muito mais do que conseguem mostrar.</p>
            </div>
            <div className="bd-memory-path" aria-hidden="true" />
            <div className="bd-memory-list">
              {memories.map((memory, index) => {
                const photo = timelinePhotos.find((item) => item.id === memory.photoId);
                if (!photo) return null;
                return (
                  <article className={"bd-memory " + (index % 2 ? "bd-memory-alt" : "")} key={memory.photoId}>
                    <div className="bd-memory-photo">
                      <div className="bd-memory-media">
                        <Image src={photo.src} alt={photo.caption} width={photo.width} height={photo.height} sizes="(max-width: 720px) 90vw, 40vw" loading="lazy" />
                      </div>
                      <span className="bd-memory-tape" aria-hidden="true" />
                      <span className="bd-memory-scribble" aria-hidden="true">✧</span>
                    </div>
                    <div className="bd-memory-story">
                      <span className="bd-memory-number" aria-label={"Memória " + (index + 1)}>{String(index + 1).padStart(2, "0")}</span>
                      <p className="bd-memory-date">{memory.date}</p>
                      <p className="bd-memory-label">{memory.label}</p>
                      <h3 className="bd-display">{memory.title}</h3>
                      <p className="bd-memory-description">{memory.text}</p>
                      <span className="bd-memory-ending" aria-hidden="true">✧ ─── ♡</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="bd-secret-section" id="bd-notes" aria-labelledby="bd-notes-title">
            <Starfall />
            <div className="bd-secret-inner">
              <div className="bd-section-heading bd-secret-heading">
                <p className="bd-chapter-kicker">CAPÍTULO II <span aria-hidden="true">—</span> PORTINHAS SECRETAS</p>
                <h2 className="bd-display" id="bd-notes-title">Quatro portas. <em>Quatro carinhozinhos.</em></h2>
                <p>Cada bilhete guarda uma coisa que eu queria te dizer. Escolha um e toque para abrir.</p>
              </div>
              <div className="bd-note-grid">
                {notes.map((note, index) => {
                  const isOpen = openedNotes.includes(index);
                  return (
                    <article className={"bd-envelope " + (isOpen ? "bd-envelope-open" : "")} key={note.title}>
                      <button type="button" className="bd-note" aria-expanded={isOpen} aria-controls={"bd-note-secret-" + index}
                        aria-label={(isOpen ? "Fechar" : "Abrir") + " bilhete " + (index + 1) + ": " + note.title}
                        onClick={() => toggleNote(index)}>
                        <span className="bd-note-door" aria-hidden="true"><span className="bd-note-insignia">{["✧", "✿", "♡", "✦"][index]}</span><span className="bd-note-keyhole" /></span>
                        <span className="bd-note-top">{note.label} <span className="bd-note-switch" aria-hidden="true">{isOpen ? "−" : "+"}</span></span>
                        <strong className="bd-display">{note.title}</strong>
                        <span className="bd-note-bottom">{isOpen ? "Fechar mensagem" : "Toque para revelar"} <span aria-hidden="true">↗</span></span>
                      </button>
                      <div id={"bd-note-secret-" + index} className="bd-note-secret" aria-hidden={!isOpen} data-open={isOpen}>
                        <div><p>{note.text}</p></div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bd-letter-section" id="bd-letter" aria-labelledby="bd-letter-title">
            <div className="bd-letter-stars" aria-hidden="true">✧ &nbsp; ✦ &nbsp; ✧</div>
            <div className="bd-section-heading bd-letter-heading">
              <p className="bd-chapter-kicker">CAPÍTULO III <span aria-hidden="true">—</span> A CARTA GUARDADA</p>
              <h2 className="bd-display">Algumas coisas merecem <em>ser escritas.</em></h2>
            </div>
            <article className="bd-paper">
              <div className="bd-paper-border" aria-hidden="true"/>
              <header className="bd-paper-top"><span>22 de novembro de 2026</span><span aria-hidden="true">✺</span></header>
              <p className="bd-paper-dear">Minha pretinha,</p>
              <h3 className="bd-display" id="bd-letter-title">Hoje é sobre <em>você.</em></h3>
              <div className="bd-letter-text">
                <p>Meu bem, hoje eu queria te dar algo que tivesse um pouquinho de nós dois.</p>
                <p>Desde aquele encontro no Felicità Café, a gente viveu dias que viraram lembranças especiais. As conversas, os passeios, os pequenos detalhes e a alegria de dividir momentos com você são coisas que guardo com carinho.</p>
                <p>Admiro seu jeito de sentir as coisas, seu carinho e a pessoa que você é. Quero que você saiba que merece ser celebrada não só hoje, mas também nos pequenos dias.</p>
                <p>Para esse novo ciclo, desejo saúde, paz, felicidade, conquistas e muitos sorrisos. Que você siga encontrando motivos para realizar seus sonhos e que a vida te trate com toda a delicadeza que você merece.</p>
                <p>Obrigado por fazer parte da minha história. Espero que a gente ainda crie muitas lembranças bonitas juntos.</p>
              </div>
              <footer className="bd-signoff"><span>Feliz aniversário, Del. ♥</span><strong>Com carinho, Leandro.</strong></footer>
              <span className="bd-paper-seal" aria-hidden="true">♡</span>
            </article>
          </section>

          <section className="bd-farewell" aria-label="Mensagem final de aniversário">
            <Starfall />
            <EnchantedLandscape variant="farewell" />
            <div className="bd-farewell-content">
              <p className="bd-chapter-kicker">E SE ESTA HISTÓRIA É FEITA DE CAPÍTULOS...</p>
              <div className="bd-farewell-ornament" aria-hidden="true">✧ ♡ ✧</div>
              <h2 className="bd-display">Que o próximo seja <em>lindo para você.</em></h2>
              <p>Feliz aniversário, minha pretinha. Que nunca faltem motivos para sorrir.</p>
              <span className="bd-farewell-signature">Sempre com carinho, Leandro ♥</span>
              <a className="bd-farewell-back" href="/">Voltar para o nosso site <span aria-hidden="true">↗</span></a>
            </div>
          </section>
          <footer className="bd-footer"><span>Del & Leandro</span><span>Uma lembrança feita para 22.11.2026</span></footer>
          <BirthdayMusic />
        </div>
      )}
    </main>
  );
}
