import Link from "next/link";
import { site } from "@/lib/site";

// Os dados da empresa no rodapé são exigência da verificação da Meta: precisam bater com o cartão CNPJ.
export function Rodape() {
  const { empresa } = site;
  return (
    <footer className="bg-fundo text-xs text-suave">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 border-b border-linha pb-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-texto">
            <span className="font-semibold">{site.produto}</span>
            <span className="text-suave"> é um produto da {empresa.nome}</span>
          </p>
          <nav className="flex gap-6">
            <Link href="/privacidade" className="hover:text-texto">Política de privacidade</Link>
            <Link href="/termos" className="hover:text-texto">Termos de uso</Link>
          </nav>
        </div>
        <div className="space-y-1 pt-6 leading-relaxed">
          <p>{empresa.razaoSocial} · CNPJ {empresa.cnpj}</p>
          <p>{empresa.endereco}</p>
          <p>
            Contato:{" "}
            <a href={`mailto:${empresa.email}`} className="hover:text-texto hover:underline">
              {empresa.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
