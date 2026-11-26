import Image from "next/image";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { Logo } from "@/components/Logo";
import { Rodape } from "@/components/Rodape";
import { linkWhatsApp, site } from "@/lib/site";

const passos = [
  {
    titulo: "Mande um áudio",
    texto: "Fale o serviço e os valores, ou quando ele vai ser. Também vale texto ou a foto da sua anotação.",
  },
  {
    titulo: "Receba o orçamento",
    texto: "Em segundos chega o PDF com seu nome, seu logo e o total calculado. É só encaminhar ao cliente.",
  },
  {
    titulo: "Agende o serviço",
    texto: "Cliente aprovou? Diga \"marca pra quinta às 14h\" e o serviço vai para a sua agenda.",
  },
];

const recursos = [
  { titulo: "Por áudio, texto ou foto", texto: "Fale do jeito que você já fala com o cliente. Sem formulário." },
  { titulo: "Com a sua marca", texto: "Nome da empresa e logo no cabeçalho de todos os orçamentos." },
  { titulo: "Conta sempre certa", texto: "O total é calculado pelo sistema, item por item. Nada de erro de soma." },
  { titulo: "Correção na hora", texto: "Errou um valor? Peça a correção e receba o PDF atualizado com o mesmo número." },
  { titulo: "Recibo e caixa do mês", texto: "Diga \"recebi 200 da Ana\" e receba o recibo em PDF. A Ofira mostra quanto entrou e quem ainda deve." },
  { titulo: "Sem instalar nada", texto: "Funciona dentro do WhatsApp que você já usa todo dia." },
];

const perguntas = [
  {
    p: "Preciso instalar algum aplicativo?",
    r: "Não. Tudo acontece numa conversa de WhatsApp. Você manda a mensagem e recebe o orçamento ou o agendamento.",
  },
  {
    p: "Como funciona o agendamento?",
    r: "Diga o serviço, o dia e a hora, como falaria com qualquer pessoa. Na primeira vez, ele pergunta se você usa a agenda do Google ou do iPhone. Depois é um toque e o serviço vai para a sua agenda, com lembrete. Para ver o que tem marcado, é só perguntar.",
  },
  {
    p: "Serve para a minha área?",
    r: "Serve para qualquer negócio que manda orçamento e atende com hora marcada, em qualquer área. Você fala do seu jeito e a Ofira organiza.",
  },
  {
    p: "E se o orçamento sair com algum valor errado?",
    r: "Confira sempre antes de enviar. Se algo estiver errado, é só dizer o que mudar que chega um PDF corrigido com o mesmo número.",
  },
  {
    p: "Meus dados ficam seguros?",
    r: "Usamos seus dados só para gerar os orçamentos, os recibos e os agendamentos. Você pode pedir a exclusão a qualquer momento. Veja a política de privacidade.",
  },
  {
    p: "Como assino o Pro?",
    r: "Toque em \"Assinar o mensal\" ou \"Assinar o anual\", ou mande \"quero assinar o Pro\" no WhatsApp. Chega um link seguro do PagBank para pagar por Pix ou cartão, e o Pro é ativado assim que o pagamento é confirmado.",
  },
  {
    p: "Tem fidelidade ou cobrança automática?",
    r: "Não tem fidelidade. No mensal por Pix, cada pagamento libera 30 dias, e se você não pagar o mês seguinte a conta volta para o plano grátis. Se preferir a renovação automática no cartão, mande \"assinar no cartão\"; para cancelar, é só mandar \"cancelar assinatura\", sem multa. O anual é pago uma vez e vale 12 meses.",
  },
];

function Check({ claro = false }: { claro?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`mt-0.5 size-5 shrink-0 ${claro ? "fill-white" : "fill-carvao"}`}>
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0" />
    </svg>
  );
}

function Titulo({ sobre, children, claro = false }: { sobre?: string; children: React.ReactNode; claro?: boolean }) {
  return (
    <div className="mx-auto max-w-4xl text-balance text-center">
      {sobre && <p className={`text-lg font-semibold ${claro ? "text-white/55" : "text-suave"}`}>{sobre}</p>}
      <h2 className="mt-2 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{children}</h2>
    </div>
  );
}

