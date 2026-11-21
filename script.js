/* =========================================================
   EDIT DI SINI SAJA — semua isi scrapbook ada di CONFIG
   ========================================================= */
const CONFIG = {
  password: "221107",
  name: "Rayyaa",
  from: "Aldi",
  age: 19,
  editionDate: "22 November 2026",

  // 9 pilihan di layar awal (satu benar = password). Urutan diacak otomatis.
  options: ["221107", "445556", "221117", "071122", "120711", "211107", "221170", "301106", "110722"],

  // Pesan kalau pilihan salah (diputar bergantian)
  wrongMessages: [
    "Hmm, masa lupa sama hari lahir sendiri?",
    "Salah, sayang. Coba lagi ya.",
    "Eits, bukan yang itu.",
    "Masih salah...",
    "Ayo dong, sayang pasti tahu.",
    "Yang itu tanggal lahir mantan?",
    "Hampir! Coba ingat-ingat lagi.",
    "Tinggal sedikit lagi, semangat!",
  ],
  hintAfter: 3,
  hintText: "Petunjuk: hari lahir, format DDMMYY.",

  // Foto sampul depan
  coverPhoto: "images/cover.jpg",

  // Halaman isi buku (urutan = urutan di buku)
  // type: "intro" | "photo" | "photos2" | "cake" | "letter" | "balloons" | "gift" | "end"
  // Foto: taruh file di folder images/. Kalau file belum ada, muncul placeholder.
  pages: [
    {
      type: "intro",
      kicker: "Laporan Utama",
      title: "Cerita Kecil Tentang Kita",
      deck: "Kumpulan momen sederhana yang ternyata paling berharga.",
      text: [
        "Edisi ini disusun khusus untuk satu pembaca saja: Rayyaa. Di dalamnya ada foto, catatan, dan beberapa kejutan kecil yang bisa kamu sentuh.",
        "Silakan balik halamannya pelan-pelan. Geser stikernya kalau mau, tiup lilinnya, pecahkan balonnya, dan buka kadonya.",
      ],
    },
    {
      type: "photo",
      kicker: "Foto Eksklusif",
      src: "images/photo1.jpg",
      caption: "Pertama kali kita ketemu",
      note: "Aku masih ingat banget hari itu. Rasanya baru kemarin.",
    },
    {
      type: "photos2",
      kicker: "Galeri",
      title: "Hari-Hari Biasa yang Luar Biasa",
      photos: [
        { src: "images/photo2.jpg", caption: "Jalan-jalan pertama" },
        { src: "images/photo3.jpg", caption: "lucu banget" },
      ],
    },
    {
      type: "cake",
      kicker: "Acara Utama",
      title: "Tiup Lilinnya!",
      deck: "Ketuk lilin satu per satu, atau tiup sungguhan lewat mikrofon.",
      wish: "Semoga semua doa sayang terkabul.",
    },
    {
      type: "letter",
      kicker: "Surat Untukmu",
      title: "Dear Rayyaa,",
      paragraphs: [
        "Selamat ulang tahun, sayang! Hari ini aku cuma mau bilang betapa bersyukurnya aku punya sayang.",
        "Terima kasih udah sabar, udah jadi tempat pulang, dan udah bikin hari-hari biasa jadi terasa istimewa.",
      ],
    },
    {
      type: "letter",
      kicker: "Lanjutan",
      paragraphs: [
        "Semoga di umur yang baru ini sayang makin bahagia, makin sehat, dan semua mimpi sayang satu per satu jadi nyata.",
        "Aku akan selalu ada di sini, nemenin sayang di setiap langkahnya.",
      ],
      sign: "Love you always",
    },
    {
      type: "balloons",
      kicker: "Kolom Interaktif",
      title: "Pecahkan Balonnya",
      deck: "Tiap balon menyimpan satu alasan kenapa aku sayang sama sayang.",
      reasons: [
        "Senyum sayang bikin hari jelek jadi baik",
        "sayang sabar banget sama aku",
        "sayang paling lucu sedunia",
        "sayang selalu berusaha bikin aku nyaman",
        "sayang bikin aku jadi lebih baik",
        "Ya karena sayang adalah sayang",
      ],
    },
    {
      type: "photos2",
      kicker: "Arsip",
      title: "Dokumentasi Kita",
      photos: [
        { src: "images/photo4.jpg", caption: "Random tapi gemas" },
        { src: "images/photo5.jpg", caption: "Kita" },
      ],
    },
    {
      type: "gift",
      kicker: "Hadiah",
      title: "Ada Kado Untuk sayang",
      deck: "Ketuk kadonya. Ketuk vouchernya untuk lihat voucher berikutnya.",
      coupons: [
        { title: "1x Peluk Gratis", text: "Berlaku kapan saja, tanpa batas waktu." },
        { title: "1x Traktir Makan", text: "sayang yang pilih tempatnya." },
        { title: "1x Bebas Ngambek", text: "Aku yang minta maaf duluan." },
        { title: "1x Jalan-Jalan", text: "Ke mana pun sayang mau." },
      ],
    },
    {
      type: "end",
      kicker: "Bersambung",
      title: "Selamat Ulang Tahun!",
      text: "Masih banyak halaman yang mau aku isi bareng sayang.",
    },
  ],

  // Iklan baris di sampul belakang
  classifieds: [
    { head: "DICARI", text: "Seseorang untuk dirayakan setiap hari. Sudah ketemu." },
    { head: "CUACA", text: "Cerah sepanjang tahun. Peluang pelukan: 100%." },
    { head: "DIJUAL", text: "Tidak ada. Hatiku sudah ada yang punya." },
    { head: "PENGUMUMAN", text: "Hari ini adalah hari paling penting tahun ini." },
  ],
};

