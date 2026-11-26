import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fonte da marca: só no logo OFIRA
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.produto} — ${site.slogan}`,
  description: site.descricao,
  openGraph: {
    title: `${site.produto} — ${site.slogan}`,
    description: site.descricao,
    siteName: site.produto,
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${unbounded.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
