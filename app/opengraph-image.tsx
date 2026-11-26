import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Prévia que aparece quando o link do site é compartilhado no WhatsApp e em redes sociais
export const alt = `${site.produto} — ${site.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mesma fonte do PDF (Inter, licença OFL em assets/fonts)
const interRegular = await readFile(join(process.cwd(), "assets/fonts/Inter-Regular.ttf"));
const interBold = await readFile(join(process.cwd(), "assets/fonts/Inter-Bold.ttf"));
// Fonte da marca, só no logo (Unbounded, licença OFL em assets/fonts)
const unbounded = await readFile(join(process.cwd(), "assets/fonts/Unbounded-SemiBold.ttf"));

function Cartao({ cor, rotulo, titulo, linha }: { cor: string; rotulo: string; titulo: string; linha: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        background: "white",
        borderRadius: 18,
        padding: "22px 26px",
        boxShadow: "0 20px 50px -20px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 64,
          borderRadius: 10,
          background: cor,
          color: "white",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        {rotulo}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#1d1d1f" }}>{titulo}</div>
        <div style={{ fontSize: 22, color: "#6e6e73", marginTop: 4 }}>{linha}</div>
      </div>
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#efefed",
          padding: "0 80px",
          fontFamily: "Inter",
          letterSpacing: "-0.02em",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 620 }}>
          <div style={{ fontFamily: "Unbounded", fontSize: 30, fontWeight: 600, letterSpacing: "0.14em", color: "#1d1d1f" }}>
            OFIRA
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, color: "#1d1d1f", lineHeight: 1.05, marginTop: 40 }}>
            {`${site.slogan}.`}
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#6e6e73", lineHeight: 1.15, marginTop: 18 }}>
            Direto no seu WhatsApp.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 400 }}>
          <Cartao cor="#e2574c" rotulo="PDF" titulo="Orçamento nº 27" linha="Ana Souza · R$ 520,00" />
          <Cartao cor="#1d1d1f" rotulo="26" titulo="Quinta, 14:00" linha="Atendimento · Ana Souza" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
        { name: "Unbounded", data: unbounded, style: "normal", weight: 600 },
      ],
    },
  );
}