// Cores do próprio WhatsApp (tema claro), só neste exemplo de conversa
function Conversa() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl text-left shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
      <div className="flex items-center gap-3 bg-[#008069] px-4 py-3 text-white">
        <div className="grid size-9 place-items-center rounded-full bg-white/20 text-sm font-semibold">
          {site.produto.slice(0, 1)}
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold">{site.produto}</p>
          <p className="text-xs text-white/75">online</p>
        </div>
      </div>
      <div className="space-y-2.5 bg-[#efeae2] p-4 text-sm text-[#111b21]">
        <div className="ml-auto w-fit max-w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-[#00a884] text-[10px] text-white">▶</span>
            <span className="flex h-5 items-center gap-0.5" aria-hidden="true">
              {[3, 6, 9, 5, 11, 7, 4, 10, 6, 8, 3, 7, 5, 9, 4].map((h, i) => (
                <span key={i} className="w-0.5 rounded-full bg-[#8696a0]" style={{ height: `${h * 1.6}px` }} />
              ))}
            </span>
            <span className="text-xs text-[#667781]">0:12</span>
          </div>
          <p className="mt-1.5 text-xs italic text-[#667781]">
            &quot;Orçamento pra Ana Souza: 350 de mão de obra, 120 de material e 50 de deslocamento&quot;
          </p>
        </div>
        <div className="w-fit max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
          <div className="flex items-center gap-3 rounded-md bg-[#f5f6f6] p-2.5">
            <span className="grid h-10 w-8 place-items-center rounded bg-[#e2574c] text-[9px] font-bold text-white">PDF</span>
            <div className="leading-tight">
              <p className="text-xs font-semibold">Orcamento-0027.pdf</p>
              <p className="text-[11px] text-[#667781]">1 página</p>
            </div>
          </div>
          <p className="mt-2">
            Orçamento nº 27 — Ana Souza — Total <strong>R$ 520,00</strong>.
            <br />
            Quer mudar algo? É só falar.
          </p>
        </div>
        <div className="ml-auto w-fit max-w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 shadow-sm">
          marca pra quinta às 14h
        </div>
        <div className="w-fit max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
          Agendado: Atendimento — Ana Souza — quinta, 03/12 às 14:00.
          <span className="mt-1 block text-xs text-[#027eb5] underline">Salvar no Google Agenda</span>
        </div>
      </div>
    </div>
  );
}

