import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Rodape } from "@/components/Rodape";

export function PaginaTexto({ titulo, atualizado, children }: { titulo: string; atualizado: string; children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-linha/60 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 py-3.5">
          <Link href="/"><Logo /></Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{titulo}</h1>
        <p className="mt-3 text-sm text-suave">Última atualização: {atualizado}</p>
        <div className="mt-12 space-y-4 text-[17px] leading-relaxed text-texto/85 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-texto [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
          {children}
        </div>
      </main>
      <Rodape />
    </>
  );
}
