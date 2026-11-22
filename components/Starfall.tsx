import type { CSSProperties } from "react";

/** Static layout is intentional: no render-time randomness or hydration differences. */
const hearts = [
  { left: "6%", size: "12px", duration: "23s", delay: "-3s", drift: "22px" },
  { left: "15%", size: "9px", duration: "28s", delay: "-18s", drift: "-16px" },
  { left: "27%", size: "16px", duration: "19s", delay: "-11s", drift: "31px" },
  { left: "39%", size: "11px", duration: "27s", delay: "-4s", drift: "-29px" },
  { left: "52%", size: "20px", duration: "31s", delay: "-23s", drift: "18px" },
  { left: "64%", size: "8px", duration: "21s", delay: "-9s", drift: "-15px" },
  { left: "73%", size: "15px", duration: "25s", delay: "-19s", drift: "24px" },
  { left: "83%", size: "10px", duration: "30s", delay: "-13s", drift: "-27px" },
  { left: "94%", size: "18px", duration: "22s", delay: "-6s", drift: "16px" },
  { left: "33%", size: "9px", duration: "29s", delay: "-25s", drift: "-20px" },
  { left: "88%", size: "13px", duration: "26s", delay: "-2s", drift: "28px" },
] as const;

type HeartStyle = CSSProperties & {
  "--bd-left": string;
  "--bd-size": string;
  "--bd-duration": string;
  "--bd-delay": string;
  "--bd-drift": string;
};

export default function Starfall() {
  return (
    <div className="bd-sky" aria-hidden="true">
      {hearts.map((heart, index) => {
        const style: HeartStyle = {
          "--bd-left": heart.left,
          "--bd-size": heart.size,
          "--bd-duration": heart.duration,
          "--bd-delay": heart.delay,
          "--bd-drift": heart.drift,
        };
        return <span className="bd-sky-heart" style={style} key={index}>♥</span>;
      })}
    </div>
  );
}