// Exemplo do agendamento: conversa (cores do WhatsApp) + evento salvo na agenda
function ExemploAgenda() {
  return (
    <div className="mx-auto mt-16 grid max-w-5xl items-center gap-8 md:grid-cols-2">
      <div className="overflow-hidden rounded-2xl text-left shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
        <div className="space-y-2.5 bg-[#efeae2] p-5 text-sm text-[#111b21]">
          <div className="ml-auto w-fit max-w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 shadow-sm">
            marca o atendimento da Ana pra quinta às 14h, na Rua das Flores 120
          </div>
          <div className="w-fit max-w-[88%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
            Agendado: Atendimento — Ana Souza — quinta, 03/12 às 14:00.
            <br />
            Local: Rua das Flores, 120
            <span className="mt-1 block text-xs text-[#027eb5] underline">Toque para salvar na sua agenda</span>
          </div>
          <div className="ml-auto w-fit max-w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 shadow-sm">
            o que eu tenho essa semana?
          </div>
          <div className="w-fit max-w-[88%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
            <p>Seus próximos serviços:</p>
            <p className="mt-1">• Qui 03/12, 14:00 — Atendimento, Ana Souza</p>
            <p>• Sex 04/12, 09:00 — Visita, Carlos Lima</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-7 text-left shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
        <p className="text-sm font-medium text-suave">Quinta-feira, 3 de dezembro</p>
        <div className="mt-5 space-y-3">
          <div className="flex gap-4 text-sm">
            <span className="w-12 shrink-0 pt-3 text-suave">13:00</span>
            <div className="flex-1 border-t border-linha" />
          </div>
          <div className="flex gap-4 text-sm">
            <span className="w-12 shrink-0 pt-3 text-suave">14:00</span>
            <div className="flex-1 rounded-lg border-l-4 border-carvao bg-fundo p-4">
              <p className="font-semibold">Atendimento — Ana Souza</p>
              <p className="mt-1 text-suave">14:00 – 15:00</p>
              <p className="mt-3 flex items-center gap-2 text-suave">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4 shrink-0 fill-current">
                  <path d="M10 1.5a6 6 0 0 0-6 6c0 4.2 5.2 10.3 5.4 10.6a.8.8 0 0 0 1.2 0C10.8 17.8 16 11.7 16 7.5a6 6 0 0 0-6-6m0 8.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4" />
                </svg>
                Rua das Flores, 120
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-suave">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4 shrink-0 fill-current">
                  <path d="M10 18.5a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2m6-5V9a6 6 0 0 0-4.5-5.8V2.5a1.5 1.5 0 0 0-3 0v.7A6 6 0 0 0 4 9v4.5L2.5 15v.5h15V15z" />
                </svg>
                Lembrete antes do serviço
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="w-12 shrink-0 pt-3 text-suave">15:00</span>
            <div className="flex-1 border-t border-linha" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-linha/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <Logo />
          <nav className="flex items-center gap-7 text-xs text-texto/75">
            <a href="#como-funciona" className="hidden hover:text-texto sm:inline">Como funciona</a>
            <a href="#agenda" className="hidden hover:text-texto sm:inline">Agenda</a>
            <a href="#precos" className="hidden hover:text-texto sm:inline">Preços</a>
            <a href="#duvidas" className="hidden hover:text-texto sm:inline">Dúvidas</a>
            <a href={linkWhatsApp()} target="_blank" rel="noopener" className="rounded-md bg-carvao px-3 py-1.5 font-medium text-white hover:bg-grafite">
              Começar
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="textura-parede px-6 pb-24 pt-20 text-center md:pb-32 md:pt-28">
          <p className="text-lg font-semibold text-suave">Para autônomos e pequenos negócios</p>
          <h1 className="mx-auto mt-3 max-w-5xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            A assistente do seu negócio.
            <br />
            <span className="text-suave">Direto no seu WhatsApp.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-suave md:text-xl">
            Mande um áudio e receba o orçamento em PDF pronto para o cliente. Diga quando é o serviço e ele vai para a
            sua agenda, com lembrete. Tudo pelo WhatsApp que você já usa.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <BotaoWhatsApp />
            <a href="#como-funciona" className="text-[15px] font-medium text-texto hover:underline">
              Como funciona ›
            </a>
          </div>
          <p className="mt-6 text-sm text-suave">
            {site.orcamentosGratis} orçamentos grátis por mês. Sem cartão. Sem instalar nada.
          </p>
          <div className="mt-20">
            <Conversa />
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="scroll-mt-14 bg-fundo px-6 py-24 md:py-32">
          <Titulo sobre="Como funciona">Fale. A Ofira resolve.</Titulo>
          <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
            {passos.map((passo, i) => (
              <div key={passo.titulo} className="rounded-2xl bg-white p-8">
                <p className="text-5xl font-semibold tracking-tight text-linha">{i + 1}</p>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{passo.titulo}</h3>
                <p className="mt-2 leading-relaxed text-suave">{passo.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Exemplo de PDF */}
        <section className="px-6 py-24 md:py-32">
          <Titulo sobre="O resultado">Um orçamento que passa confiança.</Titulo>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-suave">
            Cliente fecha mais com quem manda um orçamento organizado.
          </p>
          <a
            href="/orcamento-amostra.pdf"
            target="_blank"
            className="mx-auto mt-16 block max-w-md overflow-hidden rounded-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition duration-500 hover:scale-[1.02]"
          >
            <Image
              src="/orcamento-amostra.png"
              alt="Exemplo de orçamento em PDF gerado pelo WhatsApp"
              width={1000}
              height={1414}
              sizes="(min-width: 768px) 640px, 100vw"
              loading="eager"
              className="h-auto w-full"
            />
          </a>
          <ul className="mx-auto mt-16 grid max-w-4xl gap-x-10 gap-y-4 text-[15px] sm:grid-cols-2 md:grid-cols-3">
            {[
              "Nome e logo da sua empresa",
              "Número, data de emissão e validade",
              "Itens, quantidades e valores",
              "Total calculado automaticamente",
              "Condições de pagamento e garantia",
              "Pronto para encaminhar",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <BotaoWhatsApp texto="Fazer meu primeiro orçamento" />
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="scroll-mt-14 bg-fundo px-6 py-24 md:py-32">
          <Titulo sobre="Agenda">Sua agenda, sem digitar nada.</Titulo>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg leading-relaxed text-suave">
            Fale do jeito que você fala com qualquer pessoa. A Ofira entende o dia, a hora e o endereço, e o
            serviço vai para a agenda do seu celular, Google ou iPhone.
          </p>
          <ExemploAgenda />
          <ul className="mx-auto mt-16 grid max-w-4xl gap-x-10 gap-y-4 text-[15px] sm:grid-cols-2 md:grid-cols-3">
            {[
              "Dia, hora e endereço entendidos da mensagem",
              "Um toque e o serviço vai para o Google Agenda ou o iPhone, com lembrete",
              "Pergunte o que tem na semana ou desmarque com uma mensagem",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <a href={linkWhatsApp()} target="_blank" rel="noopener" className="text-[15px] font-medium text-texto hover:underline">
              Testar grátis no WhatsApp ›
            </a>
          </div>
        </section>

        {/* Recursos */}
        <section className="bg-carvao px-6 py-24 text-white md:py-32">
          <Titulo sobre="Recursos" claro>Feito para quem não tem tempo para planilha.</Titulo>
          <div className="mx-auto mt-20 grid max-w-5xl gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {recursos.map((r) => (
              <div key={r.titulo}>
                <h3 className="text-xl font-semibold tracking-tight">{r.titulo}</h3>
                <p className="mt-2 leading-relaxed text-white/55">{r.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preços */}
        <section id="precos" className="scroll-mt-14 bg-fundo px-6 py-24 md:py-32">
          <Titulo sobre="Preços">Comece grátis.</Titulo>
          <p className="mt-6 text-center text-lg text-suave">Assine só quando o volume de orçamentos pedir.</p>
          <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-white p-9">
              <h3 className="text-lg font-semibold">Grátis</h3>
              <p className="mt-3 text-5xl font-semibold tracking-tight">R$ 0</p>
              <p className="mt-2 text-sm text-suave">Para conhecer, sem cartão.</p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {[`${site.orcamentosGratis} orçamentos novos por mês`, "Correções ilimitadas", "Recibos e agendamentos", "Rodapé com a nossa marca"].map((i) => (
                  <li key={i} className="flex gap-2.5"><Check />{i}</li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <BotaoWhatsApp texto="Começar grátis" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col rounded-2xl bg-white p-9">
              <h3 className="text-lg font-semibold">Pro mensal</h3>
              <p className="mt-3 text-5xl font-semibold tracking-tight">
                {site.precoPro}
                <span className="ml-1 text-base font-normal tracking-normal text-suave">/mês</span>
              </p>
              <p className="mt-2 text-sm text-suave">Pix ou cartão. Sem fidelidade.</p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {["Orçamentos ilimitados", "Sem a nossa marca no PDF", "Recibos e agendamentos", "Renovação automática no cartão, se preferir"].map((i) => (
                  <li key={i} className="flex gap-2.5"><Check />{i}</li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <BotaoWhatsApp texto="Assinar o mensal" mensagem={site.mensagemAssinar} className="w-full" />
              </div>
            </div>
            <div className="flex flex-col rounded-2xl bg-carvao p-9 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Pro anual</h3>
                <span className="text-xs font-medium text-white/55">Economize {site.economiaAnual}</span>
              </div>
              <p className="mt-3 text-5xl font-semibold tracking-tight">
                {site.precoAnualMes}
                <span className="ml-1 text-base font-normal tracking-normal text-white/55">/mês</span>
              </p>
              <p className="mt-2 text-sm text-white/55">
                {site.precoAnualTotal} por 12 meses, no Pix ou em até 12x no cartão.
              </p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {["Tudo do Pro mensal", "Um pagamento só no ano", "O menor preço por mês"].map((i) => (
                  <li key={i} className="flex gap-2.5"><Check claro />{i}</li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <BotaoWhatsApp texto="Assinar o anual" mensagem={site.mensagemAnual} variante="claro" className="w-full" />
              </div>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-suave">
            O pagamento é pelo PagBank, direto no WhatsApp. No mensal, cada pagamento libera 30 dias, ou o cartão
            renova sozinho todo mês se você preferir. O anual libera 12 meses.
          </p>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="scroll-mt-14 px-6 py-24 md:py-32">
          <Titulo>Perguntas frequentes.</Titulo>
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-linha border-y border-linha">
            {perguntas.map(({ p, r }) => (
              <details key={p} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                  {p}
                  <span className="text-2xl font-light text-suave transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-suave">{r}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-linha/60 px-6 py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            A Ofira está a uma mensagem de distância.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-suave">
            Os primeiros {site.orcamentosGratis} orçamentos do mês são por nossa conta. Agendamentos não têm limite.
          </p>
          <BotaoWhatsApp className="mt-10" />
        </section>
      </main>

      <Rodape />
    </>
  );
}
