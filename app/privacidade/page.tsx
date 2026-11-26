import type { Metadata } from "next";
import { PaginaTexto } from "@/components/PaginaTexto";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Política de privacidade — ${site.produto}` };

// Roteiro de docs/08-site-e-pagamento.md. Não é aconselhamento jurídico: revisar com advogado antes de escalar.
export default function Privacidade() {
  const { empresa } = site;
  return (
    <PaginaTexto titulo="Política de privacidade" atualizado="25/11/2026">
      <p>
        Esta política explica quais dados a {site.produto} coleta, para que usa e quais são os seus direitos, de
        acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
      </p>

      <h2>Quem é o responsável pelos dados</h2>
      <p>
        {empresa.razaoSocial}, CNPJ {empresa.cnpj}, com sede em {empresa.endereco}. Contato para assuntos de
        privacidade: {empresa.email}.
      </p>

      <h2>Quais dados coletamos</h2>
      <ul>
        <li>Seu número de telefone e o nome do seu perfil no WhatsApp.</li>
        <li>As mensagens, os áudios e as imagens que você envia para o serviço.</li>
        <li>Os dados dos orçamentos: itens, valores, observações e o nome do seu cliente, quando você informa.</li>
        <li>Os dados dos agendamentos: serviço, cliente, endereço, data e hora.</li>
        <li>Os pagamentos que você nos conta que recebeu: cliente, valor, data, forma de pagamento e a que se referem, para gerar os recibos e o resumo do que você recebeu.</li>
        <li>O nome da sua empresa, o logo e o seu e-mail, se você enviar, para aparecerem nos seus documentos.</li>
        <li>Dados da assinatura, quando você assina o plano pago.</li>
      </ul>

      <h2>Para que usamos</h2>
      <p>
        Para gerar seus orçamentos, recibos e agendamentos, operar e melhorar o serviço, controlar o plano contratado e
        falar com você sobre a sua conta. Não vendemos seus dados.
      </p>

      <h2>Com quem compartilhamos</h2>
      <p>Só com os fornecedores necessários para o serviço funcionar:</p>
      <ul>
        <li>Meta (WhatsApp), por onde as mensagens chegam e saem.</li>
        <li>Amazon Web Services (AWS), onde o sistema roda.</li>
        <li>Neon, onde fica o banco de dados.</li>
        <li>OpenRouter e o provedor do modelo de inteligência artificial, que processam as mensagens.</li>
        <li>O PagBank, que processa o pagamento quando você assina.</li>
      </ul>

      <h2>Áudios e imagens</h2>
      <p>
        Áudios e imagens são processados para montar o orçamento e não ficam guardados. Guardamos apenas a
        transcrição do áudio e o logo, se você enviar um.
      </p>

      <h2>Uso de inteligência artificial</h2>
      <p>
        As respostas e os orçamentos são gerados com a ajuda de inteligência artificial e podem conter erros.
        Confira sempre o orçamento antes de enviar ao seu cliente.
      </p>

      <h2>Por quanto tempo guardamos</h2>
      <p>Enquanto sua conta existir. Quando você pede a exclusão, apagamos seus dados.</p>

      <h2>Seus direitos</h2>
      <p>
        Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento, pelo e-mail{" "}
        {empresa.email} ou pedindo no próprio WhatsApp do serviço.
      </p>
    </PaginaTexto>
  );
}
