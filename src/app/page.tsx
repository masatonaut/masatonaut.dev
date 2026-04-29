import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { products, type Product } from "@/data/products";
import { skillCategories } from "@/data/skills";

/* =========================================================
   Static data (retained from Kanso version, reframed)
   ========================================================= */
const timeline = [
  {
    year: "2026 —",
    title: "Kyren — Studio",
    desc: "A one-person product studio from Tokyo. Four tools, three live.",
  },
  {
    year: "2026 — 2028",
    title: "USC, Los Angeles — MSc Computer Science",
    desc: "Viterbi School of Engineering. Focus: Machine Learning & AI.",
  },
  {
    year: "2025",
    title: "ACL 2025 Publication",
    desc: "Enhancing AMR Parsing with GRPO. Co-authored at XLLM workshop.",
    link: "https://aclanthology.org/2025.xllm-1.11/",
  },
  {
    year: "2025",
    title: "AI / ML Engineer — Freelance, Tokyo",
    desc: "RAG pipelines, LLM integration, AI-OCR, multimodal systems for enterprise.",
  },
  {
    year: "2024 — 2025",
    title: "ML Researcher — SZTAKI, Budapest",
    desc: "Hungary's national computer science lab. NLP research and dataset work.",
  },
  {
    year: "2023 — 2024",
    title: "Software Engineer — Ericsson, Budapest",
    desc: "Data pipelines with Python, Kubernetes, Helm across three continents.",
  },
  {
    year: "2023",
    title: "Teaching Assistant — ELTE, Budapest",
    desc: "Functional Programming for undergraduate CS students.",
  },
  {
    year: "2022 — 2025",
    title: "ELTE Budapest — BSc Computer Science",
    desc: "Full Stipendium Hungaricum scholarship. Graduated with Excellent.",
  },
  {
    year: "2020 — 2022",
    title: "Cybozu — Tokyo",
    desc: "Product Support → Data Engineer. GCP data infra and BI dashboards.",
  },
  {
    year: "2019 — 2020",
    title: "Australia — Working Holiday",
    desc: "Strawberry fields and Sydney streets. A year off the beaten path.",
  },
];

/* =========================================================
   Components
   ========================================================= */
function Masthead() {
  return (
    <div className="flex items-center justify-between text-[11px] pt-7 pb-5 px-6 md:px-10">
      <span className="masthead">Vol. I · Issue 01</span>
      <span className="masthead hidden sm:inline">Spring / Summer</span>
      <span className="masthead">MMXXVI</span>
    </div>
  );
}

