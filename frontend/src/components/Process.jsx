import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { PROCESS_STEPS } from "@/data/content";

export default function Process() {
  return (
    <section id="process" data-testid="process-section" className="py-20 lg:py-28 bg-[#0B1120]/60">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Process"
          title="Four steps. No mystery."
          subtitle="A simple, transparent way of working — you always know what happens next."
          testId="process-header"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.1}>
              <article
                data-testid={`process-step-${s.name.toLowerCase()}`}
                className="relative glass-card rounded-2xl p-6 sm:p-8 h-full hover:border-[#00E5FF]/40 transition-colors duration-300"
              >
                <span className="font-heading text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#00E5FF]/60 to-[#00E5FF]/5">
                  {s.step}
                </span>
                <div className="mt-5 w-11 h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-wide text-white">{s.name}</h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{s.description}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#00E5FF]/40 to-transparent"
                  />
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
