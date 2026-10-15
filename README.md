# GB Consultoria de Segurança do Trabalho

Site institucional da GB Consultoria (Tietê/SP). Aplicação estática em React + Vite + Tailwind, sem backend: o formulário de contato abre o WhatsApp com a mensagem já preenchida.

## Rodar localmente

Requer Node 20 (veja `.nvmrc`).

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # gera dist/
npm run preview    # serve a build local
```

## Onde mudar o que

| O que | Onde |
|---|---|
| Telefone, e-mail, Instagram, cidade | `src/lib/contact.js` |
| Os três serviços (nome, descrição, âncoras) | `src/lib/services.js` |
| Textos das páginas | `src/pages/*.jsx` |
| Logo e fotos | `public/logo.png`, `public/images/*.jpg` (mantenha os nomes) |
| Cores e fontes da marca | `tailwind.config.js` e `src/index.css` |

Os arquivos originais do logo e do banner ficam em `assets-originais/`, fora do que é publicado.

## Deploy na Hostinger

O deploy é automático via GitHub Actions:

1. Todo push na branch `main` roda `.github/workflows/deploy-hostinger.yml`.
2. O workflow compila o site e publica o conteúdo de `dist/` na branch `hostinger`.
3. No hPanel da Hostinger, em **Websites > Gerenciar > Avançado > Git**, conecte este repositório usando a branch `hostinger` e o diretório `public_html`. Ative o deploy automático (webhook) para que cada build seja puxada sozinha.

O arquivo `public/.htaccess` já faz o redirecionamento de rotas para `index.html`, necessário para o React Router funcionar no Apache da Hostinger.
