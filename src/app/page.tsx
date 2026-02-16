import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { products, type Product } from "@/data/products";
import { skillCategories } from "@/data/skills";

function ProductCard({ product }: { product: Product }) {
  const isClickable = product.status === "live" && product.url;
  const Wrapper = isClickable ? "a" : "div";

  return (
    <Wrapper
      {...(isClickable ? { href: product.url, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`
        group relative p-5 rounded-xl border border-border bg-bg-secondary
        transition-all duration-200
        ${isClickable ? "cursor-pointer hover:shadow-md hover:border-transparent" : ""}
        ${product.status !== "live" ? "opacity-60" : ""}
      `}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-bold text-lg shrink-0"
          style={{ backgroundColor: product.accent }}
        >
          {product.name[0]}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-heading font-bold text-text-primary">
              {product.name}
            </h3>
            <span className="text-text-tertiary text-sm">
              {product.japaneseName}
            </span>
          </div>
          <p className="text-text-secondary text-sm mb-2">
            {product.description}
          </p>
          <p className="text-text-tertiary text-xs">
            {product.tagline}
          </p>
        </div>

        {/* Status badge */}
        <div className="shrink-0">
          {product.status === "live" && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Live
            </span>
          )}
          {product.status === "coming-soon" && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              Coming Soon
            </span>
          )}
          {product.status === "planned" && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              Planned
            </span>
          )}
        </div>

        {/* External link icon */}
        {isClickable && (
          <ExternalLink className="w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4" />
        )}
      </div>
    </Wrapper>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl animate-fade-up">
          <h1 className="font-heading font-extrabold text-6xl md:text-7xl lg:text-8xl text-text-primary mb-4">
            masatonaut
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-6 animate-fade-up-delay-1">
            AI Engineer • Indie Maker • USC MSCS &apos;28
          </p>
          <p className="text-text-tertiary text-base md:text-lg mb-10 animate-fade-up-delay-2">
            日常の摩擦を美しく解消するマイクロツールを作っています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <a
              href="#products"
              className="px-8 py-3 rounded-full font-medium text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #E85D3A, #5B8DEF)" }}
            >
              Projects
            </a>
            <a
              href="mailto:masatonaut@gmail.com"
              className="px-8 py-3 rounded-full font-medium border border-border text-text-primary hover:bg-bg-secondary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="px-6 py-20 max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-2">
            Products
          </h2>
          <p className="text-text-secondary">
            <span className="gradient-text font-medium">choimo</span> — Micro tools for daily friction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <p className="text-text-tertiary text-sm text-center mt-8">
          30+ more apps planned for the choimo series
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-12 text-center">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="font-medium text-text-primary mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm bg-bg-primary text-text-secondary border border-border"
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
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-8 text-center">
          About
        </h2>

        <div className="space-y-6 text-text-secondary max-w-2xl mx-auto">
          <p>
            AI Engineer at <strong className="text-text-primary">QuackShift</strong> (2024-2026).
            Building enterprise AI solutions with RAG, LangChain, and Claude API.
          </p>
          <p>
            <strong className="text-text-primary">USC Master of Computer Science</strong> — Fall 2026 incoming.
            Focusing on Machine Learning and AI.
          </p>
          <p>
            International experience: Hungary (ELTE), Australia.
            29歳、日英バイリンガル。
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/masatonaut"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/masatonaut"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/masatonaut"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary"
            aria-label="X (Twitter)"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:masatonaut@gmail.com"
            className="p-3 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-tertiary text-sm mb-4">
            © 2026 masatonaut
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/masatonaut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary text-sm transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/masatonaut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/masatonaut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary text-sm transition-colors"
            >
              X
            </a>
            <a
              href="mailto:masatonaut@gmail.com"
              className="text-text-tertiary hover:text-text-secondary text-sm transition-colors"
            >
              Email
            </a>
          </div>
          <p className="text-text-tertiary text-xs">
            Built with Next.js + Tailwind. Designed with Kanso.
          </p>
        </div>
      </footer>
    </main>
  );
}
