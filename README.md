# Ofira — site

Site institucional da Ofira (ofira.app.br), em Next.js.

```bash
npm install
cp .env.example .env.local   # preencher o número do WhatsApp
npm run dev                  # http://localhost:3000
```

Variáveis (todas públicas, `NEXT_PUBLIC_*`): nome do produto, número do WhatsApp e URL do site — ver `.env.example`.
Textos, preços e dados da empresa ficam em `lib/site.ts`.
