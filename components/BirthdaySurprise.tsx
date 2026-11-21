"use client";

import { useEffect, useRef, useState } from "react";
import { timelinePhotos } from "@/data/timeline-photos";
import BirthdayMusic from "@/components/BirthdayMusic";

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
    if (opened) headingRef.current?.focus();
  }, [opened]);

  const toggleNote = (index: number) => {
    setOpenedNotes((current) => current.includes(index) ? current.filter((i) => i !== index) : [...current, index]);
  };

  return (
    <main className="bd-page">
      <a className="bd-skip" href={opened ? "#bd-content" : "#bd-open"}>Pular para o conteúdo</a>
      <header className="bd-header">
        <div className="bd-header-inner">
          <a href="/" className="bd-monogram" aria-label="Del e Leandro, voltar ao site">D<span>♥</span>L</a>
          <span className="bd-edition">Uma edição especial · 22.11.2026</span>
          <a href="/" className="bd-back">← <span>Nosso cantinho</span></a>
        </div>
      </header>

      {!opened ? (
        <section className="bd-intro-gift" aria-labelledby="bd-gift-title">
          <span className="bd-ghost-year" aria-hidden="true">22</span>
          <div className="bd-intro-center">
            <p className="bd-overline bd-overline-light">UMA CARTA, ALGUMAS MEMÓRIAS E TODO O MEU CARINHO</p>
            <div className="bd-gift-ornament" aria-hidden="true">✧ <span>♥</span> ✧</div>
            <h1 className="bd-display bd-gift-title" id="bd-gift-title">Tem um presente <em>para você.</em></h1>
            <p className="bd-gift-description">Del, eu preparei um cantinho novo na nossa história. Porque hoje é o seu dia — e você merece ser celebrada.</p>
            <button className="bd-cta" type="button" id="bd-open" onClick={() => setOpened(true)}>Abrir minha surpresa <span aria-hidden="true">↗</span></button>
            <p className="bd-gift-signature">De Leandro, com carinho.</p>
          </div>
          <span className="bd-intro-caption" aria-hidden="true">FELIZ ANIVERSÁRIO · 2026</span>
        </section>
      ) : (
        <div id="bd-content" className="bd-reveal">
          <section className="bd-hero" aria-labelledby="bd-hero-title">
            <div className="bd-hero-grid">
              <div className="bd-hero-copy">
                <p className="bd-overline bd-overline-light">PARA MINHA PRETINHA · 22 DE NOVEMBRO</p>
                <h1 className="bd-display bd-hero-title" id="bd-hero-title" ref={headingRef} tabIndex={-1}>Hoje o mundo celebra <em>você.</em></h1>
                <p className="bd-hero-lead">Feliz aniversário, meu bem. Separei algumas lembranças e palavras que queria te entregar de um jeito diferente.</p>
                <a className="bd-cta" href="#bd-memories">Começar nossa viagem <span aria-hidden="true">↓</span></a>
                <p className="bd-hero-signature">Feito à mão, em forma de pixels. ♥</p>
              </div>
              <div className="bd-hero-art">
                <div className="bd-photo-ring" aria-hidden="true" />
                <div className="bd-hero-frame">
                  {couplePhoto && <img src={couplePhoto.src} width={couplePhoto.width} height={couplePhoto.height} alt="Nossa foto de casal de outubro" decoding="async" fetchPriority="high" />}
                </div>
                <div className="bd-date-stamp" aria-hidden="true"><strong>22</strong><span>NOV</span></div>
                <p className="bd-photo-caption">DEL & LEANDRO — NOSSA HISTÓRIA CONTINUA</p>
              </div>
            </div>
          </section>

          <nav className="bd-chapter-nav" aria-label="Navegação do presente">
            <a href="#bd-memories"><span>01</span> Nossas memórias</a>
            <a href="#bd-notes"><span>02</span> Bilhetinhos</a>
            <a href="#bd-letter"><span>03</span> Minha carta</a>
          </nav>

          <section className="bd-quote" aria-label="Dedicatória">
            <p className="bd-overline">UM PRESENTE SOBRE O QUE IMPORTA</p>
            <p className="bd-display">Existem datas que a gente comemora. <em>E pessoas que a gente celebra.</em></p>
            <span className="bd-quote-rule" aria-hidden="true" />
          </section>

          <section className="bd-section bd-memories" id="bd-memories" aria-labelledby="bd-memories-title">
            <div className="bd-section-head">
              <div><p className="bd-overline">01 / A NOSSA HISTÓRIA</p><h2 className="bd-display" id="bd-memories-title">Momentos que <em>ficaram.</em></h2></div>
              <p>Das primeiras conversas aos pequenos encontros. Algumas fotos carregam muito mais do que conseguem mostrar.</p>
            </div>
            <div className="bd-memories-list">
              {memories.map((memory, index) => {
                const photo = timelinePhotos.find((item) => item.id === memory.photoId);
                if (!photo) return null;
                return (
                  <article className={"bd-memory " + (index % 2 ? "bd-memory-alt" : "")} key={memory.photoId}>
                    <div className="bd-memory-media">
                      <img src={photo.src} alt={photo.caption} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
                      <span className="bd-memory-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="bd-memory-body">
                      <span className="bd-memory-date">{memory.date}</span>
                      <p className="bd-memory-label">{memory.label}</p>
                      <h3 className="bd-display">{memory.title}</h3>
                      <p className="bd-memory-description">{memory.text}</p>
                      <div className="bd-small-rule" aria-hidden="true" />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="bd-notes-bg" id="bd-notes" aria-labelledby="bd-notes-title">
            <div className="bd-section">
              <div className="bd-section-head">
                <div><p className="bd-overline bd-overline-light">02 / PEQUENAS PALAVRAS</p><h2 className="bd-display" id="bd-notes-title">Quatro bilhetes. <em>Um carinho.</em></h2></div>
                <p>Cada bilhete guarda uma coisa que eu queria te dizer. Escolha um e toque para abrir.</p>
              </div>
              <div className="bd-note-grid">
                {notes.map((note, index) => {
                  const isOpen = openedNotes.includes(index);
                  return (
                    <button type="button" key={note.title} className={"bd-note " + (isOpen ? "bd-note-open" : "")} aria-expanded={isOpen} aria-label={(isOpen ? "Fechar" : "Abrir") + " bilhete " + (index + 1) + ": " + note.title} onClick={() => toggleNote(index)}>
                      <span className="bd-note-top"><span>{note.label}</span><span className="bd-note-plus" aria-hidden="true">{isOpen ? "−" : "+"}</span></span>
                      <strong className="bd-display">{note.title}</strong>
                      <span className="bd-note-body">{isOpen ? note.text : "Um pedacinho do que eu sinto, esperando por você."}</span>
                      <span className="bd-note-bottom">{isOpen ? "Fechar bilhete" : "Ler bilhete"} <span aria-hidden="true">↗</span></span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bd-letter-area" id="bd-letter" aria-labelledby="bd-letter-title">
            <div className="bd-letter-intro">
              <p className="bd-overline">03 / DE MIM PARA VOCÊ</p>
              <h2 className="bd-display">Algumas coisas merecem <em>ser escritas.</em></h2>
            </div>
            <article className="bd-paper">
              <div className="bd-paper-top"><span>22 de novembro de 2026</span><span aria-hidden="true">✳</span></div>
              <p className="bd-paper-dear">Minha pretinha,</p>
              <h3 className="bd-display" id="bd-letter-title">Hoje é sobre <em>você.</em></h3>
              <div className="bd-letter-text">
                <p>Meu bem, hoje eu queria te dar algo que tivesse um pouquinho de nós dois.</p>
                <p>Desde aquele encontro no Felicità Café, a gente viveu dias que viraram lembranças especiais. As conversas, os passeios, os pequenos detalhes e a alegria de dividir momentos com você são coisas que guardo com carinho.</p>
                <p>Admiro seu jeito de sentir as coisas, seu carinho e a pessoa que você é. Quero que você saiba que merece ser celebrada não só hoje, mas também nos pequenos dias.</p>
                <p>Para esse novo ciclo, desejo saúde, paz, felicidade, conquistas e muitos sorrisos. Que você siga encontrando motivos para realizar seus sonhos e que a vida te trate com toda a delicadeza que você merece.</p>
                <p>Obrigado por fazer parte da minha história. Espero que a gente ainda crie muitas lembranças bonitas juntos.</p>
              </div>
              <div className="bd-signoff"><span>Feliz aniversário, Del. ♥</span><strong>Com carinho, Leandro.</strong></div>
            </article>
          </section>

          <section className="bd-ending" aria-label="Mensagem final">
            <div className="bd-ending-heart" aria-hidden="true">♥</div>
            <p className="bd-overline bd-overline-light">E SE ESTA HISTÓRIA É FEITA DE CAPÍTULOS...</p>
            <h2 className="bd-display">Que o próximo seja <em>lindo para você.</em></h2>
            <p>Feliz aniversário, minha pretinha. Que nunca faltem motivos para sorrir.</p>
            <span className="bd-end-signature">Sempre com carinho, Leandro ♥</span>
            <a className="bd-end-link" href="/">Voltar para o nosso site <span aria-hidden="true">↗</span></a>
          </section>

          <footer className="bd-footer"><span>Del & Leandro</span><span>Uma lembrança feita para 22.11.2026</span></footer>
          <BirthdayMusic />
        </div>
      )}
    </main>
  );
}
