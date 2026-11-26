// Logo em texto: OFIRA na Unbounded (fonte da marca, carregada em app/layout.tsx como --font-unbounded)
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      style={{ fontFamily: "var(--font-unbounded), var(--font-inter), sans-serif" }}
      className={`text-[17px] font-semibold uppercase tracking-[0.14em] ${className}`}
    >
      OFIRA
    </span>
  );
}
