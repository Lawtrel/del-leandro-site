type EnchantedLandscapeProps = {
  variant?: "portal" | "garden" | "farewell";
};

/** Entirely original scenery: handmade silhouettes, lanterns and a night garden. */
export default function EnchantedLandscape({ variant = "garden" }: EnchantedLandscapeProps) {
  return (
    <svg className={"bd-landscape bd-landscape-" + variant} viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bd-skyline-fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7786c2" stopOpacity=".12"/>
          <stop offset="1" stopColor="#8994c3" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="bd-hill-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#23345b"/>
          <stop offset="1" stopColor="#0b152b"/>
        </linearGradient>
        <radialGradient id="bd-lantern-light">
          <stop offset="0" stopColor="#e7ce85" stopOpacity=".68"/>
          <stop offset="1" stopColor="#e7ce85" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="1160" cy="107" r="56" fill="#f2e8bb" opacity=".9"/>
      <circle cx="1180" cy="89" r="51" fill="#172141"/>
      <g fill="#d7ca9a" opacity=".64">
        <circle cx="85" cy="75" r="2"/><circle cx="241" cy="123" r="1.5"/><circle cx="389" cy="56" r="2.2"/>
        <circle cx="552" cy="102" r="1.4"/><circle cx="714" cy="48" r="2"/><circle cx="850" cy="125" r="1.8"/>
        <circle cx="989" cy="44" r="1.1"/><circle cx="1325" cy="91" r="2"/><circle cx="1404" cy="40" r="1.4"/>
        <circle cx="167" cy="205" r="1.5"/><circle cx="609" cy="213" r="1.7"/><circle cx="1026" cy="215" r="1.2"/>
      </g>
      <path d="M0 398 Q160 290 338 357 T650 337 Q830 280 1038 340 T1440 312 V600 H0Z" fill="#1c2b51"/>
      <path d="M0 433 Q206 372 392 422 Q554 370 749 413 Q1000 338 1188 404 Q1318 381 1440 416 V600 H0Z" fill="#192746"/>
      <ellipse cx="750" cy="412" rx="480" ry="85" fill="url(#bd-skyline-fog)"/>
      {/* The crooked little cottage is original and intentionally does not reproduce a film location. */}
      <g transform="translate(925 184)" className="bd-cottage">
        <path d="M64 165 L64 82 L136 22 L214 79 L214 164Z" fill="#161d37" stroke="#52618a" strokeWidth="3"/>
        <path d="M42 89 L138 1 L236 92 L218 100 L136 28 L58 102Z" fill="#283052" stroke="#7181a8" strokeWidth="3"/>
        <path d="M116 28 L116 -5 L156 -5 L156 29" fill="#232946"/>
        <path d="M123 -5 L112 -24 L154 -26 L165 -5Z" fill="#32395b"/>
        <rect x="84" y="102" width="30" height="32" rx="12" fill="#e6c77c" opacity=".88"/>
        <rect x="167" y="100" width="28" height="33" rx="10" fill="#e6c77c" opacity=".86"/>
        <path d="M141 164 L141 104 Q141 88 156 88 Q170 88 170 104 L170 164Z" fill="#10172b" stroke="#9e8d70" strokeWidth="3"/>
        <circle cx="162" cy="129" r="2.5" fill="#dfc985"/>
        <path d="M99 100 V135 M85 117 H114 M181 100 V135 M167 116 H195" stroke="#554e5f" strokeWidth="3" opacity=".8"/>
        <path d="M61 166 Q141 151 218 166" stroke="#c3a872" strokeWidth="2" opacity=".6" fill="none"/>
        <path d="M182 -25 L184 -56 L199 -60" stroke="#1b203a" strokeWidth="5" fill="none"/>
      </g>
      {/* Bent trees, winding boughs, and distant embroidered garden shapes. */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M65 520 Q91 383 59 246 Q28 184 47 120 M64 343 Q128 285 137 198 Q143 168 177 151 M70 277 Q22 250 10 198" stroke="#0d172e" strokeWidth="27"/>
        <path d="M59 252 Q91 192 140 188 Q192 177 224 123 M67 207 Q17 166 11 109" stroke="#14203a" strokeWidth="15"/>
        <path d="M1378 526 Q1321 398 1372 275 Q1420 187 1376 125 M1356 355 Q1302 305 1264 251 Q1235 203 1205 189 M1372 281 Q1410 264 1438 209" stroke="#0e182f" strokeWidth="29"/>
        <path d="M1366 270 Q1285 211 1267 130 M1380 223 Q1420 180 1436 133" stroke="#17213d" strokeWidth="13"/>
      </g>
      <path d="M0 497 Q206 432 426 498 Q624 445 799 482 Q978 455 1121 493 Q1326 443 1440 490 V600 H0Z" fill="url(#bd-hill-front)"/>
      <path d="M0 556 Q270 493 537 550 Q698 502 867 546 Q1133 483 1440 543 V600 H0Z" fill="#0b172c"/>
      <path d="M690 600 Q727 548 771 521 Q801 504 837 480 Q863 465 879 450" stroke="#c8b07e" strokeWidth="14" opacity=".17" fill="none"/>
      <path d="M690 600 Q727 548 771 521 Q801 504 837 480 Q863 465 879 450" stroke="#dbc794" strokeWidth="2" opacity=".24" fill="none" strokeDasharray="3 18"/>
      <g stroke="#526188" strokeWidth="2" fill="none" opacity=".9">
        <path d="M194 563 Q188 547 179 536 M194 563 Q201 546 213 535"/>
        <path d="M308 576 Q294 560 284 551 M308 576 Q325 556 335 548"/>
        <path d="M1227 578 Q1214 562 1196 553 M1227 578 Q1237 551 1253 547"/>
        <path d="M1355 564 Q1338 549 1333 540 M1355 564 Q1373 548 1387 544"/>
      </g>
      <g fill="#d1a5c1" opacity=".75">
        <circle cx="179" cy="536" r="5"/><circle cx="213" cy="535" r="4"/>
        <circle cx="284" cy="551" r="4"/><circle cx="335" cy="548" r="5"/>
        <circle cx="1196" cy="553" r="5"/><circle cx="1253" cy="547" r="4"/>
        <circle cx="1333" cy="540" r="4"/><circle cx="1387" cy="544" r="5"/>
      </g>
      <g opacity=".6">
        <circle cx="335" cy="391" r="60" fill="url(#bd-lantern-light)"/>
        <circle cx="335" cy="391" r="3.5" fill="#f0d28c"/>
        <circle cx="1197" cy="402" r="54" fill="url(#bd-lantern-light)"/>
        <circle cx="1197" cy="402" r="3" fill="#f0d28c"/>
      </g>
    </svg>
  );
}