/* =========================================================
   Di bawah ini logika website — tidak perlu diubah
   ========================================================= */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const HEART = "♥︎";

function showScreen(id) {
  $$(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
}

$$(".js-age").forEach((el) => (el.textContent = CONFIG.age));

/* ---------- Garland ---------- */
(function buildGarland() {
  const g = $("#garland");
  const text = "HAPPY BIRTHDAY";
  const n = text.length;
  [...text].forEach((ch, i) => {
    const f = document.createElement("span");
    const t = (i / (n - 1)) * 2 - 1; // -1..1
    f.className = "flag" + (ch === " " ? " gap" : "");
    f.textContent = ch;
    f.style.setProperty("--y", (1 - t * t) * 14 + "px");
    f.style.setProperty("--r", (-t * 8).toFixed(1) + "deg");
    f.style.animationDelay = (i * 0.12).toFixed(2) + "s";
    g.appendChild(f);
  });
})();

/* ---------- 1. PILIHAN PASSWORD ---------- */
let wrongCount = 0;
const lockMsg = $("#lockMsg");

(function buildOptions() {
  const box = $("#options");
  const opts = [...CONFIG.options].sort(() => Math.random() - 0.5);
  if (!opts.includes(CONFIG.password)) opts[Math.floor(Math.random() * opts.length)] = CONFIG.password;
  opts.forEach((val, i) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.innerHTML = `
      <span class="opt-label">No. ${String(i + 1).padStart(2, "0")}</span>
      <span class="opt-num">${val}</span>
      <span class="stamp"></span>`;
    b.addEventListener("click", () => choose(b, val));
    box.appendChild(b);
  });
})();

function choose(btn, val) {
  const lock = $("#lock");
  if (lock.classList.contains("unlocking") || btn.classList.contains("wrong")) return;
  if (val === CONFIG.password) {
    lock.classList.add("unlocking");
    btn.classList.add("right");
    $(".stamp", btn).textContent = "Benar";
    lockMsg.textContent = "Tepat sekali. Selamat membaca edisi spesialmu.";
    lockMsg.className = "lock-msg ok";
    setTimeout(() => showScreen("#envelopeScreen"), 1400);
  } else {
    btn.classList.add("wrong");
    $(".stamp", btn).textContent = "Salah";
    let msg = CONFIG.wrongMessages[wrongCount % CONFIG.wrongMessages.length];
    wrongCount++;
    if (wrongCount >= CONFIG.hintAfter) msg += "\n" + CONFIG.hintText;
    lockMsg.textContent = msg;
    lockMsg.className = "lock-msg bad";
    const sheet = $(".news-sheet");
    sheet.classList.remove("shake");
    void sheet.offsetWidth;
    sheet.classList.add("shake");
  }
}

/* ---------- 2. AMPLOP + MUSIK ---------- */
const bgm = $("#bgm");
const musicBtn = $("#musicBtn");

$("#envTitle").textContent = "Untuk " + CONFIG.name;
$("#envSeal").textContent = CONFIG.name.charAt(0).toUpperCase();

$("#envelope").addEventListener("click", function () {
  if (this.classList.contains("open")) return;
  this.classList.add("open");
  goLandscape();
  bgm.volume = volume;
  bgm.play().catch(() => {});
  musicBox.classList.remove("hidden");
  setTimeout(() => {
    showScreen("#bookScreen");
    document.body.classList.add("book-on");
    initBook();
  }, 2000);
});

