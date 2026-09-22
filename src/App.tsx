import { useState } from "react";

const REPO = "https://github.com/JonamMadeda/viidaaz";
const RELEASES_URL = `${REPO}/releases`;
const LATEST_URL = `${REPO}/releases/latest`;
const TAG_URL = `${REPO}/releases/tag/v2.2`;
const SETUP_URL = `${REPO}/releases/latest/download/viidaaz-Setup.exe`;
const PORTABLE_URL = `${REPO}/releases/latest/download/viidaaz.exe`;
const ISSUES_URL = `${REPO}/issues`;
const LICENSE_URL = `${REPO}/blob/master/LICENSE`;

/* ---------- inline stroke icons (no extra deps) ---------- */
function Icon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const PATHS = {
  download: "M12 3v12m0 0l-5-5m5 5l5-5M4 21h16",
  queue: "M4 6h16M4 12h16M4 18h10",
  shield: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z M9 12l2 2 4-4",
  refresh: "M4 4v6h6M20 20v-6h-6 M5 13a8 8 0 0014-4M19 11a8 8 0 00-14 4",
  cookie: "M12 3a9 9 0 100 18 9 9 0 000-18z M9 10h.01M14 9h.01M10 15h.01M15 14h.01",
  cpu: "M4 7h16v10H4z M9 12h6 M12 9v6",
  pause: "M9 5v14M15 5v14",
  image: "M4 5h16v14H4z M9 10h.01 M5 19l5-5 3 3 2-2 4 4",
  theme: "M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4 M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  link: "M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1.5 1.5M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1.5-1.5",
  search: "M11 5a6 6 0 104.2 10.3L20 20l-1 1-4.8-4.8A6 6 0 0011 5z M8.5 11l2 2 3.5-3.5",
  folder: "M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z M12 11v6m0 0l-2.5-2.5M12 17l2.5-2.5",
  play: "M8 5v14l11-7z",
  check: "M5 13l4 4L19 7",
  plus: "M12 5v14M5 12h14",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  external: "M14 4h6v6M20 4L10 14 M18 13v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h6",
};

function GitHubMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-white/90 shadow-[0_1px_0_rgba(28,25,23,0.04)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5">
        <a href="#top" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-ember">
          <img src="/viidaaz.png" alt="viidaaz icon" className="h-8 w-8 rounded-lg shadow-sm ring-1 ring-edge" />
          <span className="text-xl font-bold tracking-tight text-ink">viidaaz</span>
        </a>
        <a
          href={TAG_URL}
          className="rounded-md bg-field px-2 py-0.5 font-mono text-xs text-dim ring-1 ring-edge transition hover:text-ink hover:ring-ember/50"
          title="View v2.2 release notes"
        >
          v2.2
        </a>
        <nav className="ml-8 hidden items-center gap-6 text-sm font-medium text-dim md:flex" aria-label="Primary">
          <a href="#features" className="rounded transition hover:text-ink focus-visible:outline-2 focus-visible:outline-ember">Features</a>
          <a href="#how" className="rounded transition hover:text-ink focus-visible:outline-2 focus-visible:outline-ember">How it works</a>
          <a href="#requirements" className="rounded transition hover:text-ink focus-visible:outline-2 focus-visible:outline-ember">Requirements</a>
          <a href="#faq" className="rounded transition hover:text-ink focus-visible:outline-2 focus-visible:outline-ember">FAQ</a>
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={REPO}
            className="hidden items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-dim transition hover:text-ink sm:inline-flex"
          >
            <GitHubMark />
            GitHub
          </a>
          <a
            href={SETUP_URL}
            className="inline-flex items-center gap-1.5 rounded-lg bg-ember px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-ember-deep active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            <Icon d={PATHS.download} className="h-4 w-4" />
            Download
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-edge text-dim md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon d={open ? PATHS.close : PATHS.menu} className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-edge bg-white px-5 py-3 md:hidden" aria-label="Mobile">
          {[
            ["Features", "#features"],
            ["How it works", "#how"],
            ["Requirements", "#requirements"],
            ["FAQ", "#faq"],
            ["Releases", RELEASES_URL],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2.5 text-sm font-medium text-dim transition hover:bg-cream hover:text-ink"
            >
              {label}
            </a>
          ))}
          <a
            href={REPO}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-medium text-dim transition hover:bg-cream hover:text-ink"
          >
            <GitHubMark /> GitHub repo
          </a>
        </nav>
      )}
    </header>
  );
}

