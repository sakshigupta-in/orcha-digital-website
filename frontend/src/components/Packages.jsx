import { Check, Minus, ArrowRight, Info } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { PACKAGES, COMPARISON_ROWS } from "@/data/content";

const cellValue = (v) => {
  if (v === "yes") return <Check className="w-5 h-5 text-[#00E5FF] mx-auto" aria-label="Included" />;
  if (v === "no") return <Minus className="w-5 h-5 text-slate-600 mx-auto" aria-label="Not included" />;
  return <span className="text-sm font-semibold text-slate-200">{v}</span>;
};

export default function Packages({ onEnquire }) {
  return (
    <section id="packages" data-testid="packages-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Packages"
        title="Simple monthly packages"
        subtitle="Clear pricing, clear deliverables. Choose a plan or ask us for a custom package."
        align="center"
        testId="packages-header"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {PACKAGES.map((p, i) => (
          <FadeIn key={p.slug} delay={i * 0.1} className="h-full">
            <article
              data-testid={`package-card-${p.slug}`}
              className={`relative rounded-3xl p-8 h-full flex flex-col transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 ${
                p.popular
                  ? "bg-[#0F172A] border-2 border-[#00E5FF] shadow-[0_0_50px_rgba(0,229,255,0.15)]"
                  : "glass-card hover:border-[#00E5FF]/35"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FF3366] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-bold tracking-[0.15em] text-white">{p.name}</h3>
              <p className="mt-1.5 text-xs font-medium text-slate-400">{p.tag}</p>
              <p className="mt-6">
                <span className="font-heading text-4xl font-extrabold text-white">{p.price}</span>
                <span className="text-sm text-slate-400"> /month</span>
              </p>
              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-[#00E5FF]" : "text-[#FF3366]"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                data-testid={`package-card-${p.slug}-select`}
                onClick={() => onEnquire({ pkg: p.name.charAt(0) + p.name.slice(1).toLowerCase() })}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-[background-color,box-shadow,color] duration-300 ${
                  p.popular
                    ? "bg-[#00E5FF] text-[#070A12] hover:bg-[#38BDF8] hover:shadow-[0_0_28px_rgba(0,229,255,0.4)]"
                    : "border border-slate-500/40 text-slate-100 hover:border-[#00E5FF]/60 hover:bg-[#00E5FF]/10"
                }`}
              >
                Choose {p.name.charAt(0) + p.name.slice(1).toLowerCase()}
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1} className="mt-14">
        <div data-testid="package-comparison" className="glass-card rounded-3xl overflow-hidden">
          <div className="px-6 sm:px-8 pt-7 pb-5">
            <h3 className="font-heading text-xl font-bold text-white">Compare packages</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-y border-sky-400/10 bg-[#0B1120]/60">
                  <th className="px-6 sm:px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    What's included
                  </th>
                  {PACKAGES.map((p) => (
                    <th
                      key={p.slug}
                      className={`px-4 py-4 text-center text-xs font-bold uppercase tracking-wider ${
                        p.popular ? "text-[#00E5FF]" : "text-slate-300"
                      }`}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.label}
                    data-testid={`comparison-row-${row.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="border-b border-sky-400/5 last:border-0 hover:bg-sky-400/[0.03] transition-colors duration-150"
                  >
                    <td className="px-6 sm:px-8 py-3.5 text-sm text-slate-300">{row.label}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="px-4 py-3.5 text-center">
                        {cellValue(v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <p
          data-testid="packages-custom-note"
          className="inline-flex items-center gap-2.5 rounded-full glass-card px-5 py-3 text-sm text-slate-300"
        >
          <Info className="w-4 h-4 text-[#00E5FF] shrink-0" />
          Custom packages are available — tell us what you need.
        </p>
        <p
          data-testid="packages-ad-budget-note"
          className="inline-flex items-center gap-2.5 rounded-full glass-card px-5 py-3 text-sm text-slate-300"
        >
          <Info className="w-4 h-4 text-[#FF3366] shrink-0" />
          Advertising budget is not included in any package.
        </p>
      </FadeIn>
    </section>
  );
}