/* Volume lagu */
const musicBox = $("#musicBox");
const volSlider = $("#volSlider");
const volLabel = $("#volLabel");
let volume = 0.5;
try { const v = localStorage.getItem("hbd-volume"); if (v !== null) volume = Number(v); } catch {}

function setVolume(v) {
  volume = Math.min(1, Math.max(0, v));
  bgm.volume = volume;
  volSlider.value = Math.round(volume * 100);
  volLabel.textContent = Math.round(volume * 100) + "%";
  musicBtn.classList.toggle("off", volume === 0 || bgm.paused);
  try { localStorage.setItem("hbd-volume", volume); } catch {}
}
setVolume(volume);

musicBtn.addEventListener("click", () => musicBox.classList.toggle("open"));
volSlider.addEventListener("input", () => {
  setVolume(volSlider.value / 100);
  if (bgm.paused && volume > 0) bgm.play().catch(() => {});
});
$("#playBtn").addEventListener("click", () => {
  if (bgm.paused) bgm.play().catch(() => {});
  else bgm.pause();
});
bgm.addEventListener("play", () => { $("#playBtn").textContent = "Jeda"; setVolume(volume); });
bgm.addEventListener("pause", () => { $("#playBtn").textContent = "Putar"; setVolume(volume); });
document.addEventListener("click", (e) => {
  if (!musicBox.contains(e.target)) musicBox.classList.remove("open");
});

/* HP: coba layar penuh + kunci landscape (Android). iPhone: muncul ajakan memutar HP. */
function goLandscape() {
  if (!matchMedia("(max-width: 900px), (max-height: 500px)").matches) return;
  const el = document.documentElement;
  const fs = el.requestFullscreen || el.webkitRequestFullscreen;
  if (!fs) return;
  Promise.resolve(fs.call(el))
    .then(() => screen.orientation && screen.orientation.lock && screen.orientation.lock("landscape"))
    .catch(() => {});
}

/* ---------- Stiker (ilustrasi garis, warna kalem) ---------- */
const INK = "#3a332d";
const C = { rose: "#d4b2a7", olive: "#bdb594", slate: "#aebbbc", cream: "#f3ecdd", gold: "#d6bd86", red: "#8e4a40" };
const svg = (inner, extra = "") =>
  `<svg viewBox="0 0 64 64" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra}>${inner}</svg>`;