function AppMock() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(closest-side,rgba(230,126,34,0.22),transparent)] blur-2xl"
      />
      <div
        className="overflow-hidden rounded-2xl border border-edge bg-white shadow-xl shadow-stone-900/10"
        style={{ animation: "float-soft 7s ease-in-out infinite" }}
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-edge bg-cream px-4 py-2.5">
          <img src="/viidaaz.png" alt="" className="h-5 w-5 rounded ring-1 ring-edge" />
          <span className="text-sm font-bold text-ink">viidaaz</span>
          <span className="ml-auto rounded bg-field px-1.5 py-0.5 font-mono text-[11px] text-dim ring-1 ring-edge">v2.2</span>
        </div>
        <div className="space-y-3 bg-white p-4">
          {/* command deck */}
          <div className="rounded-xl border border-ember/50 bg-orange-50/60 p-3">
            <div className="mb-2 text-[10px] font-bold tracking-widest text-ember-deep">
              DOWNLOAD
            </div>
            <div className="flex gap-2">
              <div className="flex-1 truncate rounded-lg border border-edge bg-white px-3 py-2.5 font-mono text-xs text-dim">
                https://www.youtube.com/watch?v=aqz-KE-bpKQ
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-ember px-4 py-2.5 text-xs font-bold text-white">
                <Icon d={PATHS.download} className="h-3.5 w-3.5" />
                Download
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-dim">
              <Icon d={PATHS.play} className="h-3.5 w-3.5 text-ember" />
              Big Buck Bunny 60fps 4K • 9:56
            </div>
          </div>
          {/* progress */}
          <div className="rounded-xl border border-edge bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-ember-deep">
                STATUS
              </span>
              <span className="text-lg font-extrabold tabular-nums text-ink">72.4%</span>
            </div>
            <div
              className="h-3 overflow-hidden rounded-full bg-field ring-1 ring-edge/60"
              role="progressbar"
              aria-valuenow={72.4}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Download progress"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-ember to-ember-deep"
                style={{ animation: "grow-bar 1.6s ease-out forwards" }}
              />
            </div>
            <div className="mt-2 font-mono text-[11px] tabular-nums text-dim">
              19.7 MB / 27.2 MB • 1.7 MB/s • ETA 4s
            </div>
          </div>
          {/* queue */}
          <div className="rounded-xl border border-edge bg-white p-3 shadow-sm">
            <div className="mb-2 text-[10px] font-bold tracking-widest text-ember-deep">
              QUEUE (2)
            </div>
            {[
              { name: "Big Buck Bunny 60fps 4K", pct: "72.4%", active: true },
              { name: "Sintel — Blender short film", pct: "queued", active: false },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center gap-2 border-t border-edge py-1.5 font-mono text-[11px] first:border-t-0"
              >
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${row.active ? "bg-ember" : "bg-stone-300"}`}
                  aria-hidden="true"
                />
                <span className="flex-1 truncate text-ink">{row.name}</span>
                <span className={`font-bold tabular-nums ${row.active ? "text-ember-deep" : "text-faint"}`}>
                  {row.pct}
                </span>
              </div>
            ))}
          </div>
          {/* activity */}
          <div className="rounded-xl border border-edge bg-stone-950 p-3 font-mono text-[11px] leading-relaxed text-stone-300">
            <div>
              <span className="text-stone-500">[02:41:07]</span>{" "}
              <span className="text-emerald-400">✓</span> ANDROID client worked.
            </div>
            <div>
              <span className="text-stone-500">[02:41:09]</span>{" "}
              <span className="text-emerald-400">✓</span> Looks good — starting download…
            </div>
            <div>
              <span className="text-stone-500">[02:41:12]</span>{" "}
              <span className="text-sky-400">ℹ</span> Estimated size: ≈ 27.2 MB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBadges() {
  const badges = [
    ["MIT licensed", LICENSE_URL],
    ["Windows 10 / 11", TAG_URL],
    ["~58 MB download", SETUP_URL],
    ["FFmpeg 7.1 built in", REPO],
  ];
  return (
    <dl className="mt-8 grid max-w-lg grid-cols-2 gap-2 sm:grid-cols-4">
      {badges.map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="inline-flex items-center justify-center gap-1 rounded-lg border border-edge bg-white px-2 py-2 text-center text-[11px] font-semibold text-dim shadow-sm transition hover:border-ember/60 hover:text-ink"
        >
          <Icon d={PATHS.check} className="h-3.5 w-3.5 shrink-0 text-ember" />
          {label}
        </a>
      ))}
    </dl>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(28,25,23,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,25,23,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-2 lg:pt-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-edge bg-white px-3 py-1 text-xs font-medium text-dim shadow-sm">
            <span className="h-2 w-2 rounded-full bg-ember" />
            v2.2 — free, open source, Windows 10/11
          </div>
          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ink lg:text-6xl">
            YouTube downloads,
            <br />
            <span className="text-ember">minus the hassle.</span>
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-dim">
            Paste a link, get a verdict before a single byte downloads, and watch
            it land in your folder. MP4 and MP3, batch queue, and FFmpeg built
            right in — nothing else to install.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SETUP_URL}
              className="inline-flex items-center gap-2 rounded-xl bg-ember px-6 py-3.5 font-bold text-white shadow-lg shadow-ember/25 transition hover:bg-ember-deep active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              <Icon d={PATHS.download} />
              Download Setup
            </a>
            <a
              href={PORTABLE_URL}
              className="inline-flex items-center gap-2 rounded-xl border border-edge bg-white px-6 py-3.5 font-bold text-ink shadow-sm transition hover:border-ember hover:text-ember-deep active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-ember"
            >
              Portable .exe
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-faint">
            ~58 MB • no admin needed • auto-updates from{" "}
            <a href={LATEST_URL} className="underline decoration-edge underline-offset-2 hover:text-dim">
              GitHub releases
            </a>
          </p>
          <TrustBadges />
        </div>
        <AppMock />
      </div>
    </section>
  );
}

const FEATURES: { icon: string; title: string; desc: string }[] = [
  { icon: PATHS.queue, title: "Download queue", desc: "Batch links and walk away. Each row shows live progress while the queue drains itself." },
  { icon: PATHS.shield, title: "Pre-flight verdicts", desc: "Private, DRM, upcoming or age-gated? You know before downloading — never after waiting." },
  { icon: PATHS.refresh, title: "Bot-check rotation", desc: "Cycles Web → Android → iOS → TV clients until one gets through YouTube's blocks." },
  { icon: PATHS.cookie, title: "Cookie bypass", desc: "One click passes your logged-in browser session to defeat “sign in to confirm” walls." },
  { icon: PATHS.cpu, title: "FFmpeg built in", desc: "MP3 extraction and 1080p+ merging work out of the box. Zero setup, zero PATH edits." },
  { icon: PATHS.pause, title: "Pause & resume", desc: "Interrupt any download and pick up exactly where it stopped via partial-file resume." },
  { icon: PATHS.image, title: "Thumbnails + sizes", desc: "See the artwork and the estimated file size up front, right in the status card." },
  { icon: PATHS.theme, title: "Light & dark themes", desc: "One-tap theme switch, persistent settings, system notifications on completion." },
];

function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-edge bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">
          Everything handled, <span className="text-ember">up front.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-dim">
          Most downloaders fail silently. viidaaz narrates every step and warns
          you early.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-edge bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-ember/60 hover:shadow-lg hover:shadow-ember/10"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ember/10 text-ember transition group-hover:bg-ember group-hover:text-white">
                <Icon d={f.icon} />
              </div>
              <h3 className="font-bold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-dim">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", icon: PATHS.link, title: "Paste a link", desc: "Drop any YouTube URL — or a .url file — into the command deck. The title previews live." },
  { n: "02", icon: PATHS.search, title: "Get the verdict", desc: "Pre-flight reads the video first: green means go, and problems come with a reason, not a hang." },
  { n: "03", icon: PATHS.folder, title: "Download", desc: "Track speed, ETA and size live, pause anytime, and find the file waiting in your folder." },
];

function How() {
  return (
    <section id="how" className="scroll-mt-20 border-t border-edge bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">
          Three steps. <span className="text-ember">No mysteries.</span>
        </h2>
        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-edge md:block" />
          {STEPS.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-edge bg-white p-6 shadow-sm transition hover:border-ember/50 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-ember">{s.n}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-field text-dim ring-1 ring-edge">
                  <Icon d={s.icon} className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-dim">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Requirements() {
  return (
    <section id="requirements" className="scroll-mt-20 border-t border-edge bg-cream">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-3">
        <div className="rounded-2xl border border-edge bg-white p-6 shadow-sm">
          <h3 className="font-bold text-ink">Windows app</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-dim">
            Windows 10 / 11, 64-bit. Installer needs no admin rights. Portable{" "}
            <a href={PORTABLE_URL} className="font-semibold text-ember-deep underline-offset-2 hover:underline">viidaaz.exe</a>{" "}
            runs anywhere.
          </p>
        </div>
        <div className="rounded-2xl border border-edge bg-white p-6 shadow-sm">
          <h3 className="font-bold text-ink">From source</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-dim">
            Python 3.10+ on macOS / Linux too. See{" "}
            <a href={`${REPO}#run-from-source`} className="font-semibold text-ember-deep underline-offset-2 hover:underline">README</a>{" "}
            for pip + FFmpeg fetch steps.
          </p>
        </div>
        <div className="rounded-2xl border border-edge bg-white p-6 shadow-sm">
          <h3 className="font-bold text-ink">Updates</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-dim">
            Checks{" "}
            <a href={LATEST_URL} className="font-semibold text-ember-deep underline-offset-2 hover:underline">GitHub releases</a>{" "}
            on launch with one-click install. Or watch{" "}
            <a href={RELEASES_URL} className="font-semibold text-ember-deep underline-offset-2 hover:underline">all releases</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

const FAQS: [string, string][] = [
  [
    "Some videos still fail — why?",
    "No downloader can fetch private videos, DRM-protected purchases, or region-blocked uploads. For YouTube's “sign in to confirm you're not a bot” wall, set Cookies to your browser in the app (close the browser first) or switch networks — shared and VPN IPs get flagged hardest.",
  ],
  [
    "Why is quality capped around 720p sometimes?",
    "When the default web client is blocked, viidaaz falls back to mobile clients, which top out near 720p. On an unblocked network you get full quality up to 4K.",
  ],
  [
    "Do I need FFmpeg or Python?",
    "Neither. FFmpeg 7.1 ships inside the app and everything runs from the single .exe. The Python source is on GitHub if you want to hack on it.",
  ],
  [
    "How do updates work?",
    "The app checks GitHub releases on launch and offers one-click installs. Click the version number in the header to check manually anytime.",
  ],
  [
    "Is it free? Which platforms?",
    "Free and MIT-licensed. The packaged app targets Windows 10/11; the Python source runs on macOS and Linux too.",
  ],
];

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-edge bg-white">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-ink lg:text-4xl">
          Questions, <span className="text-ember">answered.</span>
        </h2>
        <p className="mt-3 text-dim">
          Still stuck?{" "}
          <a href={ISSUES_URL} className="font-semibold text-ember-deep underline-offset-2 hover:underline">
            Open an issue on GitHub
          </a>.
        </p>
        <div className="mt-8 space-y-3">
          {FAQS.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-2xl border border-edge bg-white p-5 shadow-sm open:border-ember/60 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 font-bold text-ink marker:hidden focus-visible:outline-2 focus-visible:outline-ember [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{q}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-field text-ember-deep ring-1 ring-edge transition group-open:rotate-45 group-open:bg-ember group-open:text-white">
                  <Icon d={PATHS.plus} className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-dim">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="border-t border-edge bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-stone-950 px-6 py-14 text-center shadow-xl sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(230,126,34,0.35),transparent)]"
          />
          <img
            src="/viidaaz.png"
            alt="viidaaz icon"
            className="relative mx-auto h-16 w-16 rounded-2xl shadow-lg ring-1 ring-white/20"
          />
          <h2 className="relative mx-auto mt-6 max-w-xl text-balance text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
            Get viidaaz. Download anything (legal) in minutes.
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-stone-400">
            v2.2 • MIT licensed • installer or portable — both update from{" "}
            <a href={LATEST_URL} className="underline underline-offset-2 hover:text-white">GitHub</a>
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={SETUP_URL}
              className="inline-flex items-center gap-2 rounded-xl bg-ember px-8 py-3.5 font-bold text-white shadow-lg shadow-ember/30 transition hover:bg-ember-deep active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              <Icon d={PATHS.download} />
              Download for Windows
            </a>
            <a
              href={REPO}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 font-bold text-white transition hover:border-white/40 hover:bg-white/15 active:scale-[0.98]"
            >
              <GitHubMark className="h-5 w-5" />
              Star on GitHub
            </a>
          </div>
          <div className="relative mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1 font-mono text-xs text-stone-500">
            <a href={SETUP_URL} className="inline-flex items-center gap-1 hover:text-stone-300">
              <Icon d={PATHS.external} className="h-3 w-3" /> viidaaz-Setup.exe
            </a>
            <a href={PORTABLE_URL} className="inline-flex items-center gap-1 hover:text-stone-300">
              <Icon d={PATHS.external} className="h-3 w-3" /> viidaaz.exe
            </a>
            <a href={RELEASES_URL} className="inline-flex items-center gap-1 hover:text-stone-300">
              <Icon d={PATHS.external} className="h-3 w-3" /> all releases
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-edge bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-sm text-faint sm:flex-row">
        <div className="flex items-center gap-2">
          <img src="/viidaaz.png" alt="" className="h-5 w-5 rounded ring-1 ring-edge" />
          <span className="font-bold text-dim">viidaaz</span>
          <a href={TAG_URL} className="font-mono text-xs hover:text-dim">v2.2</a>
        </div>
        <span className="sm:ml-4">
          <a href={LICENSE_URL} className="hover:text-dim">MIT licensed</a> • by{" "}
          <a href="https://github.com/JonamMadeda" className="hover:text-dim">JonamMadeda</a>
        </span>
        <nav className="flex items-center gap-4 sm:ml-auto" aria-label="Footer">
          <a href={REPO} className="inline-flex items-center gap-1 transition hover:text-ink">
            <GitHubMark className="h-3.5 w-3.5" /> Source
          </a>
          <a href={RELEASES_URL} className="transition hover:text-ink">Releases</a>
          <a href={ISSUES_URL} className="transition hover:text-ink">Issues</a>
          <a href={LICENSE_URL} className="transition hover:text-ink">License</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Features />
        <How />
        <Requirements />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
