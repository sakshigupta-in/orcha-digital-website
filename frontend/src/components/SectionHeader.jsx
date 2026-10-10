export default function SectionHeader({ eyebrow, title, subtitle, align = "left", testId }) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl mb-12 lg:mb-16 ${centered ? "mx-auto text-center" : ""}`} data-testid={testId}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF] mb-4">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-base text-slate-400 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