const ART = {
  hat: () => {
    const c = pick([C.rose, C.slate, C.olive]);
    return svg(`<path d="M32 8 L50 54 H14 Z" fill="${c}"/>
      <circle cx="30" cy="26" r="2" fill="${C.cream}"/><circle cx="37" cy="36" r="2" fill="${C.cream}"/>
      <circle cx="26" cy="42" r="2" fill="${C.cream}"/><circle cx="40" cy="48" r="2" fill="${C.cream}"/>
      <path d="M12 54 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0" fill="${C.cream}"/>
      <circle cx="32" cy="7" r="4.5" fill="${C.gold}"/>`);
  },
  cake: () => svg(`<path d="M8 56 H56"/>
      <rect x="12" y="36" width="40" height="18" rx="2" fill="${C.cream}"/>
      <rect x="17" y="25" width="30" height="11" rx="2" fill="${C.rose}"/>
      <path d="M12 41 q5 4 10 0 q5 4 10 0 q5 4 10 0 q5 4 10 0"/>
      <path d="M26 25 V16 M38 25 V16"/>
      <path d="M26 10 q3 3 0 5 q-3 -2 0 -5 M38 10 q3 3 0 5 q-3 -2 0 -5" fill="${C.gold}"/>`),
  balloon: () => {
    const c = pick([C.rose, C.slate, C.olive, C.gold]);
    return svg(`<ellipse cx="32" cy="23" rx="14" ry="17" fill="${c}"/>
      <path d="M29.5 40 L32 43.5 L34.5 40 Z" fill="${c}"/>
      <path d="M32 43.5 q-5 6 0 10 q4 4 -1 8"/>
      <path d="M24 15 q3 -5 8 -5" stroke-width="1.3"/>`);
  },
  gift: () => svg(`<rect x="12" y="28" width="40" height="26" fill="${C.slate}"/>
      <rect x="9" y="20" width="46" height="9" fill="${C.slate}"/>
      <path d="M32 20 V54"/><path d="M28 20 V54 M36 20 V54" stroke-width="1"/>
      <path d="M32 20 c-10 -12 -18 -4 -10 0 Z M32 20 c10 -12 18 -4 10 0 Z" fill="${C.rose}"/>`),
  star: () => svg(`<path d="M32 8 L38.5 24 L56 25 L42.5 36 L47 53 L32 43.5 L17 53 L21.5 36 L8 25 L25.5 24 Z" fill="${C.gold}"/>`),
  heart: () => svg(`<path d="M32 54 C10 38 8 24 18 18 c6 -4 12 -1 14 5 c2 -6 8 -9 14 -5 c10 6 8 20 -14 36 Z" fill="${C.rose}"/>`),
  crown: () => svg(`<path d="M10 46 L14 20 L24 32 L32 14 L40 32 L50 20 L54 46 Z" fill="${C.gold}"/>
      <path d="M10 46 H54 V53 H10 Z" fill="${C.gold}"/>
      <circle cx="32" cy="38" r="3" fill="${C.rose}"/><circle cx="20" cy="40" r="2" fill="${C.cream}"/><circle cx="44" cy="40" r="2" fill="${C.cream}"/>`),
  candle: () => svg(`<rect x="26" y="22" width="12" height="34" rx="2" fill="${C.cream}"/>
      <path d="M26 30 L38 26 M26 40 L38 36 M26 50 L38 46" stroke="${C.red}" stroke-width="1.5"/>
      <path d="M32 22 V17"/><path d="M32 6 q5 6 0 10 q-5 -4 0 -10" fill="${C.gold}"/>`),
  horn: () => svg(`<path d="M6 44 L38 30 L42 40 Z" fill="${C.rose}"/>
      <path d="M14 41 L17 37 M22 38 L25 34 M30 35 L32 31" stroke-width="1.2"/>
      <path d="M40 35 q10 -4 12 4 q2 8 -6 8 q-6 0 -4 -6 q2 -4 5 -1"/>`),
  confetti: () => svg(`<rect x="10" y="12" width="7" height="4" fill="${C.rose}" transform="rotate(25 13 14)"/>
      <circle cx="44" cy="14" r="3" fill="${C.gold}"/>
      <rect x="30" y="30" width="7" height="4" fill="${C.slate}" transform="rotate(-30 33 32)"/>
      <path d="M12 44 q4 -6 8 0 q4 6 8 0"/><circle cx="50" cy="44" r="2.5" fill="${C.olive}"/>
      <path d="M40 54 l4 -4 M44 54 l-4 -4" /><rect x="20" y="54" width="6" height="3" fill="${C.gold}" transform="rotate(15 23 55)"/>`),
  flower: () => svg(`<g fill="${C.rose}"><circle cx="32" cy="18" r="8"/><circle cx="45" cy="28" r="8"/><circle cx="40" cy="43" r="8"/><circle cx="24" cy="43" r="8"/><circle cx="19" cy="28" r="8"/></g>
      <circle cx="32" cy="31" r="6" fill="${C.gold}"/>`),
  stamp: () => svg(`<circle cx="32" cy="32" r="27" stroke="${C.red}" stroke-width="2.2"/>
      <circle cx="32" cy="32" r="21" stroke="${C.red}" stroke-width="1" stroke-dasharray="2 2.5"/>
      <text x="32" y="30" text-anchor="middle" font-family="Playfair Display, serif" font-weight="900" font-size="13" fill="${C.red}" stroke="none">HBD</text>
      <text x="32" y="42" text-anchor="middle" font-family="Special Elite, monospace" font-size="6.5" fill="${C.red}" stroke="none">VOL. ${CONFIG.age}</text>`, `class="ink-stamp"`),
  ticket: () => svg(`<path d="M4 20 H60 V28 a4 4 0 0 0 0 8 V44 H4 V36 a4 4 0 0 0 0 -8 Z" fill="${C.cream}"/>
      <path d="M16 20 V44" stroke-dasharray="2 2"/>
      <text x="38" y="31" text-anchor="middle" font-family="Special Elite, monospace" font-size="7" fill="${INK}" stroke="none">ADMIT</text>
      <text x="38" y="40" text-anchor="middle" font-family="Special Elite, monospace" font-size="7" fill="${INK}" stroke="none">ONE</text>`),
};
const ART_KEYS = Object.keys(ART);

// posisi stiker di tepi halaman (left%, top%)
const SPOTS = [
  [84, 11], [86, 40], [84, 84], [2, 86], [42, 92], [87, 64], [1, 62], [62, 91],
];

