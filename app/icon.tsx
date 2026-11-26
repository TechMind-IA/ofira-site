import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Ícone da aba: "O" da marca (Unbounded) em cinza-carvão
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const unbounded = await readFile(join(process.cwd(), "assets/fonts/Unbounded-SemiBold.ttf"));

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1d1d1f",
          borderRadius: 14,
          color: "white",
          fontFamily: "Unbounded",
          fontSize: 38,
          fontWeight: 600,
        }}
      >
        O
      </div>
    ),
    { ...size, fonts: [{ name: "Unbounded", data: unbounded, style: "normal", weight: 600 }] },
  );
}
