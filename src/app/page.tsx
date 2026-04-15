import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
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
        group relative p-6 rounded-2xl border border-border bg-bg-secondary/50
        transition-all duration-300
        ${isClickable ? "cursor-pointer hover:bg-bg-secondary hover:border-transparent hover:shadow-lg" : ""}
        ${product.status !== "live" ? "opacity-50" : ""}
      `}
    >
      {/* Header: icon + badge */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-heading font-bold text-sm"
          style={{ backgroundColor: product.accent }}
        >
          {product.name[0]}
        </div>
        {product.status === "live" && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Live
          </span>
        )}
        {product.status === "building" && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Building
          </span>
        )}
      </div>

      {/* Name + tagline */}
      <h3 className="font-heading font-bold text-lg text-text-primary mb-1">
        {product.name}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {product.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {product.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md text-xs font-mono text-text-tertiary bg-bg-primary border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      {isClickable && (
        <div className="flex items-center gap-1 text-sm text-text-tertiary group-hover:text-text-primary transition-colors mt-2">
          Try it
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </Wrapper>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Nav */}
      <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        <span className="text-text-tertiary text-sm font-medium tracking-wide">
          masatonaut
        </span>
        <div className="flex gap-5">
          <a
            href="#products"
            className="text-text-tertiary text-sm hover:text-text-primary transition-colors"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-text-tertiary text-sm hover:text-text-primary transition-colors"
          >
            About
          </a>
          <a
            href="mailto:hey@kyren.app"
            className="text-text-tertiary text-sm hover:text-text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[75vh] flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center max-w-2xl animate-fade-up">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-text-primary mb-6 tracking-tight">
            Masato Ito
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-3 animate-fade-up-delay-1">
            AI Engineer &amp; Indie Maker
          </p>
          <p className="text-text-tertiary text-base mb-10 animate-fade-up-delay-2 max-w-md mx-auto">
            Building{" "}
            <a
              href="https://kyren.app"
              className="text-text-secondary hover:text-text-primary transition-colors underline decoration-border underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kyren
            </a>
            , a focused product studio from Tokyo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up-delay-3">
            <a
              href="#products"
              className="px-7 py-2.5 rounded-full font-medium text-sm text-white bg-text-primary hover:opacity-90 transition-all"
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

      {/* Products Section */}
      <section id="products" className="px-6 py-20 max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-text-tertiary mb-2">
            Products
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary">
            Kyren Product Suite
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <p className="text-center mt-8">
          <a
            href="https://kyren.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-primary transition-colors"
          >
            View all at kyren.app
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-text-tertiary mb-2 text-center">
            Stack
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-xs font-medium tracking-wider uppercase text-text-tertiary mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 max-w-4xl mx-auto">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-text-tertiary mb-2">
            About
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-8">
            Background
          </h2>

          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              AI Engineer building enterprise solutions with RAG and Claude API.
              Shipping side projects as{" "}
              <a
                href="https://kyren.app"
                className="text-text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kyren
              </a>
              .
            </p>
            <p>
              CS background from Budapest (ELTE). International experience
              across Hungary, Australia, and Japan.
              Based in Tokyo.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-3 mt-10">
            <a
              href="https://github.com/masatonaut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/masatobuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://x.com/masatobuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all"
              aria-label="X"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
              X
            </a>
            <a
              href="mailto:hey@kyren.app"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-text-secondary border border-border hover:border-text-tertiary hover:text-text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-xs">
            &copy; 2026 Masato Ito
          </p>
          <div className="flex gap-5">
            <a
              href="https://kyren.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary text-xs transition-colors"
            >
              Kyren
            </a>
            <a
              href="https://github.com/masatonaut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary text-xs transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/masatobuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary text-xs transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