function stickers(n, only) {
  const keys = only || ART_KEYS;
  const spots = [...SPOTS].sort(() => Math.random() - 0.5).slice(0, n);
  return spots
    .map(([l, t]) => {
      const k = pick(keys);
      const size = k === "ticket" ? rand(17, 20) : rand(11, 15);
      return `<div class="sticker nf" style="left:${Math.min(l + rand(-2, 2), 97 - size)}%;top:${t + rand(-2, 2)}%;--r:${rand(-22, 22).toFixed(0)}deg;--s:${size.toFixed(1)}">${ART[k]()}</div>`;
    })
    .join("");
}

/* ---------- Foto ---------- */
let photoIdx = 0;
function placeholder(label, i) {
  const tones = ["#cfc6b4", "#c2bba9", "#d6cdbb", "#bdb6a6"];
  const s = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>
    <defs><pattern id='d' width='6' height='6' patternUnits='userSpaceOnUse'><circle cx='3' cy='3' r='1.1' fill='#00000018'/></pattern></defs>
    <rect width='100%' height='100%' fill='${tones[i % tones.length]}'/><rect width='100%' height='100%' fill='url(#d)'/>
    <text x='50%' y='50%' font-family='Georgia, serif' font-style='italic' font-size='22' fill='#00000066' text-anchor='middle'>${label}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s).replace(/'/g, "%27");
}
function img(src) {
  const fb = placeholder(src.split("/").pop(), photoIdx++);
  return `<img src="${src}" alt="" draggable="false" onerror="this.onerror=null;this.src='${fb}'">`;
}
function polaroid(src, caption, cls = "") {
  return `<figure class="polaroid ${cls}" style="--r:${rand(-4, 4).toFixed(1)}deg">
      <span class="tape"></span>${img(src)}<figcaption>${caption || ""}</figcaption>
    </figure>`;
}

/* ---------- Halaman ---------- */
const head = (n) =>
  `<header class="run-head"><span>The Birthday Times</span><span>Edisi Spesial</span><span>Hal. ${n}</span></header>`;
const titleBlock = (p) => `
  ${p.kicker ? `<p class="kicker">${p.kicker}</p>` : ""}
  ${p.title ? `<h2 class="headline">${p.title}</h2>` : ""}
  ${p.deck ? `<p class="deck">${p.deck}</p>` : ""}`;

function pageHTML(p, n) {
  switch (p.type) {
    case "intro":
      return `${head(n)}<div class="pc">
          ${titleBlock(p)}
          <div class="rule"></div>
          <div class="cols dropcap">${p.text.map((t) => `<p>${t}</p>`).join("")}</div>
          <div class="mini-art">${ART.hat()}${ART.cake()}${ART.balloon()}</div>
        </div>${stickers(4)}`;
    case "photo":
      return `${head(n)}<div class="pc">
          ${titleBlock({ kicker: p.kicker })}
          ${polaroid(p.src, p.caption, "large")}
          ${p.note ? `<p class="body center">${p.note}</p>` : ""}
        </div>${stickers(5)}`;
    case "photos2":
      return `${head(n)}<div class="pc">
          ${titleBlock(p)}
          <div class="pair">${p.photos.map((ph) => polaroid(ph.src, ph.caption)).join("")}</div>
        </div>${stickers(4)}`;
    case "cake":
      return `${head(n)}<div class="pc center">
          ${titleBlock(p)}
          <div class="cake-scene">
            <div class="candles">${Array.from({ length: 5 }, () =>
              `<button class="candle nf" aria-label="lilin"><span class="flame"></span><span class="smoke"></span></button>`).join("")}</div>
            <div class="cake"><div class="tier t1"></div><div class="tier t2"></div><div class="plate"></div></div>
          </div>
          <p class="cake-msg body">&nbsp;</p>
          <button class="btn mic-btn nf">Tiup lewat mikrofon</button>
          <p class="wish hidden-wish">${p.wish}</p>
        </div>${stickers(4, ["hat", "star", "confetti", "horn", "crown", "stamp"])}`;
    case "letter":
      return `${head(n)}<div class="pc letter">
          ${titleBlock({ kicker: p.kicker })}
          ${p.title ? `<h3 class="salute">${p.title}</h3>` : ""}
          <div class="dropcap">${p.paragraphs.map((t) => `<p>${t}</p>`).join("")}</div>
          ${p.sign
            ? `<p class="sign">${p.sign} ${HEART}<br><span>— ${CONFIG.from}</span></p>`
            : `<div class="mini-art">${ART.flower()}${ART.heart()}${ART.candle()}</div>`}
        </div>${stickers(3, ["heart", "flower", "star", "stamp", "ticket"])}`;
    case "balloons":
      return `${head(n)}<div class="pc center">
          ${titleBlock(p)}
          <div class="balloons">${p.reasons.map((r, i) => `
            <div class="b-cell">
              <p class="b-note">${r}</p>
              <button class="balloon nf" style="--d:${(i * 0.4).toFixed(1)}s" aria-label="balon">${ART.balloon()}</button>
            </div>`).join("")}</div>
        </div>${stickers(3, ["confetti", "star", "hat", "horn"])}`;
    case "gift":
      return `${head(n)}<div class="pc center">
          ${titleBlock(p)}
          <div class="gift-scene">
            <div class="coupon nf" data-i="0">
              <span class="c-label">Voucher</span>
              <span class="c-title">${p.coupons[0].title}</span>
              <span class="c-text">${p.coupons[0].text}</span>
              <span class="c-count">1 / ${p.coupons.length}</span>
            </div>
            <button class="gift nf" aria-label="kado">
              <span class="g-lid"></span><span class="g-box"></span><span class="g-bow"></span>
            </button>
          </div>
        </div>${stickers(4, ["gift", "star", "confetti", "heart", "ticket"])}`;
    case "end":
      return `${head(n)}<div class="pc center">
          ${titleBlock({ kicker: p.kicker, title: p.title })}
          <div class="end-art">${ART.balloon()}${ART.cake()}${ART.hat()}</div>
          <p class="body center">${p.text}</p>
          <div class="btn-row">
            <button class="btn nf js-confetti">Rayakan</button>
            <button class="btn ghost nf js-restart">Baca dari awal</button>
          </div>
        </div>${stickers(4)}`;
    default:
      return `${head(n)}<div class="pc center"><div class="end-art">${ART.gift()}${ART.star()}</div></div>${stickers(5)}`;
  }
}

