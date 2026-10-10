import { Eye, Rocket } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function VisionMission() {
  return (
    <section id="vision-mission" data-testid="vision-mission-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        <FadeIn>
          <article
            data-testid="vision-card"
            className="relative overflow-hidden glass-card rounded-3xl p-8 sm:p-10 h-full"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#00E5FF]/10 blur-[80px]" aria-hidden="true" />
            <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center mb-7">
              <Eye className="w-7 h-7 text-[#00E5FF]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF] mb-3">Our Vision</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              To become a trusted digital partner helping businesses grow through creativity, strategy, and innovation.
            </h3>
          </article>
        </FadeIn>

        <FadeIn delay={0.12}>
          <article
            data-testid="mission-card"
            className="relative overflow-hidden glass-card rounded-3xl p-8 sm:p-10 h-full"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#FF3366]/10 blur-[80px]" aria-hidden="true" />
            <div className="w-14 h-14 rounded-2xl bg-[#FF3366]/10 border border-[#FF3366]/30 flex items-center justify-center mb-7">
              <Rocket className="w-7 h-7 text-[#FF3366]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3366] mb-3">Our Mission</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              To deliver thoughtful digital solutions that build brands, create value, and support business growth.
            </h3>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
