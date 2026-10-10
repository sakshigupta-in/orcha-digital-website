import { MapPin } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { IMAGES, CONTACT } from "@/data/content";

const STATS = [
  { value: "9", label: "Core Services" },
  { value: "4", label: "Step Process" },
  { value: "3", label: "Growth Packages" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeIn>
          <SectionHeader
            eyebrow="About Us"
            title="A creative partner for the digital-first business"
            testId="about-header"
          />
          <div className="-mt-6 space-y-5 text-base text-slate-400 leading-relaxed">
            <p>
              Orcha Digital is a digital marketing and creative agency that helps businesses show up, stand out and
              grow online. We work across social media, branding, content creation, websites and digital marketing —
              bringing all of it together under one roof.
            </p>
            <p>
              We believe good marketing is not noise. It is clear thinking, honest creative work and consistent
              execution. Whether you are launching a new brand or trying to grow an existing one, we build the ideas,
              content and systems that move you forward.
            </p>
            <p className="inline-flex items-center gap-2 text-slate-300 font-medium">
              <MapPin className="w-4 h-4 text-[#FF3366]" />
              {CONTACT.location}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                data-testid={`about-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="glass-card rounded-2xl p-5 text-center"
              >
                <p className="font-heading text-3xl font-extrabold text-[#00E5FF]">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="absolute -inset-4 bg-[#00E5FF]/10 blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative rounded-3xl overflow-hidden border border-sky-400/15 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <img
              src={IMAGES.aboutStudio}
              alt="Orcha Digital creative studio workspace"
              className="w-full h-[420px] lg:h-[520px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl px-5 py-4">
              <p className="font-heading font-bold text-white">Ideas | Content | Growth</p>
              <p className="text-xs text-slate-400 mt-1">The three things every Orcha project is built on.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