function coverHTML() {
  return `
    <div class="page cover" data-density="hard">
      <div class="front">
        <div class="mast-top"><span>Vol. ${CONFIG.age}</span><span>${CONFIG.editionDate}</span><span>Edisi Spesial</span></div>
        <h1 class="mast-title">The Birthday Times</h1>
        <div class="rule-double"></div>
        <p class="kicker">Berita Utama</p>
        <h2 class="front-headline">${CONFIG.name} Genap ${CONFIG.age} Tahun!</h2>
        <p class="deck">Seluruh dunia ikut merayakan hari lahir orang paling istimewa. Laporan lengkap di halaman dalam.</p>
        <figure class="front-photo">${img(CONFIG.coverPhoto)}<figcaption>Sang bintang hari ini.</figcaption></figure>
        <div class="cols small">
          <p>Hari ini bukan hari biasa. Di sebuah sudut kota, seseorang yang sangat disayangi bertambah satu tahun lebih dewasa, lebih cantik, dan lebih hebat.</p>
          <p>Redaksi mengucapkan selamat ulang tahun dan mengajak pembaca membuka halaman berikutnya.</p>
        </div>
      </div>
      ${stickers(3, ["hat", "stamp", "star", "balloon"])}
    </div>`;
}

function backHTML() {
  return `
    <div class="page cover back" data-density="hard">
      <div class="front">
        <h3 class="back-title">Iklan Baris</h3>
        <div class="rule-double"></div>
        <div class="classifieds">${CONFIG.classifieds.map((c) => `<div class="ad"><b>${c.head}.</b> ${c.text}</div>`).join("")}</div>
        <p class="colophon">Dicetak dengan cinta oleh ${CONFIG.from} ${HEART}</p>
      </div>
      ${stickers(3, ["heart", "flower", "stamp"])}
    </div>`;
}

function buildPages() {
  const inner = [...CONFIG.pages];
  if (inner.length % 2 === 1) inner.push({ type: "blank" });
  let html = coverHTML();
  inner.forEach((p, i) => {
    html += `<div class="page paper ${i % 2 ? "left-pg" : "right-pg"}" data-type="${p.type}">${pageHTML(p, i + 1)}</div>`;
  });
  html += backHTML();
  $("#book").innerHTML = html;
}

/* ---------- Interaksi di dalam halaman ---------- */
// Elemen .nf tidak boleh memicu balik halaman
function guardNoFlip(root) {
  $$(".nf", root).forEach((el) => {
    ["mousedown", "touchstart"].forEach((ev) =>
      el.addEventListener(ev, (e) => e.stopPropagation(), { passive: true }));
  });
}

