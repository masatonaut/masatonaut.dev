import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, MapPin, GraduationCap, Globe, Award, BookOpen } from "lucide-react";
import { products, type Product } from "@/data/products";
import { skillCategories } from "@/data/skills";

function ProductCard({ product }: { product: Product }) {
  const isClickable = product.status === "live" && product.url;
  const Wrapper = isClickable ? "a" : "div";

  return (
    <Wrapper
      {...(isClickable
        ? { href: product.url, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`
        group relative p-5 rounded-2xl border border-border bg-bg-secondary/50
        transition-all duration-300
        ${isClickable ? "cursor-pointer hover:bg-bg-secondary hover:border-transparent hover:shadow-lg" : ""}
        ${product.status !== "live" ? "opacity-50" : ""}
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-heading font-bold text-sm"
          style={{ backgroundColor: product.accent }}
        >
          {product.name[0]}
        </div>
        {product.status === "live" && (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-500/10 text-green-600 dark:text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Live
          </span>
        )}
        {product.status === "building" && (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Building
          </span>
        )}
      </div>

      <h3 className="font-heading font-bold text-base text-text-primary mb-1">
        {product.name}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-3">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {product.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md text-[11px] font-mono text-text-tertiary bg-bg-primary border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {isClickable && (
        <div className="flex items-center gap-1 text-xs text-text-tertiary group-hover:text-text-primary transition-colors mt-3">
          Try it
          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </Wrapper>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Nav */}
      <nav className="max-w-3xl mx-auto px-6 py-5 flex justify-between items-center">
        <span className="text-text-tertiary text-sm font-medium tracking-wide">
          masatonaut
        </span>
        <div className="flex gap-5">
          <a href="#products" className="text-text-tertiary text-sm hover:text-text-primary transition-colors">Products</a>
          <a href="#about" className="text-text-tertiary text-sm hover:text-text-primary transition-colors">About</a>
          <a href="#highlights" className="text-text-tertiary text-sm hover:text-text-primary transition-colors">Highlights</a>
          <a href="mailto:hey@kyren.app" className="text-text-tertiary text-sm hover:text-text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[65vh] flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center max-w-2xl animate-fade-up">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-text-primary mb-5 tracking-tight">
            Masato Ito
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-2 animate-fade-up-delay-1">
            AI Engineer &amp; Indie Maker
          </p>
          <p className="text-text-tertiary text-base mb-8 animate-fade-up-delay-2 max-w-md mx-auto">
            Building{" "}
            <a href="https://kyren.app" className="text-text-secondary hover:text-text-primary transition-colors underline decoration-border underline-offset-4" target="_blank" rel="noopener noreferrer">
              Kyren
            </a>
            , a focused product studio from Tokyo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-delay-3">
            <a
              href="#products"
              className="px-7 py-2.5 rounded-full font-medium text-sm bg-[#18181B] text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#18181B] hover:opacity-90 transition-all"
            >
              View Products
            </a>
            <a
              href="mailto:hey@kyren.app"
              className="px-7 py-2.5 rounded-full font-medium text-sm border border-border text-text-secondary hover:text-text-primary hover:border-text-tertiary transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="px-6 py-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-4">
              <Award className="w-5 h-5 text-text-tertiary mb-2" />
              <span className="text-sm font-medium text-text-primary">ACL 2025</span>
              <span className="text-xs text-text-tertiary mt-0.5">Published paper</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Globe className="w-5 h-5 text-text-tertiary mb-2" />
              <span className="text-sm font-medium text-text-primary">24 countries</span>
              <span className="text-xs text-text-tertiary mt-0.5">56+ cities visited</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <GraduationCap className="w-5 h-5 text-text-tertiary mb-2" />
              <span className="text-sm font-medium text-text-primary">Scholarship</span>
              <span className="text-xs text-text-tertiary mt-0.5">Stipendium Hungaricum</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <BookOpen className="w-5 h-5 text-text-tertiary mb-2" />
              <span className="text-sm font-medium text-text-primary">Bilingual</span>
              <span className="text-xs text-text-tertiary mt-0.5">Japanese &amp; English</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-12 max-w-3xl mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary mb-1">Products</p>
          <h2 className="font-heading font-bold text-xl md:text-2xl text-text-primary">
            Kyren Product Suite
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <p className="text-center mt-6">
          <a href="https://kyren.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-primary transition-colors">
            View all at kyren.app <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </p>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-12 max-w-3xl mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <p className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary mb-1">About</p>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-text-primary mb-4">
              Background
            </h2>

            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                AI Engineer focused on NLP and applied ML. Building enterprise solutions with RAG and Claude API by day, shipping indie products as{" "}
                <a href="https://kyren.app" className="text-text-primary hover:underline" target="_blank" rel="noopener noreferrer">Kyren</a> by night.
              </p>
              <p>
                Published at <strong className="text-text-primary">ACL 2025</strong> on AMR Parsing.
                CS degree from ELTE Budapest on a full Stipendium Hungaricum scholarship.
                Research background in NLP, text summarization, and factual consistency evaluation.
              </p>
              <p>
                Lived and worked across Tokyo, Budapest, and Australia.
                24 countries, 56+ cities. Fluent in Japanese and English.
                Master Scuba Diver.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-2 mt-6 flex-wrap">
              <a href="https://github.com/masatonaut" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/masatobuilds" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a href="https://x.com/masatobuilds" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
                X
              </a>
              <a href="mailto:hey@kyren.app"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all">
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary mb-1">Stack</p>
            <h3 className="font-heading font-bold text-base text-text-primary mb-4">Technologies</h3>
            <div className="space-y-4">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <p className="text-[10px] font-medium tracking-wider uppercase text-text-tertiary mb-2">
                    {category.name}
                  </p>
                  <div className="flex flex-col gap-1">
                    {category.skills.map((skill) => (
                      <span key={skill} className="text-sm text-text-secondary">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="px-6 py-12 max-w-3xl mx-auto border-t border-border">
        <p className="text-[11px] font-medium tracking-widest uppercase text-text-tertiary mb-1">Journey</p>
        <h2 className="font-heading font-bold text-xl md:text-2xl text-text-primary mb-6">
          Timeline
        </h2>
        <div className="space-y-0">
          <div className="flex gap-4 pb-6 relative">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-text-tertiary mt-1.5 shrink-0" />
              <div className="w-px flex-1 bg-border" />
            </div>
            <div className="pb-2">
              <p className="text-xs text-text-tertiary mb-0.5">2026 —</p>
              <p className="text-sm text-text-primary font-medium">Building Kyren</p>
              <p className="text-sm text-text-secondary">Focused product studio. 4 products shipped from Tokyo.</p>
            </div>
          </div>
          <div className="flex gap-4 pb-6 relative">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-text-tertiary mt-1.5 shrink-0" />
              <div className="w-px flex-1 bg-border" />
            </div>
            <div className="pb-2">
              <p className="text-xs text-text-tertiary mb-0.5">2025</p>
              <p className="text-sm text-text-primary font-medium">ACL 2025 Publication</p>
              <p className="text-sm text-text-secondary">Enhancing AMR Parsing with GRPO. Research at SZTAKI, Hungary.</p>
            </div>
          </div>
          <div className="flex gap-4 pb-6 relative">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-text-tertiary mt-1.5 shrink-0" />
              <div className="w-px flex-1 bg-border" />
            </div>
            <div className="pb-2">
              <p className="text-xs text-text-tertiary mb-0.5">2024 — 2026</p>
              <p className="text-sm text-text-primary font-medium">AI Engineer</p>
              <p className="text-sm text-text-secondary">Enterprise AI solutions. RAG pipelines, Claude API integrations.</p>
            </div>
          </div>
          <div className="flex gap-4 pb-6 relative">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-text-tertiary mt-1.5 shrink-0" />
              <div className="w-px flex-1 bg-border" />
            </div>
            <div className="pb-2">
              <p className="text-xs text-text-tertiary mb-0.5">2020 — 2024</p>
              <p className="text-sm text-text-primary font-medium">BSc Computer Science, ELTE Budapest</p>
              <p className="text-sm text-text-secondary">Full Stipendium Hungaricum scholarship. NLP research focus.</p>
            </div>
          </div>
          <div className="flex gap-4 relative">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-text-tertiary mt-1.5 shrink-0" />
            </div>
            <div>
              <p className="text-xs text-text-tertiary mb-0.5">1996</p>
              <p className="text-sm text-text-primary font-medium">Born in Tokyo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-xs">
            &copy; 2026 Masato Ito
          </p>
          <div className="flex gap-5">
            <a href="https://kyren.app" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-secondary text-xs transition-colors">Kyren</a>
            <a href="https://github.com/masatonaut" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-secondary text-xs transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/masatobuilds" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-secondary text-xs transition-colors">LinkedIn</a>
            <a href="https://x.com/masatobuilds" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-secondary text-xs transition-colors">X</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
