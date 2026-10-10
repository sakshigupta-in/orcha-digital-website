import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Why Us", href: "#why-us", id: "why-us" },
  { label: "Packages", href: "#packages", id: "packages" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-[#0B1120]/90 backdrop-blur-xl border-b border-sky-400/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#home" data-testid="nav-logo" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center font-heading font-extrabold text-[#00E5FF] text-lg transition-colors duration-300 group-hover:bg-[#00E5FF]/20">
            O
          </span>
          <span className="font-heading font-bold tracking-wide text-white text-lg">
            ORCHA<span className="text-[#00E5FF]">DIGITAL</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              data-testid={`nav-link-${l.id}`}
              className="text-sm font-medium text-slate-300 hover:text-[#00E5FF] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-cta-button"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#00E5FF] px-5 py-2.5 text-sm font-bold text-[#070A12] hover:bg-[#38BDF8] hover:shadow-[0_0_24px_rgba(0,229,255,0.4)] transition-[background-color,box-shadow] duration-300"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            data-testid="nav-mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-lg border border-sky-400/20 flex items-center justify-center text-white hover:border-[#00E5FF]/50 transition-colors duration-200"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          data-testid="nav-mobile-menu"
          aria-label="Mobile"
          className="lg:hidden bg-[#0B1120]/95 backdrop-blur-xl border-t border-sky-400/10 px-6 py-6 flex flex-col gap-1"
        >
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              data-testid={`nav-mobile-link-${l.id}`}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-lg text-base font-medium text-slate-200 hover:text-[#00E5FF] hover:bg-sky-400/5 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-mobile-cta-button"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#00E5FF] px-5 py-3 text-sm font-bold text-[#070A12]"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
