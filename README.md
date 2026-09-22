# Foco em IA

Portal de inteligência artificial em português brasileiro — [focoemia.com.br](https://focoemia.com.br)

Conteúdo prático sobre ChatGPT, Gemini, Claude, criação de imagens e vídeos, IA para negócios e ferramentas de produtividade.

---

## Stack

- **Framework**: [Next.js 15](https://nextjs.org/) com App Router
- **Linguagem**: TypeScript (strict)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/) com CSS-first config
- **Fonte**: [Geist](https://vercel.com/font) (Sans + Mono)
- **Conteúdo**: MDX com `next-mdx-remote/rsc`
- **Deploy**: [Vercel](https://vercel.com/)
- **Package manager**: pnpm

---

## Início rápido

### Pré-requisitos

- Node.js 20+
- pnpm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/foco-em-ia.git
cd foco-em-ia

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com seus valores

# Rode o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
pnpm build
pnpm start
```

---

## Estrutura do projeto

```
foco-em-ia/
├── content/
│   └── articles/          # Artigos em MDX
├── src/
│   ├── app/               # Rotas (App Router)
│   │   ├── page.tsx       # Home
│   │   ├── artigos/       # Listagem e detalhe de artigos
│   │   ├── categoria/     # Páginas de categoria
│   │   ├── buscar/        # Busca
│   │   ├── sobre/         # Sobre
│   │   ├── contato/       # Contato
│   │   ├── autor/         # Página de autor
│   │   ├── feed.xml/      # RSS feed
│   │   ├── og/            # OG image dinâmico (edge)
│   │   ├── sitemap.ts     # Sitemap automático
│   │   └── robots.ts      # Robots.txt
│   ├── components/        # Componentes React
│   │   ├── ads/           # AdSense
│   │   ├── article/       # Componentes de artigo
│   │   ├── home/          # Seções da home
│   │   ├── layout/        # Header, Footer
│   │   ├── search/        # Busca
│   │   └── ui/            # UI genérica (ThemeToggle, etc.)
│   ├── lib/               # Utilitários e lógica
│   │   ├── articles.ts    # Leitura e parsing de MDX
│   │   ├── site-config.ts # Configuração central do site
│   │   └── utils.ts       # Helpers (cn, formatDate, etc.)
│   ├── styles/
│   │   └── globals.css    # Tailwind + CSS custom properties
│   └── types/
│       └── article.ts     # Tipos TypeScript
├── .env.example
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL de produção do site | Sim |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID do Google Analytics 4 (G-XXXXXXXX) | Não |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Publisher ID do AdSense (ca-pub-XXXX) | Não |
| `NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_TOP` | Slot do banner topo de artigo | Não |
| `NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT` | Slot do banner in-content | Não |
| `NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR` | Slot do banner sidebar | Não |

As variáveis de AdSense e GA são opcionais — sem elas, o site funciona normalmente sem anúncios ou analytics.

---

## Gerenciamento de conteúdo

### Criando um artigo

Os artigos ficam em `content/articles/` como arquivos `.mdx`.

**Frontmatter obrigatório:**

```yaml
---
title: "Título do artigo"
description: "Descrição para SEO (150-160 caracteres)"
slug: "url-do-artigo"
category: "ChatGPT"  # Uma das 8 categorias
tags: ["tag1", "tag2"]
publishedAt: "2025-01-01"
author: "Equipe Foco em IA"
featured: false
popular: false
keywords: ["palavra-chave-1", "palavra-chave-2"]
---
```

**Frontmatter opcional:**

```yaml
faq:
  - question: "Pergunta frequente?"
    answer: "Resposta completa."
sources:
  - name: "Nome da fonte"
    url: "https://exemplo.com"
```

### Categorias disponíveis

| Categoria | Slug |
|-----------|------|
| ChatGPT | `chatgpt` |
| Gemini | `gemini` |
| Claude | `claude` |
| Guias | `guias` |
| Imagens | `imagens` |
| Vídeos | `videos` |
| IA para Negócios | `ia-para-negocios` |
| Ferramentas | `ferramentas` |

### Destaque e popularidade

- `featured: true` — aparece na seção "Destaques" da home
- `popular: true` — aparece na seção "Mais lidos" da home

---

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home |
| `/artigos` | Todos os artigos |
| `/artigos/[slug]` | Artigo individual (SSG) |
| `/categoria/[slug]` | Artigos por categoria (SSG) |
| `/buscar` | Busca (SSR, client-side) |
| `/sobre` | Sobre o portal |
| `/contato` | Contato |
| `/autor/equipe-foco-em-ia` | Página de autor |
| `/politica-de-privacidade` | Política de privacidade |
| `/termos-de-uso` | Termos de uso |
| `/politica-editorial` | Política editorial |
| `/feed.xml` | RSS feed (force-static) |
| `/og` | OG image dinâmico (edge runtime) |
| `/sitemap.xml` | Sitemap automático |
| `/robots.txt` | Robots.txt |

---

## Deploy na Vercel

### Via CLI

```bash
npx vercel
```

### Via GitHub (recomendado)

1. Faça push para o GitHub
2. Importe o projeto em [vercel.com/new](https://vercel.com/new)
3. Configure as variáveis de ambiente no painel da Vercel
4. A Vercel detecta automaticamente Next.js — apenas clique em Deploy

### Configurações recomendadas na Vercel

- **Framework Preset**: Next.js (detectado automaticamente)
- **Build Command**: `pnpm build` (ou `next build`)
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

---

## SEO

O site implementa:

- **Metadados completos**: title, description, keywords, Open Graph, Twitter Cards
- **JSON-LD**: Article, BreadcrumbList, FAQPage, WebSite, CollectionPage
- **Sitemap XML**: gerado automaticamente com prioridades
- **Robots.txt**: configurado para indexação otimizada
- **OG images dinâmicas**: geradas por edge function em `/og`
- **Canônicas**: via `metadataBase` do Next.js

---

## Performance

- **Static Generation**: todas as páginas de artigo e categoria são pré-renderizadas
- **Server Components**: por padrão; `use client` apenas onde necessário
- **Fontes**: Geist via variável CSS, sem FOIT
- **Imagens**: sem imagens externas na build — hero visuals via emoji/CSS
- **CSS**: Tailwind CSS 4 com tree-shaking automático

---

## Dark Mode

Implementado via CSS custom properties e atributo `data-theme` no elemento `<html>`:

- **Sistema**: respeita `prefers-color-scheme` por padrão
- **Toggle**: botão no header persiste preferência no `localStorage`
- **Hidratação**: script inline no `<head>` evita flash of unstyled content (FOUC)

---

## AdSense

Para ativar anúncios:

1. Crie uma conta no [Google AdSense](https://adsense.google.com/)
2. Configure o Publisher ID (`ca-pub-XXXX`) em `NEXT_PUBLIC_ADSENSE_CLIENT`
3. Crie os slots de anúncio e configure os IDs correspondentes
4. O `AdSenseScript` é carregado automaticamente quando a variável está definida

Os componentes `AdSlot` são renderizados como placeholders invisíveis enquanto o AdSense não está configurado.

---

## Google Analytics

Para ativar o GA4:

1. Crie uma propriedade no [Google Analytics](https://analytics.google.com/)
2. Configure o Measurement ID (`G-XXXXXXXX`) em `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. O script GA4 é carregado automaticamente via `layout.tsx`

---

## Desenvolvimento

```bash
# Servidor de desenvolvimento
pnpm dev

# Type checking
pnpm tsc --noEmit

# Linting
pnpm lint

# Build de produção
pnpm build
```

---

## Licença

Todos os direitos reservados — Foco em IA © 2025
# foco-em-ia
