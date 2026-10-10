import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT, SERVICES } from "@/data/content";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-sky-400/10 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" data-testid="footer-logo" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center font-heading font-extrabold text-[#00E5FF] text-lg">
              O
            </span>
            <span className="font-heading font-bold tracking-wide text-white text-lg">
              ORCHA<span className="text-[#00E5FF]">DIGITAL</span>
            </span>
          </a>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FF3366]">Ideas | Content | Growth</p>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Your digital growth partner — creative ideas, strategic content and real results for businesses ready to
            grow online.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-slate-300 hover:text-[#00E5FF] transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Services</h3>
          <ul className="space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <a
                  href="#services"
                  data-testid={`footer-service-${s.slug}`}
                  className="text-sm text-slate-300 hover:text-[#00E5FF] transition-colors duration-200"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Get in Touch</h3>
          <ul className="space-y-4">
            <li>
              <a
                href={CONTACT.phoneHref}
                data-testid="footer-phone-link"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#00E5FF] transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-[#00E5FF] shrink-0" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailHref}
                data-testid="footer-email-link"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#00E5FF] transition-colors duration-200 break-all"
              >
                <Mail className="w-4 h-4 text-[#00E5FF] shrink-0" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-link"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#00E5FF] transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#00E5FF] shrink-0" />
                WhatsApp us
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-[#FF3366] shrink-0" />
              {CONTACT.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sky-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© 2026 Orcha Digital. All rights reserved.</p>
          <p className="text-xs text-slate-500">{CONTACT.website}</p>
        </div>
      </div>
    </footer>
  );
}
