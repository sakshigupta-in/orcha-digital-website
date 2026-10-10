import { ArrowRight, Play, MapPin, Sparkles, Package } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { IMAGES } from "@/data/content";

const CHIPS = [
  { icon: Sparkles, label: "9 Digital Services" },
  { icon: MapPin, label: "Based in Indore, India" },
  { icon: Package, label: "Custom Packages Available" },
];

export default function Hero({ onEnquire }) {
  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBackground}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A12]/70 via-[#070A12]/85 to-[#070A12]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#00E5FF]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[#FF3366]/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24 w-full">
        <FadeIn>
          <span
            data-testid="hero-tagline-pill"
            className="inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF]"
          >
            Ideas <span className="text-[#FF3366]">|</span> Content <span className="text-[#FF3366]">|</span> Growth
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-3xl">
            Your Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#38BDF8] text-glow-blue">
              Growth Partner
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Creative Ideas. Strategic Content. Real Results. We help businesses grow through social media, branding,
            content creation, websites and digital marketing.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-9 flex flex-wrap items-center gap-4">
          <button
            data-testid="hero-cta-enquire-button"
            onClick={() => onEnquire({})}
            className="inline-flex items-center gap-2 rounded-full bg-[#00E5FF] px-7 py-3.5 text-sm font-bold text-[#070A12] hover:bg-[#38BDF8] hover:shadow-[0_0_32px_rgba(0,229,255,0.45)] hover:-translate-y-0.5 transition-[background-color,box-shadow,transform] duration-300"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#portfolio"
            data-testid="hero-cta-portfolio-link"
            className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 px-7 py-3.5 text-sm font-semibold text-slate-200 hover:border-[#FF3366]/60 hover:text-white hover:bg-[#FF3366]/10 transition-[border-color,background-color,color] duration-300"
          >
            <Play className="w-4 h-4 text-[#FF3366]" />
            View Portfolio
          </a>
        </FadeIn>

        <FadeIn delay={0.45} className="mt-14 flex flex-wrap gap-3">
          {CHIPS.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2.5 text-xs font-semibold text-slate-300"
            >
              <c.icon className="w-4 h-4 text-[#00E5FF]" />
              {c.label}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
