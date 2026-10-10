import { ArrowRight, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { SERVICES } from "@/data/content";

export default function Services({ onEnquire }) {
  return (
    <section id="services" data-testid="services-section" className="py-20 lg:py-28 bg-[#0B1120]/60">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What We Do"
          title="Services built around your growth"
          subtitle="Nine focused services that cover everything your brand needs online — from first impression to daily content."
          testId="services-header"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.slug} delay={(i % 3) * 0.08}>
              <article
                data-testid={`service-card-${s.slug}`}
                className="group glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:border-[#00E5FF]/40 hover:shadow-[0_0_40px_rgba(0,229,255,0.08)] hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center mb-6 group-hover:bg-[#00E5FF]/20 transition-colors duration-300">
                  <s.icon className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-100">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-[#FF3366] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  data-testid={`service-card-enquire-${s.slug}`}
                  onClick={() => onEnquire({ service: s.title })}
                  className="mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-[#00E5FF] hover:text-white transition-colors duration-200"
                >
                  Enquire about this service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
