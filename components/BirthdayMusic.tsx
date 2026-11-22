"use client";

import { useState } from "react";

const SONG_URL = "https://youtu.be/V141wUSkTfk";
const EMBED_URL =
  "https://www.youtube-nocookie.com/embed/V141wUSkTfk?autoplay=1&playsinline=1&rel=0";

export default function BirthdayMusic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bd-music-dock" aria-label="Trilha sonora da surpresa">
      {isOpen ? (
        <div className="bd-music-card" id="bd-music-player">
          <div className="bd-music-card-head">
            <div className="bd-music-meta">
              <span className="bd-music-label">NOSSA TRILHA SONORA ♡</span>
              <strong>Planos</strong>
              <small>BK&apos; feat. Luccas Carlos</small>
            </div>
            <button
              type="button"
              className="bd-music-close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar player e parar a música"
              title="Fechar player e parar a música"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="bd-music-embed">
            <iframe
              src={EMBED_URL}
              title="Nossa trilha sonora — Planos, BK' feat. Luccas Carlos"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="bd-music-foot">
            <span>Se não iniciar, toque em play no vídeo.</span>
            <a href={SONG_URL} target="_blank" rel="noopener noreferrer">
              Abrir no YouTube ↗
            </a>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="bd-music-trigger"
          aria-expanded={false}
          aria-controls="bd-music-player"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvir nossa música: Planos, BK' e Luccas Carlos"
        >
          <span className="bd-music-trigger-icon" aria-hidden="true">♫</span>
          <span className="bd-music-trigger-copy">
            <strong>Ouvir nossa música ♡</strong>
            <small>Planos · BK&apos; feat. Luccas Carlos</small>
          </span>
          <span className="bd-music-trigger-play" aria-hidden="true">▶</span>
        </button>
      )}
    </aside>
  );
}
