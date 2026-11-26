// Dados do site num lugar só. Os marcados com PREENCHER precisam ser trocados antes de publicar:
// a verificação da Meta confere razão social, CNPJ, endereço, telefone e e-mail com o cartão CNPJ.

export const site = {
  produto: process.env.NEXT_PUBLIC_PRODUCT_NAME ?? "Ofira",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ofira.app.br", // endereço público, usado na prévia do link
  slogan: "A assistente do seu negócio",
  descricao:
    "Mande um áudio e receba o orçamento em PDF pronto para o cliente. Diga quando é o serviço e ele vai para a sua agenda, com lembrete.",
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? "", // só dígitos, com DDI: 5531999998888
  precoPro: "R$ 28,90", // mesmo valor de PRO_PRICE_CENTS no backend (cobrado a cada 30 dias)
  precoAnualMes: "R$ 19,90", // PRO_ANNUAL_PRICE_CENTS / 12
  precoAnualTotal: "R$ 238,80", // mesmo valor de PRO_ANNUAL_PRICE_CENTS no backend
  economiaAnual: "31%", // 1 - 238,80 / (12 x 28,90)
  orcamentosGratis: 3,
  // O bot reconhece estas frases e responde sem IA, com os links do PagBank (worker.py, FRASES_*)
  mensagemAssinar: "Quero assinar o Pro",
  mensagemAnual: "Quero o plano anual",

  // O produto é da TechMind. Razão social, endereço e e-mail precisam ficar idênticos ao cartão CNPJ.
  empresa: {
    nome: "TechMind",
    razaoSocial: "DIEGO SANDER MOTTA MARTINES & CIA LTDA", // igual ao cadastro do CNPJ
    cnpj: "68.449.419/0001-69",
    endereco: "Rua Pais Leme, 215, Conjunto 1713 E 1 VG, Pinheiros, São Paulo - SP, CEP 05424-150",
    email: "contato@ofira.app.br",
  },
};

export function linkWhatsApp(texto = "Oi! Quero testar a Ofira") {
  if (!site.whatsapp) return "#";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;
}