function makeDraggable(el) {
  el.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const page = el.closest(".page");
    const rect = page.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const l0 = parseFloat(el.style.left), t0 = parseFloat(el.style.top);
    let moved = false;
    el.setPointerCapture(e.pointerId);
    el.classList.add("dragging");
    const move = (ev) => {
      const dx = ((ev.clientX - sx) / rect.width) * 100;
      const dy = ((ev.clientY - sy) / rect.height) * 100;
      if (Math.abs(dx) + Math.abs(dy) > 0.6) moved = true;
      el.style.left = Math.min(92, Math.max(-6, l0 + dx)) + "%";
      el.style.top = Math.min(92, Math.max(-6, t0 + dy)) + "%";
    };
    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.classList.remove("dragging");
      if (!moved) {
        el.classList.remove("wiggle");
        void el.offsetWidth;
        el.classList.add("wiggle");
      }
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  });
}

function setupCake(page) {
  const candles = $$(".candle", page);
  const msg = $(".cake-msg", page);
  const wish = $(".wish", page);
  let done = false;
  const left = () => candles.filter((c) => !c.classList.contains("out")).length;
  const blow = (c) => {
    if (!c || c.classList.contains("out")) return;
    c.classList.add("out");
    const n = left();
    msg.textContent = n ? `Sisa ${n} lilin lagi.` : "";
    if (!n && !done) {
      done = true;
      wish.classList.remove("hidden-wish");
      confetti();
      stopMic();
    }
  };
  candles.forEach((c) => c.addEventListener("click", () => blow(c)));

  // Tiup lewat mikrofon
  let stream = null, raf = 0;
  const stopMic = () => {
    cancelAnimationFrame(raf);
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = null;
  };
  $(".mic-btn", page).addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    if (stream || done) return;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      btn.textContent = "Ayo tiup sekarang...";
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const an = ctx.createAnalyser();
      an.fftSize = 1024;
      ctx.createMediaStreamSource(stream).connect(an);
      const buf = new Uint8Array(an.fftSize);
      let loud = 0, cool = 0;
      const loop = () => {
        an.getByteTimeDomainData(buf);
        let sum = 0;
        for (const v of buf) sum += ((v - 128) / 128) ** 2;
        const rms = Math.sqrt(sum / buf.length);
        loud = rms > 0.12 ? loud + 1 : 0;
        if (cool > 0) cool--;
        if (loud > 4 && cool === 0) {
          blow(candles.find((c) => !c.classList.contains("out")));
          cool = 12;
        }
        if (!done) raf = requestAnimationFrame(loop);
        else { btn.textContent = "Lilin padam semua"; ctx.close(); }
      };
      loop();
    } catch {
      btn.textContent = "Mikrofon tidak tersedia, ketuk lilinnya saja";
      stream = null;
    }
  });
}

function setupBalloons(page) {
  $$(".balloon", page).forEach((b) =>
    b.addEventListener("click", () => {
      if (b.classList.contains("popped")) return;
      b.classList.add("popped");
      b.parentElement.classList.add("revealed");
      if ($$(".balloon:not(.popped)", page).length === 0) confetti(40);
    }));
}

function setupGift(page, coupons) {
  const gift = $(".gift", page);
  const coupon = $(".coupon", page);
  gift.addEventListener("click", () => {
    if (gift.classList.contains("open")) return;
    gift.classList.add("open");
    $(".gift-scene", page).classList.add("open");
    confetti(40);
  });
  coupon.addEventListener("click", () => {
    if (!gift.classList.contains("open")) return;
    const i = (Number(coupon.dataset.i) + 1) % coupons.length;
    coupon.dataset.i = i;
    coupon.classList.remove("swap");
    void coupon.offsetWidth;
    coupon.classList.add("swap");
    setTimeout(() => {
      $(".c-title", coupon).textContent = coupons[i].title;
      $(".c-text", coupon).textContent = coupons[i].text;
      $(".c-count", coupon).textContent = `${i + 1} / ${coupons.length}`;
    }, 180);
  });
}

function setupInteractions() {
  const book = $("#book");
  guardNoFlip(book);
  $$(".sticker", book).forEach(makeDraggable);
  const pages = $$(".page.paper", book);
  const inner = CONFIG.pages;
  pages.forEach((pg, i) => {
    const type = pg.dataset.type;
    if (type === "cake") setupCake(pg);
    if (type === "balloons") setupBalloons(pg);
    if (type === "gift") setupGift(pg, inner[i].coupons);
  });
  $$(".js-confetti", book).forEach((b) => b.addEventListener("click", () => confetti()));
  $$(".js-restart", book).forEach((b) => b.addEventListener("click", () => turnTo(0)));
}

/* ---------- 3. BUKU ---------- */
let pageFlip = null;
let celebrated = false;

