import type { Metadata } from "next";
import { PaginaTexto } from "@/components/PaginaTexto";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Termos de uso — ${site.produto}` };

// Não é aconselhamento jurídico: revisar com advogado antes de escalar o anúncio.
export default function Termos() {
  const { empresa } = site;
  return (
    <PaginaTexto titulo="Termos de uso" atualizado="25/11/2026">
      <p>
        Ao usar a {site.produto} você concorda com estes termos. O serviço é oferecido por {empresa.razaoSocial},
        CNPJ {empresa.cnpj}.
      </p>

      <h2>O que o serviço faz</h2>
      <p>
        A {site.produto} gera orçamentos em PDF e links de agendamento a partir das mensagens que você envia pelo
        WhatsApp. O serviço não envia nada ao seu cliente: é você quem decide se e quando encaminhar o orçamento.
      </p>

      <h2>Inteligência artificial e responsabilidade</h2>
      <p>
        As respostas são geradas com a ajuda de inteligência artificial e podem conter erros de interpretação.
        Você é responsável por conferir itens, quantidades e valores antes de enviar o orçamento a qualquer pessoa.
      </p>

      <h2>Planos</h2>
      <ul>
        <li>
          <strong>Grátis:</strong> {site.orcamentosGratis} orçamentos novos por mês. Correções do último orçamento
          não contam no limite.
        </li>
        <li>
          <strong>Pro mensal:</strong> {site.precoPro} a cada 30 dias, com orçamentos ilimitados e sem a nossa marca no
          PDF.
        </li>
        <li>
          <strong>Pro anual:</strong> {site.precoAnualTotal} por 12 meses (equivalente a {site.precoAnualMes} por mês),
          com os mesmos benefícios do Pro mensal. Pago de uma vez no Pix ou parcelado no cartão em até 12 vezes; as
          condições do parcelamento são as mostradas pelo PagBank no pagamento.
        </li>
      </ul>

      <h2>Pagamento e cancelamento</h2>
      <p>
        Os pagamentos são processados pelo PagBank. O Pro mensal pode ser pago de duas formas:
      </p>
      <ul>
        <li>
          <strong>Pré-pago, por Pix ou cartão:</strong> cada pagamento libera 30 dias. Não há cobrança automática. Se
          você não pagar um novo período, a conta volta para o plano grátis ao fim dos 30 dias.
        </li>
        <li>
          <strong>Assinatura no cartão:</strong> o valor é cobrado automaticamente no seu cartão a cada mês, até você
          cancelar. Para cancelar, mande &quot;cancelar assinatura&quot; no WhatsApp do serviço: não haverá novas
          cobranças e o Pro continua ativo até o fim do período já pago. Se a cobrança no cartão falhar, a conta
          volta para o plano grátis ao fim do período pago.
        </li>
      </ul>
      <p>
        O Pro anual é pago uma vez, libera 12 meses e não renova sozinho. Não há fidelidade em nenhum plano.
      </p>
      <p>
        <strong>Arrependimento:</strong> você pode desistir de qualquer pagamento em até 7 dias depois de feito e
        recebe o valor de volta integralmente, como prevê o Código de Defesa do Consumidor. Depois desse prazo,
        períodos já iniciados não são reembolsados, salvo nos casos previstos em lei. Para pedir, escreva no WhatsApp
        do serviço ou para {empresa.email}.
      </p>

      <h2>Uso permitido</h2>
      <p>
        Não use o serviço para atividades ilegais, para enviar conteúdo de terceiros sem autorização ou para tentar
        acessar dados de outros usuários. Podemos suspender contas que violem estes termos.
      </p>

      <h2>Disponibilidade</h2>
      <p>
        Trabalhamos para manter o serviço sempre no ar, mas ele depende de fornecedores externos, como o WhatsApp, e
        pode ficar indisponível em alguns momentos.
      </p>

      <h2>Contato</h2>
      <p>Dúvidas sobre estes termos: {empresa.email}.</p>
    </PaginaTexto>
  );
}