function ProductArticle({ product, num }: { product: Product; num: string }) {
  const isLive = product.status === "live";
  return (
    <article className="grid grid-cols-12 gap-4 md:gap-6 py-7 border-t border-[var(--rule)]">
      <div className="col-span-12 md:col-span-3 flex flex-col gap-1">
        <span className="section-num">{num}</span>
        <span className="small-caps">
          {isLive ? "Studio — Live" : "Studio — Building"}
        </span>
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="flex items-baseline gap-4 flex-wrap mb-2">
          <h3 className="text-3xl md:text-4xl">{product.name}</h3>
          <span className="meta-serif">
            {isLive ? "— on shelf" : "— forthcoming"}
          </span>
        </div>
        <p className="text-[17px] leading-relaxed text-[var(--ink-soft)] mb-3 max-w-2xl">
          {product.tagline}
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--ink-mute)] mb-4 max-w-2xl">
          {product.description}
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="small-caps">
            {product.stack.join(" · ")}
          </span>
          {isLive && product.url && (
            <a
              className="link-rule inline-flex items-center gap-1.5 font-[var(--f-mono)] text-[13px]"
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   Page
   ========================================================= */
export default function Home() {
  const year = new Date().getFullYear();
  const liveCount = products.filter((p) => p.status === "live").length;

  return (
    <main className="min-h-screen">
      <Masthead />

      {/* ============== COVER ============== */}
      <section className="px-6 md:px-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="issue-label mb-3 animate-fade-up">
            the kyren collection
          </p>

          <h1
            className="animate-fade-up-1"
            style={{
              fontSize: "clamp(2.4rem, 11vw, 8rem)",
              fontWeight: 800,
              letterSpacing: "0.02em",
              lineHeight: 0.96,
              marginBottom: 12,
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
          >
            MASATONAUT
          </h1>

          <div className="flex items-center justify-center gap-5 mb-10 animate-fade-up-2">
            <span className="rule-full max-w-[120px]" />
            <span className="masthead">A ONE-PERSON STUDIO</span>
            <span className="jp text-sm">宇宙飛行士</span>
            <span className="rule-full max-w-[120px]" />
          </div>

          <p className="issue-label mb-4 animate-fade-up-3">
            the ascent collection
          </p>

          <h2
            className="animate-fade-up-3"
            style={{
              fontSize: "clamp(3rem, 9vw, 7rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            <em>Quiet Ambition.</em>
          </h2>

          <p className="jp text-lg md:text-xl mt-6 mb-10 animate-fade-up-4">
            静 か な る 野 心
          </p>

          <div className="flex items-center justify-center gap-8 animate-fade-up-4">
            <span className="rule-amber" />
            <span className="meta-serif">— dressed for the work, not for applause —</span>
            <span className="rule-amber" />
          </div>
        </div>

        {/* Feature preview grid */}
        <div className="mx-auto max-w-[1180px] mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <div className="animate-fade-up-2">
            <span className="section-num">01 — Cover Story</span>
            <h3 className="mt-2 text-2xl md:text-3xl">
              Chapter <em>Four</em>
            </h3>
            <p className="mt-3 text-[14.5px] text-[var(--ink-mute)] leading-relaxed">
              A life measured in cities, not in years. Tokyo — Budapest — Sydney —
              Los Angeles next.
            </p>
            <p className="jp text-xs mt-3">四 章 目 の 地 図</p>
          </div>

          <div className="animate-fade-up-3">
            <span className="section-num">02 — The Work</span>
            <h3 className="mt-2 text-2xl md:text-3xl text-right md:text-right">
              <em>Focused</em><br />Tools
            </h3>
            <p className="mt-3 text-[14.5px] text-[var(--ink-mute)] leading-relaxed text-right md:text-right">
              KASHITE. YOMU. Phrasely. Sabaku. Four silhouettes for everyday life.
            </p>
            <p className="jp text-xs mt-3 text-right">四 つ の 道 具</p>
          </div>

          <div className="animate-fade-up-4">
            <span className="section-num">03 — Manifesto</span>
            <h3 className="mt-2 text-2xl md:text-3xl">
              Dressed for <em>Altitude</em>
            </h3>
            <p className="mt-3 text-[14.5px] text-[var(--ink-mute)] leading-relaxed">
              A mind that survives the transit from Tokyo to LA. Built slowly. Ships
              quietly.
            </p>
            <p className="jp text-xs mt-3">上 昇 の た め の 装 い</p>
          </div>
        </div>
      </section>

      {/* ============== COVER / INTERIOR DIVIDER ============== */}
      <div className="px-6 md:px-10">
        <div className="mx-auto max-w-[980px] flex items-center gap-6">
          <span className="rule-full" />
          <span className="meta-serif whitespace-nowrap">
            interior — editorial
          </span>
          <span className="rule-full" />
        </div>
      </div>

      {/* ============== PORTRAIT (ABOUT) ============== */}
      <section id="portrait" className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-[980px]">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="section-num">01 — Portrait</span>
            <span className="rule-full" />
          </div>
          <h2 className="text-4xl md:text-6xl mb-2">
            <em>Masato</em> Ito
          </h2>
          <p className="jp text-sm mb-10">伊 藤 昌 人</p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="drop-cap text-[17px] leading-[1.75] text-[var(--ink-soft)] mb-4">
                AI engineer, indie maker, and the mind behind{" "}
                <a
                  href="https://kyren.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule"
                >
                  Kyren
                </a>
                . Co-authored a paper at{" "}
                <a
                  href="https://aclanthology.org/2025.xllm-1.11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule"
                >
                  ACL 2025
                </a>{" "}
                on AMR Parsing with reinforcement learning. Shipping small,
                focused tools while heading to USC for MSCS, Fall 2026.
              </p>
              <p className="text-[16px] leading-[1.75] text-[var(--ink-mute)] mb-4">
                BSc Computer Science from ELTE Budapest — Stipendium Hungaricum
                scholar, graduated with Excellent. Former engineer at Ericsson
                (Budapest), Cybozu (Tokyo), and SZTAKI national lab.
              </p>
              <p className="text-[16px] leading-[1.75] text-[var(--ink-mute)]">
                Lived in Tokyo, Budapest, Sydney. Visited twenty-four countries,
                fifty-six cities. PADI Master Scuba Diver — fifty-six logged
                dives. Bench one-hundred kilograms. Trains three times a week.
              </p>

              <div className="flex gap-3 mt-8 flex-wrap">
                {[
                  {
                    href: "https://github.com/masatonaut",
                    icon: <Github className="w-3.5 h-3.5" />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/masatobuilds",
                    icon: <Linkedin className="w-3.5 h-3.5" />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://x.com/masatobuilds",
                    icon: (
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                    ),
                    label: "X",
                  },
                  {
                    href: "mailto:hey@kyren.app",
                    icon: <Mail className="w-3.5 h-3.5" />,
                    label: "Email",
                  },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[12px] text-[var(--ink-soft)] border border-[var(--rule)] hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors font-[var(--f-mono)]"
                  >
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="md:col-span-4 md:pl-6 md:border-l md:border-[var(--rule)]">
              <p className="section-num">Highlights</p>
              <div className="mt-3 space-y-3">
                {[
                  ["ACL 2025", "Published paper"],
                  ["24 countries", "56+ cities"],
                  ["JP / EN", "Bilingual"],
                  ["Bench 100 kg", "Thrice a week"],
                  ["56 dives", "Master Scuba"],
                ].map(([label, sub]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-3 pb-2 border-b border-[var(--rule)]"
                  >
                    <span className="text-[14px] text-[var(--ink)]">
                      {label}
                    </span>
                    <span className="meta-serif">{sub}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============== THE WORK (PRODUCTS) ============== */}
      <section id="work" className="px-6 md:px-10 py-20 bg-[var(--paper-deep)]">
        <div className="mx-auto max-w-[980px]">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="section-num">02 — The Work</span>
            <span className="rule-full" />
          </div>
          <h2 className="text-4xl md:text-6xl mb-2">
            The <em>Kyren</em> Collection
          </h2>
          <div className="flex items-baseline gap-4 mb-10">
            <p className="jp text-sm">四 つ の 道 具</p>
            <span className="meta-serif">
              {liveCount} live · {products.length} total
            </span>
          </div>

          <div className="divide-y divide-[var(--rule)]">
            {products.map((product, i) => (
              <ProductArticle
                key={product.name}
                product={product}
                num={`0${i + 1}`}
              />
            ))}
          </div>

          <p className="mt-10 text-center">
            <a
              href="https://kyren.app"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule inline-flex items-center gap-1.5 font-[var(--f-mono)] text-[13px]"
            >
              See the whole collection at kyren.app{" "}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </section>

      {/* ============== STACK ============== */}
      <section id="stack" className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-[980px]">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="section-num">03 — The Atelier</span>
            <span className="rule-full" />
          </div>
          <h2 className="text-4xl md:text-6xl mb-10">
            <em>Tools</em> of the trade
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <p className="section-num mb-3">{cat.name}</p>
                <div className="flex flex-col gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[15px] text-[var(--ink-soft)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== JOURNEY (TIMELINE) ============== */}
      <section id="journey" className="px-6 md:px-10 py-20 bg-[var(--paper-deep)]">
        <div className="mx-auto max-w-[980px]">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="section-num">04 — The Journey</span>
            <span className="rule-full" />
          </div>
          <h2 className="text-4xl md:text-6xl mb-2">
            A life in <em>cities</em>
          </h2>
          <p className="jp text-sm mb-10">四 章 目 の 地 図</p>

          <ol className="space-y-0 relative">
            {timeline.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-4 md:gap-6 py-6 border-t border-[var(--rule)]"
              >
                <div className="col-span-12 md:col-span-3">
                  <span className="meta-serif">{item.year}</span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <p className="text-[17px] text-[var(--ink)] mb-1">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-rule"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </p>
                  <p className="text-[14.5px] text-[var(--ink-mute)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============== COLOPHON / FOOTER ============== */}
      <footer className="px-6 md:px-10 pt-14 pb-10">
        <div className="mx-auto max-w-[980px]">
          <div className="flex items-center gap-6 mb-8">
            <span className="rule-full" />
            <span className="meta-serif whitespace-nowrap">
              colophon — end of issue
            </span>
            <span className="rule-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="small-caps mb-1.5">Published</p>
              <p className="text-[14px] text-[var(--ink-soft)]">
                Tokyo · April MMXXVI
              </p>
            </div>
            <div>
              <p className="small-caps mb-1.5">Typeset in</p>
              <p className="text-[14px] text-[var(--ink-soft)]">
                Playfair Display · Inter · Noto Sans JP
              </p>
            </div>
            <div>
              <p className="small-caps mb-1.5">Studio</p>
              <p className="text-[14px]">
                <a
                  href="https://kyren.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule"
                >
                  kyren.app
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 pt-6 border-t border-[var(--rule)]">
            <span className="masthead">© {year} MASATONAUT</span>
            <span className="meta-serif hidden sm:inline">
              — quiet ambition, louder than it seems —
            </span>
            <span className="jp text-xs">静 か な る 野 心</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
