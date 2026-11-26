import { linkWhatsApp } from "@/lib/site";

const estilos = {
  // sobre fundo escuro
  claro: "bg-white text-carvao hover:bg-white/85",
  // sobre fundo claro
  escuro: "bg-carvao text-white hover:bg-grafite",
};

export function BotaoWhatsApp({
  texto = "Testar a Ofira grátis",
  mensagem,
  variante = "escuro",
  className = "",
}: {
  texto?: string;
  mensagem?: string; // texto que já vem escrito no WhatsApp

  variante?: keyof typeof estilos;
  className?: string;
}) {
  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-[15px] font-medium transition ${estilos[variante]} ${className}`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[18px] fill-current">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.04.7C5.79.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.4l5.83-1.53a11.3 11.3 0 0 0 5.6 1.43h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02" />
      </svg>
      {texto}
    </a>
  );
}
