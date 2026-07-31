# Joás Souza — Landing Page

Site de apresentação profissional (landing page) do **Joás Souza** — Engenheiro de Software, DBA Sênior e Analista de Sistemas, baseado no perfil do [LinkedIn](https://www.linkedin.com/in/joassouza).

Tema escuro e moderno, **bilíngue (PT/EN)**, sem dependências externas além das fontes do Google — pronto para hospedar no **GitHub Pages** e publicar no domínio **joassouza.com.br**.

## Estrutura

```
├── index.html          # Página principal
├── css/style.css       # Estilos (tema escuro, responsivo)
├── js/main.js          # Toggle PT/EN, menu mobile, animações
├── assets/
│   ├── favicon.svg     # Ícone da aba
│   ├── foto.svg        # Placeholder (usado se foto.jpg não existir)
│   └── foto.jpg        # (Opcional) Sua foto de perfil
├── CNAME               # Domínio customizado p/ GitHub Pages
└── README.md
```

## Como usar localmente

Basta abrir o `index.html` no navegador. Se quiser um servidor local:

```
python -m http.server 8080
```

ou, no VS Code, usar a extensão *Live Server*.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `landpage_joassouza`).
2. Suba todos os arquivos da pasta:
   ```bash
   git init
   git add .
   git commit -m "Site de apresentação — Joás Souza"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/landpage_joassouza.git
   git push -u origin main
   ```
3. Em **Settings → Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / pasta `/ (root)`
   - Salvar. Em instantes o site fica em `https://SEU_USUARIO.github.io/landpage_joassouza/`.

## Apontando o domínio joassouza.com.br

1. **No GitHub**: o arquivo `CNAME` já contém `joassouza.com.br`. Em **Settings → Pages → Custom domain**, confirme `joassouza.com.br` e salve (aguarde o DNS verificar).
2. **No seu provedor de DNS** (registrador/hospedagem do domínio), crie o registro:
   - Tipo: `A` — host: `@` — apontando para os IPs do GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - (Opcional, para `www`): `CNAME` — host: `www` — destino: `SEU_USUARIO.github.io.`
3. Em **Settings → Pages**, marque **Enforce HTTPS** (após o DNS propagar).

> Obs.: se quiser usar apenas o subdomínio `www.joassouza.com.br`, o CNAME e o DNS devem apontar para `www` — nesse caso, ajuste o conteúdo do arquivo `CNAME`.

## Personalizando

- **Foto de perfil**: coloque sua imagem em `assets/foto.jpg` (quadrada/vertical, ~680×760). Enquanto não houver, o placeholder `assets/foto.svg` é exibido automaticamente.
- **Textos PT/EN**: edite o dicionário em `js/main.js`.
- **E-mail / WhatsApp / LinkedIn**: os links estão no `index.html` e no `js/main.js` (não há textos duplicados a manter — o e-mail/telefone aparecem nos cards de contato e rodapé).
- **Cores**: variáveis no topo de `css/style.css` (`--accent`, `--accent-2`, etc.).

## Tecnologias

HTML5, CSS3 e JavaScript puro — sem build, sem framework, carregamento rápido.
