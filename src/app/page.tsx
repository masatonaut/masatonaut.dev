import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Globe, Award, BookOpen, Dumbbell, MapPin } from "lucide-react";
import { products, type Product } from "@/data/products";
import { skillCategories } from "@/data/skills";

function ProductCard({ product }: { product: Product }) {
  const isClickable = product.status === "live" && product.url;
  const Wrapper = isClickable ? "a" : "div";
  return (
    <Wrapper
      {...(isClickable ? { href: product.url, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative p-5 rounded-2xl border border-border bg-bg-secondary/50 transition-all duration-300
        ${isClickable ? "cursor-pointer hover:bg-bg-secondary hover:border-transparent hover:shadow-lg" : ""}
        ${product.status !== "live" ? "opacity-50" : ""}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-heading font-bold text-sm" style={{ backgroundColor: product.accent }}>
          {product.name[0]}
        </div>
        {product.status === "live" && (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-500/10 text-green-600 dark:text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Live
          </span>
        )}
        {product.status === "building" && (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Building
          </span>
        )}
      </div>
      <h3 className="font-heading font-bold text-base text-text-primary mb-1">{product.name}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-3">{product.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {product.stack.map((tech) => (
          <span key={tech} className="px-2 py-0.5 rounded-md text-[11px] font-mono text-text-tertiary bg-bg-primary border border-border">{tech}</span>
        ))}
      </div>
      {isClickable && (
        <div className="flex items-center gap-1 text-xs text-text-tertiary group-hover:text-text-primary transition-colors mt-3">
          Try it <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </Wrapper>
  );
}

const timeline = [
  { year: "2026 —", title: "Building Kyren", desc: "Focused product studio from Tokyo. 4 products, 3 live. Shipping tools for everyday life." },
  { year: "2026 — 2028", title: "USC, Los Angeles — MSc Computer Science", desc: "Viterbi School of Engineering. Focus: Machine Learning & AI." },
  { year: "2025", title: "ACL 2025 Publication", desc: "Enhancing AMR Parsing with GRPO. Co-authored at XLLM workshop, ACL 2025.", link: "https://aclanthology.org/2025.xllm-1.11/" },
  { year: "2025", title: "AI/ML Engineer — Freelance, Tokyo", desc: "RAG pipelines, LLM integration, AI-OCR, multimodal AI. Enterprise consulting across manufacturing and FMCG." },
  { year: "2024 — 2025", title: "ML Researcher — SZTAKI, Budapest", desc: "NLP research at Hungary's national CS lab. Text summarization, dataset construction, model optimization." },
  { year: "2023 — 2024", title: "Software Engineer — Ericsson, Budapest", desc: "Data pipelines with Python, Kubernetes, Docker, Helm. Automated analytics across Budapest, India, and Canada teams." },
  { year: "2023", title: "Teaching Assistant — ELTE, Budapest", desc: "Taught Functional Programming to undergrad CS students. Designed tests, delivered lectures." },
  { year: "2022 — 2025", title: "ELTE Budapest — BSc Computer Science", desc: "Full Stipendium Hungaricum scholarship. GPA 4.63/5.0. Thesis: Factual Consistency Evaluation Using AMR." },
  { year: "2022", title: "Working Holiday — Australia", desc: "Strawberry picking (piece-rate, 3 months), then driver in Sydney. A year of grinding and exploring a new continent." },
  { year: "2020 — 2022", title: "Cybozu — Tokyo", desc: "Product Support Engineer → Data Engineer. Built data infra on GCP, BI dashboards with Power BI & Redash." },
  { year: "2018 — 2019", title: "PLAN-B — Tokyo", desc: "Marketing operations. Led 10+ interns, A/B testing, SEO, Google Ads." },
  { year: "2016 — 2019", title: "Tokyo University of Science — BSc Mechanical Engineering", desc: "First degree. Engineering foundations before pivoting to CS." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Nav */}
      <nav className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
        <span className="text-text-tertiary text-sm font-medium tracking-wide">masatonaut</span>
        <div className="flex gap-5">
          <a href="#products" className="text-text-tertiary text-sm hover:text-text-primary transition-colors">Products</a>
          <a href="#about" className="text-text-tertiary text-sm hover:text-text-primary transition-colors">About</a>
          <a href="#journey" className="text-text-tertiary text-sm hover:text-text-primary transition-colors">Journey</a>
          <a href="mailto:hey@kyren.app" className="text-text-tertiary text-sm hover:text-text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-10">
        <div className="text-center max-w-2xl animate-fade-up">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-text-primary mb-5 tracking-tight">Masato Ito</h1>
          <p className="text-text-secondary text-lg md:text-xl mb-2 animate-fade-up-delay-1">AI Engineer &amp; Indie Maker</p>
          <p className="text-text-tertiary text-base mb-7 animate-fade-up-delay-2 max-w-md mx-auto">
            Building <a href="https://kyren.app" className="text-text-secondary hover:text-text-primary transition-colors underline decoration-border underline-offset-4" target="_blank" rel="noopener noreferrer">Kyren</a> from Tokyo. Heading to LA for USC MSCS.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-delay-3">
            <a href="#products" className="px-7 py-2.5 rounded-full font-medium text-sm bg-[#18181B] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#18181B] hover:opacity-90 transition-all">View Products</a>
            <a href="mailto:hey@kyren.app" className="px-7 py-2.5 rounded-full font-medium text-sm border border-border text-text-secondary hover:text-text-primary hover:border-text-tertiary transition-all">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { icon: Award, label: "ACL 2025", sub: "Published paper" },
            { icon: Globe, label: "24 countries", sub: "56+ cities" },
            { icon: BookOpen, label: "Bilingual", sub: "JP & EN" },
            { icon: Dumbbell, label: "Bench 87.5kg", sub: "3x/week training" },
            { icon: MapPin, label: "Master Diver", sub: "56 dives, PADI" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center py-3">
              <Icon className="w-4 h-4 text-text-tertiary mb-1.5" />
              <span className="text-sm font-medium text-text-primary">{label}</span>
              <span className="text-[11px] text-text-tertiary">{sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-10 max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary mb-1">Products</p>
          <h2 className="font-heading font-bold text-xl md:text-2xl text-text-primary">Kyren Product Suite</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {products.map((product) => <ProductCard key={product.name} product={product} />)}
        </div>
        <p className="text-center mt-5">
          <a href="https://kyren.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-primary transition-colors">
            View all at kyren.app <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </p>
      </section>

      {/* About + Skills side by side */}
      <section id="about" className="px-6 py-10 max-w-4xl mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <p className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary mb-1">About</p>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-text-primary mb-4">Background</h2>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>AI/ML Engineer focused on NLP and production RAG systems. Co-authored a paper at <a href="https://aclanthology.org/2025.xllm-1.11/" className="text-text-primary hover:underline" target="_blank" rel="noopener noreferrer">ACL 2025</a> on AMR Parsing. Shipping indie products as <a href="https://kyren.app" className="text-text-primary hover:underline" target="_blank" rel="noopener noreferrer">Kyren</a>.</p>
              <p>Two CS degrees — BSc from ELTE Budapest (Stipendium Hungaricum, GPA 4.63/5.0), MSc at USC starting Fall 2026. Prior background in Mechanical Engineering (Tokyo University of Science).</p>
              <p>Worked at Ericsson (Budapest), Cybozu (Tokyo), and SZTAKI national lab (Budapest). Lived in Tokyo, Budapest, Sydney. 24 countries, 56+ cities. PADI Master Scuba Diver with 56 logged dives. Trains 3x/week.</p>
            </div>
            <div className="flex gap-2 mt-5 flex-wrap">
              {[
                { href: "https://github.com/masatonaut", icon: <Github className="w-3.5 h-3.5" />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/masatobuilds", icon: <Linkedin className="w-3.5 h-3.5" />, label: "LinkedIn" },
                { href: "https://x.com/masatobuilds", icon: <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" /></svg>, label: "X" },
                { href: "mailto:hey@kyren.app", icon: <Mail className="w-3.5 h-3.5" />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all">
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary mb-1">Stack</p>
            <h3 className="font-heading font-bold text-base text-text-primary mb-4">Technologies</h3>
            <div className="space-y-3">
              {skillCategories.map((cat) => (
                <div key={cat.name}>
                  <p className="text-[10px] font-medium tracking-wider uppercase text-text-tertiary mb-1.5">{cat.name}</p>
                  <div className="flex flex-col gap-0.5">
                    {cat.skills.map((s) => <span key={s} className="text-sm text-text-secondary">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="px-6 py-10 max-w-4xl mx-auto border-t border-border">
        <p className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary mb-1">Journey</p>
        <h2 className="font-heading font-bold text-xl md:text-2xl text-text-primary mb-6">Timeline</h2>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4 pb-4 relative">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-text-tertiary mt-1.5 shrink-0" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
              </div>
              <div className="pb-1">
                <p className="text-[11px] text-text-tertiary mb-0.5">{item.year}</p>
                <p className="text-sm text-text-primary font-medium">
                  {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{item.title}</a> : item.title}
                </p>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-xs">&copy; 2026 Masato Ito</p>
          <div className="flex gap-5">
            {["Kyren|https://kyren.app","GitHub|https://github.com/masatonaut","LinkedIn|https://www.linkedin.com/in/masatobuilds","X|https://x.com/masatobuilds"].map(s => {
              const [l,h] = s.split("|");
              return <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-secondary text-xs transition-colors">{l}</a>;
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}
