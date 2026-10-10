import { useState } from "react";
import { FlaskConical } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from "@/data/content";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const projects = active === "All" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Portfolio"
        title="Concept work, honestly labelled"
        subtitle="As a new agency, the projects below are sample concepts created in-house to demonstrate our style and capabilities — not client work."
        testId="portfolio-header"
      />

      <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Portfolio categories">
        {PORTFOLIO_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            data-testid={`portfolio-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,color,border-color] duration-200 border ${
              active === c
                ? "bg-[#00E5FF] text-[#070A12] border-[#00E5FF]"
                : "bg-transparent text-slate-300 border-slate-600/40 hover:border-[#00E5FF]/50 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <FadeIn key={p.slug} delay={(i % 3) * 0.08}>
            <article
              data-testid={`portfolio-card-${p.slug}`}
              className="group rounded-2xl overflow-hidden glass-card hover:border-[#00E5FF]/40 hover:-translate-y-1 transition-[border-color,transform] duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.category} concept project`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/85 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#FF3366]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  <FlaskConical className="w-3 h-3" />
                  Concept Project
                </span>
                <span className="absolute bottom-3 left-3 rounded-full bg-[#0B1120]/80 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#00E5FF] border border-[#00E5FF]/25">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
