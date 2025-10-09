# FYIT - Contador de Calorias com IA

![License](https://img.shields.io/badge/license-proprietary-red)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Build](https://img.shields.io/github/actions/workflow/status/revolutedigital/fyit/deploy.yml?branch=main)

**Plataforma de análise nutricional com inteligência artificial. Tire foto do prato e descubra as calorias em 10 segundos.**

🔗 **Live:** [https://fyit.com.br](https://fyit.com.br)

---

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Desenvolvimento](#desenvolvimento)
- [Build & Deploy](#build--deploy)
- [SEO](#seo)
- [Performance](#performance)
- [Segurança](#segurança)
- [Acessibilidade](#acessibilidade)
- [Licença](#licença)

---

## 🎯 Sobre

FYIT é uma plataforma SaaS B2B/B2C de contagem de calorias que utiliza IA para análise nutricional via foto. O site é composto por:

- **1 Landing Page Principal** (B2C)
- **8 Landing Pages B2B** (clínicas, nutricionistas, personal trainers, etc.)
- **2 Páginas de Objetivo** (emagrecer, ganhar massa)
- **Blog com 6 artigos** otimizados para SEO

---

## 🛠 Tecnologias

### Core
- **HTML5** - Semantic markup
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Vanilla JavaScript** - Zero dependencies, modular architecture

### Build & Deploy
- **Node.js 20+** - Build environment
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static hosting

### Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility
- **html-minifier-terser** - HTML optimization
- **Sharp** - Image optimization

---

## 📁 Estrutura do Projeto

```
fyit/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── src/
│   ├── input.css               # Tailwind source
│   ├── modal.js                # Modal management
│   ├── roi-calculator.js       # ROI calculator
│   ├── cookie-consent.js       # LGPD compliance
│   └── video-lazy-load.js      # Performance optimization
├── dist/
│   └── output.css              # Compiled CSS (generated)
├── blog/                       # Blog posts
├── *.html                      # Landing pages
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Crawling rules
├── _headers                    # Security headers
├── package.json                # Dependencies
└── tailwind.config.js          # Tailwind configuration
```

---

## 🚀 Instalação

### Pré-requisitos
- Node.js 20 ou superior
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/revolutedigital/fyit.git

# Entre no diretório
cd fyit

# Instale as dependências
npm install

# Inicie o ambiente de desenvolvimento
npm run dev
```

---

## 💻 Desenvolvimento

### Scripts Disponíveis

```bash
# Desenvolvimento (watch mode)
npm run dev

# Build completo de produção
npm run build

# Build apenas do CSS
npm run build:css

# Watch CSS mudanças
npm run watch:css

# Lint HTML
npm run test:html

# Lint JavaScript
npm run lint
```

### Estrutura de Componentes

O projeto usa JavaScript modular para facilitar manutenção:

- **modal.js** - Sistema de modais e captura de leads
- **roi-calculator.js** - Calculadoras de ROI nas páginas B2B
- **cookie-consent.js** - Banner de cookies LGPD compliant
- **video-lazy-load.js** - Lazy loading de vídeos

---

## 📦 Build & Deploy

### Build de Produção

```bash
npm run build
```

Isso irá:
1. ✅ Compilar e minificar Tailwind CSS (~10KB gzipped)
2. ✅ Otimizar HTML (remover espaços, comentários)
3. ✅ Otimizar imagens (WebP, AVIF)
4. ✅ Validar HTML

### Deploy Automático

O deploy é automatizado via GitHub Actions:

1. **Push para `main`** → Trigger pipeline
2. **Build** → npm run build
3. **Tests** → HTML validation, lint
4. **Deploy** → GitHub Pages
5. **Lighthouse** → Performance audit

---

## 🔍 SEO

### Implementado

- ✅ **Sitemap.xml** - 18 URLs indexáveis
- ✅ **Robots.txt** - Otimizado para Googlebot/Bingbot
- ✅ **Meta tags** - Title, description, keywords em todas as páginas
- ✅ **Canonical URLs** - Evita duplicate content
- ✅ **Schema.org markup** - Organization + WebApplication
- ✅ **Open Graph** - Otimizado para redes sociais
- ✅ **Alt text** - Todas as imagens

### Keywords Estratégicas

- **B2C:** contador de calorias, app fitness, dieta, emagrecimento
- **B2B:** software clínica, white label nutrição, plataforma médica

### Performance SEO

```
Sitemap: https://fyit.com.br/sitemap.xml
Google Search Console: Configurado
Bing Webmaster: Configurado
```

---

## ⚡ Performance

### Otimizações Implementadas

#### 1. CSS Otimizado
- ❌ **Antes:** Tailwind CDN (3.4MB)
- ✅ **Depois:** Compiled CSS (~10KB gzipped)
- 📈 **Impacto:** 99.7% redução

#### 2. Lazy Loading
- ✅ Vídeos carregam apenas quando visíveis
- ✅ IntersectionObserver API
- ✅ Poster images para preview

#### 3. Caching
- ✅ HTML: 5 minutos
- ✅ CSS/JS: 1 ano (cache-busting via hash)
- ✅ Images/Videos: 1 ano
- ✅ Fonts: 1 ano

#### 4. Assets
- ✅ Demo video: MOV (18MB) → MP4 (6.2MB)
- ✅ Fonts: Preconnect para Google Fonts
- ✅ Images: Alt text, lazy loading ready

### Lighthouse Score (Estimado)

```
Performance:  85+ (target: 90+)
Accessibility: 95+
Best Practices: 95+
SEO: 100
```

---

## 🔒 Segurança

### Headers Implementados

```
Content-Security-Policy
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security (HSTS)
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy
```

### LGPD Compliance

- ✅ Cookie consent banner
- ✅ Política de privacidade linkada
- ✅ Sem logging de PII
- ✅ Consent renovado a cada 12 meses
- ✅ Opção "apenas essenciais"

### Code Security

- ✅ Sem console.log de dados sensíveis
- ✅ Sanitização de inputs do formulário
- ✅ Sem API keys expostas
- ✅ HTTPS enforced

---

## ♿ Acessibilidade

### WCAG 2.1 Level AA

- ✅ Semantic HTML (header, nav, main, section, footer)
- ✅ Skip to content link
- ✅ Alt text em todas as imagens
- ✅ ARIA labels nos formulários
- ✅ Contraste de cores adequado
- ✅ Focus states visíveis
- ✅ Keyboard navigation
- ✅ Reduced motion support

### Screen Reader Support

- ✅ Landmarks apropriados
- ✅ Headings hierárquicos (h1→h6)
- ✅ Form labels associados
- ✅ Modal com role="dialog"

---

## 📊 Métricas

### Tráfego (Meta 2025)
- **Organic Search:** 10k visitas/mês
- **Conversão:** 3-5%
- **Leads B2B:** 50/mês
- **Leads B2C:** 150/mês

### Performance KPIs
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1

---

## 🤝 Contribuindo

Este é um projeto proprietário. Contribuições externas não são aceitas no momento.

---

## 📝 Changelog

### v1.0.0 (2025-10-09)
- ✨ Lançamento inicial do site
- ✨ 15 landing pages criadas
- ✨ Blog com 6 artigos
- ✨ SEO completo implementado
- ✨ Sistema de vídeos otimizado

---

## 📄 Licença

**Proprietary** - Todos os direitos reservados © 2025 FYIT

---

## 📞 Contato

- **Website:** [https://fyit.com.br](https://fyit.com.br)
- **Email:** contato@fyit.com.br
- **Suporte:** medico@fyit.com.br (B2B)

---

Made with ❤️ by FYIT Team
