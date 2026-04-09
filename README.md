# Manuel Teixeira Gomes — Repositório Digital

Website estático dedicado a Manuel Teixeira Gomes, escritor e Presidente da República Portuguesa.

---

## Estrutura do Projeto

```
mtg-website/
├── index.html              ← Página inicial (Entrada)
├── css/
│   └── style.css           ← Estilos principais
├── js/
│   └── main.js             ← JavaScript (lightbox, formulário, nav)
├── images/                 ← Imagens do site
│   ├── mtg_foto1_jovem.jpeg
│   ├── mtg_foto2_retrato_pintado.jpeg
│   ├── mtg_foto3_formal.jpeg
│   ├── mtg_foto4_perfil.png
│   ├── casa_mtg_exterior.png
│   ├── casa_mtg_logo.png
│   ├── mtg_livros_colecao.png
│   ├── mtg_retrato_principal.png
│   └── ...
└── pages/                  ← Subpáginas
    ├── livros.html
    ├── artigos.html
    ├── teatro.html
    ├── estudos-biograficos.html
    ├── bibliografia-especifica.html
    ├── fotografias.html
    ├── retratos-e-desenhos.html
    ├── jornais.html
    ├── ficcoes.html
    ├── fundacao-mario-soares.html
    ├── biblioteca-nacional.html
    ├── quadros.html
    ├── pecas-decorativas.html
    ├── livros-colecao.html
    ├── rtp-arquivos.html
    ├── icia.html
    ├── casa-mtg-videos.html
    ├── museu-de-portimao.html
    ├── outros-videos.html
    ├── podcasts.html
    ├── casa-mtg.html
    └── contacto.html
```

---

## Como Publicar Gratuitamente

### Opção 1: GitHub Pages (Recomendado)

O GitHub Pages permite alojar websites estáticos gratuitamente com domínio próprio.

#### Passo 1 — Criar conta no GitHub
1. Aceda a [github.com](https://github.com) e crie uma conta gratuita (se ainda não tiver).

#### Passo 2 — Criar um repositório
1. Clique em **"New repository"** (botão verde no canto superior direito).
2. Dê um nome ao repositório, por exemplo: `manuelteixeiragomes` ou `repositorio-mtg`.
3. Selecione **"Public"** (obrigatório para GitHub Pages gratuito).
4. Clique em **"Create repository"**.

#### Passo 3 — Fazer upload dos ficheiros
**Opção A — Via interface web (mais simples):**
1. No repositório criado, clique em **"uploading an existing file"**.
2. Arraste todos os ficheiros e pastas do site para a área de upload.
3. Clique em **"Commit changes"**.

**Opção B — Via Git (linha de comandos):**
```bash
git init
git add .
git commit -m "Publicação inicial do site"
git branch -M main
git remote add origin https://github.com/SEU_UTILIZADOR/NOME_REPOSITORIO.git
git push -u origin main
```

#### Passo 4 — Ativar GitHub Pages
1. No repositório, clique em **"Settings"** (engrenagem).
2. No menu lateral, clique em **"Pages"**.
3. Em **"Source"**, selecione **"Deploy from a branch"**.
4. Em **"Branch"**, selecione **"main"** e pasta **"/ (root)"**.
5. Clique em **"Save"**.
6. Aguarde 1-2 minutos. O site ficará disponível em:
   `https://SEU_UTILIZADOR.github.io/NOME_REPOSITORIO/`

#### Passo 5 — Adicionar domínio próprio
1. Registe o seu domínio num registador (ex: GoDaddy, Namecheap, PTNIC para `.pt`).
2. No painel do registador, crie os seguintes registos DNS:
   - **Tipo A** → `185.199.108.153`
   - **Tipo A** → `185.199.109.153`
   - **Tipo A** → `185.199.110.153`
   - **Tipo A** → `185.199.111.153`
   - **Tipo CNAME** → `www` → `SEU_UTILIZADOR.github.io`
3. No GitHub Pages (Settings → Pages), em **"Custom domain"**, introduza o seu domínio (ex: `www.meudominio.pt`).
4. Ative **"Enforce HTTPS"** para segurança.
5. Aguarde até 24h para propagação DNS.

---

### Opção 2: Cloudflare Pages

O Cloudflare Pages é outra excelente opção gratuita com domínio próprio.

#### Passo 1 — Criar conta
1. Aceda a [pages.cloudflare.com](https://pages.cloudflare.com) e crie uma conta gratuita.

#### Passo 2 — Criar projeto
1. Clique em **"Create a project"**.
2. Selecione **"Direct Upload"** (upload direto, sem necessidade de Git).
3. Dê um nome ao projeto.
4. Faça upload da pasta `mtg-website` completa.
5. Clique em **"Deploy site"**.

#### Passo 3 — Adicionar domínio próprio
1. No painel do projeto, clique em **"Custom domains"**.
2. Clique em **"Set up a custom domain"**.
3. Introduza o seu domínio e siga as instruções para configurar o DNS.

---

## Registar um Domínio `.pt`

Para registar um domínio `.pt`, aceda à [FCCN/DNS.pt](https://www.dns.pt) ou a um registador acreditado como:
- [GoDaddy](https://www.godaddy.com/pt-pt)
- [Namecheap](https://www.namecheap.com)
- [OVH](https://www.ovhcloud.com/pt)

O custo anual de um domínio `.pt` é tipicamente entre **5€ e 15€/ano**.

---

## Notas Técnicas

- O site é totalmente estático (HTML + CSS + JS) — não requer servidor, base de dados ou linguagem de servidor.
- Compatível com todos os browsers modernos.
- Design responsivo (funciona em telemóvel, tablet e computador).
- O formulário de contacto é apenas visual (não envia e-mails sem um serviço externo como Formspree).

### Ativar o formulário de contacto (opcional)
Para que o formulário envie e-mails reais, registe-se gratuitamente em [Formspree](https://formspree.io) e substitua a linha:
```html
<form id="contact-form" action="#" method="post">
```
por:
```html
<form id="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
```

---

© 2020 por Carlos Osório — Repositório Digital Manuel Teixeira Gomes