function initBook() {
  if (pageFlip) return;
  buildPages();

  pageFlip = new St.PageFlip($("#book"), {
    width: 420,
    height: 580,
    size: "stretch",
    minWidth: 120,
    maxWidth: 560,
    minHeight: 170,
    maxHeight: 780,
    showCover: true,
    usePortrait: false,
    drawShadow: true,
    maxShadowOpacity: 0.4,
    flippingTime: 900,
    mobileScrollSupport: false,
    disableFlipByClick: false,
    autoSize: true,
  });
  pageFlip.loadFromHTML($$("#book .page"));
  patchFlipController(pageFlip);
  // Library tidak menangani touchcancel (mis. gestur sistem di tepi layar HP).
  // Tanpa ini lipatan halaman berhenti di tengah dan buku macet.
  const finishFold = () => {
    if (!pageFlip) return;
    if (pageFlip.ui) pageFlip.ui.touchPoint = null;
    if (pageFlip.isUserTouch || pageFlip.getState() === "user_fold") {
      pageFlip.isUserTouch = false;
      pageFlip.isUserMove = false;
      pageFlip.flipController.stopMove();
    }
  };
  window.addEventListener("touchcancel", finishFold);
  window.addEventListener("blur", finishFold);
  document.addEventListener("visibilitychange", finishFold);
  setupInteractions();

  const info = $("#pageInfo");
  const update = () => {
    info.textContent = `${pageFlip.getCurrentPageIndex() + 1} / ${pageFlip.getPageCount()}`;
  };
  update();

  pageFlip.on("flip", (e) => {
    update();
    if (!celebrated && e.data > 0) {
      celebrated = true;
      confetti();
    }
  });

  $("#prevBtn").onclick = () => flipBy(-1);
  $("#nextBtn").onclick = () => flipBy(1);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") flipBy(1);
    if (e.key === "ArrowLeft") flipBy(-1);
  });
}

// Catatan: jangan aktifkan disableFlipByClick. Di page-flip 2.0.7 opsi itu ikut
// memblokir flipNext/flipPrev (swipe HP & tombol panah) sehingga lipatan macet.
// Elemen interaktif (.nf) sudah dicegah memicu balik halaman lewat guardNoFlip().
// page-flip 2.0.7: flipPrev memakai x=10 tanpa offset buku, dan keduanya memakai y=1
// tanpa offset atas. Kalau buku tidak menempel kiri/atas wadah, animasi macet.
// Perbaiki dengan titik sudut yang memperhitungkan posisi buku.
function patchFlipController(pf) {
  const fc = pf.flipController;
  if (!fc || !fc.render) return;
  const cornerY = (r, corner) => (corner === "bottom" ? r.top + r.height - 2 : r.top + 1);
  fc.flipNext = function (corner = "top") {
    const r = this.render.getRect();
    this.flip({ x: r.left + 2 * r.pageWidth - 10, y: cornerY(r, corner) });
  };
  fc.flipPrev = function (corner = "top") {
    const r = this.render.getRect();
    this.flip({ x: r.left + 10, y: cornerY(r, corner) });
  };
  // fold() asli mengubah state ke "user_fold" sebelum cek arah. Kalau jari bergeser
  // ke arah yang tidak bisa dibalik (mis. mundur dari sampul), lipatan batal tapi
  // state tetap "user_fold" dan buku macet setengah terbuka.
  fc.fold = function (t) {
    if (this.calc === null && !this.start(t)) return;
    this.setState("user_fold");
    this.do(this.render.convertToPage(t));
  };
  const origStopMove = fc.stopMove;
  fc.stopMove = function () {
    if (this.calc === null) { this.setState("read"); return; }
    return origStopMove.call(this);
  };
}

function flipBy(dir) {
  if (!pageFlip) return;
  if (dir > 0) pageFlip.flipNext();
  else pageFlip.flipPrev();
}
function turnTo(i) {
  pageFlip.flip(i);
}

/* ---------- Confetti (warna kalem) ---------- */
function confetti(count = 80) {
  const box = $("#confetti");
  const colors = [C.rose, C.gold, C.slate, C.olive, "#3a332d", "#efe6d4"];
  for (let i = 0; i < count; i++) {
    const c = document.createElement("span");
    c.className = "piece";
    c.style.left = rand(0, 100) + "vw";
    c.style.background = colors[i % colors.length];
    c.style.setProperty("--dx", rand(-100, 100) + "px");
    c.style.setProperty("--rot", rand(0, 720) + "deg");
    c.style.animationDuration = rand(2.4, 4.2) + "s";
    c.style.animationDelay = rand(0, 0.5) + "s";
    if (Math.random() > 0.6) c.style.borderRadius = "50%";
    box.appendChild(c);
    setTimeout(() => c.remove(), 5200);
  }
}
