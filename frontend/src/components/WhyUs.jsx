import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { WHY_US } from "@/data/content";

export default function WhyUs() {
  return (
    <section id="why-us" data-testid="why-us-section" className="py-20 lg:py-28 bg-[#0B1120]/60">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built different, on purpose"
          subtitle="Six principles shape every project we take on."
          testId="why-us-header"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_US.map((w, i) => (
            <FadeIn key={w.title} delay={(i % 3) * 0.08}>
              <article
                data-testid={`why-us-card-${w.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="glass-card rounded-2xl p-6 sm:p-8 h-full hover:border-[#FF3366]/40 hover:-translate-y-1 transition-[border-color,transform] duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF3366]/10 border border-[#FF3366]/25 flex items-center justify-center mb-6">
                  <w.icon className="w-6 h-6 text-[#FF3366]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{w.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{w.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
