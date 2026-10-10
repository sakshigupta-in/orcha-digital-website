import { useState, useEffect } from "react";
import axios from "axios";
import { Phone, Mail, MessageCircle, MapPin, Globe, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { CONTACT, SERVICES, PACKAGES } from "@/data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INFO = [
  { icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref, testId: "contact-phone-link" },
  { icon: Mail, label: "Email", value: CONTACT.email, href: CONTACT.emailHref, testId: "contact-email-link" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: CONTACT.whatsapp, testId: "contact-whatsapp-link" },
  { icon: Globe, label: "Website", value: CONTACT.website, href: `https://${CONTACT.website}`, testId: "contact-website-link" },
  { icon: MapPin, label: "Location", value: CONTACT.location, href: null, testId: "contact-location" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact({ prefill }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", pkg: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", text: "" });

  useEffect(() => {
    if (prefill.key > 0) {
      setForm((f) => ({ ...f, service: prefill.service || f.service, pkg: prefill.pkg || f.pkg }));
      setStatus({ state: "idle", text: "" });
    }
  }, [prefill]);

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (form.name.trim().length < 2) er.name = "Please enter your full name.";
    if (!EMAIL_RE.test(form.email.trim())) er.email = "Please enter a valid email address.";
    if (form.phone.trim() && !/^\+?[\d\s-]{10,16}$/.test(form.phone.trim()))
      er.phone = "Please enter a valid phone number.";
    if (!form.service) er.service = "Please select a service.";
    if (form.message.trim().length < 10) er.message = "Please tell us a little more (at least 10 characters).";
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) {
      setErrors(er);
      setStatus({ state: "idle", text: "" });
      return;
    }
    setStatus({ state: "sending", text: "" });
    try {
      await axios.post(`${API}/enquiries`, {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        service: form.service,
        package: form.pkg || null,
        message: form.message.trim(),
      });
      setStatus({
        state: "success",
        text: "Your enquiry has been received and saved. We will get back to you shortly. For a faster response, reach us directly on WhatsApp.",
      });
      setForm({ name: "", email: "", phone: "", service: "", pkg: "", message: "" });
      setErrors({});
    } catch {
      setStatus({
        state: "error",
        text: "We could not submit your enquiry right now. Nothing was saved — please reach us directly by email or WhatsApp instead.",
      });
    }
  };

  const inputCls = (field) =>
    `w-full rounded-xl bg-[#0B1120]/80 border px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-[#00E5FF]/60 focus:ring-2 focus:ring-[#00E5FF]/15 ${
      errors[field] ? "border-[#FF3366]/70" : "border-sky-400/15"
    }`;

  return (
    <section id="contact" data-testid="contact-section" className="py-20 lg:py-28 bg-[#0B1120]/60">
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's talk about your growth"
          subtitle="Send an enquiry, or reach us directly — phone, email and WhatsApp all work."
          testId="contact-header"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <FadeIn className="lg:col-span-2">
            <div className="space-y-4">
              {INFO.map((c) => {
                const inner = (
                  <>
                    <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{c.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-100 break-all">{c.value}</p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    data-testid={c.testId}
                    className="flex items-center gap-4 glass-card rounded-2xl p-5 hover:border-[#00E5FF]/40 hover:-translate-y-0.5 transition-[border-color,transform] duration-200"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} data-testid={c.testId} className="flex items-center gap-4 glass-card rounded-2xl p-5">
                    {inner}
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-3">
            <form
              data-testid="contact-form"
              onSubmit={onSubmit}
              noValidate
              className="glass-card rounded-3xl p-6 sm:p-9"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="enquiry-name"
                    data-testid="contact-form-name-input"
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    className={inputCls("name")}
                  />
                  {errors.name && (
                    <p data-testid="contact-form-name-error" className="mt-1.5 text-xs font-medium text-[#FF3366]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="enquiry-email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="enquiry-email"
                    data-testid="contact-form-email-input"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    className={inputCls("email")}
                  />
                  {errors.email && (
                    <p data-testid="contact-form-email-error" className="mt-1.5 text-xs font-medium text-[#FF3366]">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="enquiry-phone"
                    data-testid="contact-form-phone-input"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+91 ..."
                    className={inputCls("phone")}
                  />
                  {errors.phone && (
                    <p data-testid="contact-form-phone-error" className="mt-1.5 text-xs font-medium text-[#FF3366]">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="enquiry-service" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="enquiry-service"
                    data-testid="contact-form-service-select"
                    value={form.service}
                    onChange={set("service")}
                    className={`${inputCls("service")} appearance-none`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  {errors.service && (
                    <p data-testid="contact-form-service-error" className="mt-1.5 text-xs font-medium text-[#FF3366]">
                      {errors.service}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="enquiry-package" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Package of Interest
                  </label>
                  <select
                    id="enquiry-package"
                    data-testid="contact-form-package-select"
                    value={form.pkg}
                    onChange={set("pkg")}
                    className={`${inputCls("pkg")} appearance-none`}
                  >
                    <option value="">No package selected</option>
                    {PACKAGES.map((p) => (
                      <option key={p.slug} value={p.name.charAt(0) + p.name.slice(1).toLowerCase()}>
                        {p.name} — {p.price}/month
                      </option>
                    ))}
                    <option value="Custom">Custom package</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="enquiry-message"
                    data-testid="contact-form-message-input"
                    rows={5}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your business and what you need..."
                    className={`${inputCls("message")} resize-y`}
                  />
                  {errors.message && (
                    <p data-testid="contact-form-message-error" className="mt-1.5 text-xs font-medium text-[#FF3366]">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {status.state === "success" && (
                <div
                  data-testid="contact-form-success"
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-200 leading-relaxed">{status.text}</p>
                </div>
              )}
              {status.state === "error" && (
                <div
                  data-testid="contact-form-error"
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-2xl border border-[#FF3366]/40 bg-[#FF3366]/10 px-5 py-4"
                >
                  <AlertTriangle className="w-5 h-5 text-[#FF3366] shrink-0 mt-0.5" />
                  <div className="text-sm text-rose-200 leading-relaxed">
                    <p>{status.text}</p>
                    <p className="mt-2 flex flex-wrap gap-4">
                      <a href={CONTACT.emailHref} className="font-bold text-[#00E5FF] underline underline-offset-2">
                        Email us
                      </a>
                      <a
                        href={CONTACT.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#00E5FF] underline underline-offset-2"
                      >
                        WhatsApp us
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                data-testid="contact-form-submit-button"
                disabled={status.state === "sending"}
                className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#00E5FF] px-8 py-4 text-sm font-bold text-[#070A12] hover:bg-[#38BDF8] hover:shadow-[0_0_32px_rgba(0,229,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed transition-[background-color,box-shadow] duration-300"
              >
                {status.state === "sending" ? "Sending..." : "Send Enquiry"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
