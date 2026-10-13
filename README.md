# Portfólio | Vinicius Buarque

Meu portfólio profissional como **Desenvolvedor Front-end**, com interesse em Full Stack. Reúne minha trajetória, tecnologias, experiência e os projetos que desenvolvi, pessoais e acadêmicos.

<!-- Depois de publicar, adicione aqui o link do site no ar:
🔗 **Demonstração:** https://seu-link-aqui -->

## Seções

- **Hero:** apresentação e resumo do perfil
- **Sobre mim:** minha trajetória e posicionamento
- **Tecnologias:** organizadas por grupo, com foco no Front-end
- **Experiência profissional:** suporte de TI na SONDA, atendendo a Embraer
- **Projetos:** 14 projetos concluídos, divididos em aplicações com front-end e back-end, projetos web e projetos integradores da FATEC, mais um projeto em andamento
- **Formação e cursos**
- **Contato** e botão para baixar o currículo em PDF

## Tecnologias

| Área | Ferramentas |
| --- | --- |
| Interface | React 19, TypeScript |
| Estilo | Tailwind CSS v4 |
| Build | Vite |
| Fontes | Bricolage Grotesque, IBM Plex Sans e IBM Plex Mono (Google Fonts) |

## Destaques técnicos

- **Componentização:** uma seção por componente, com peças reutilizáveis (`Section`, `ButtonLink`, `Tag`, `Reveal`).
- **Conteúdo separado do código:** textos, projetos, skills e links ficam em `src/data/`.
- **Responsivo:** testado do celular ao desktop, sem rolagem horizontal.
- **Animações leves:** entrada do Hero, revelação ao rolar (`IntersectionObserver`), brilho que segue o mouse nos cards e barra de progresso de leitura. Usam apenas `transform` e `opacity`.
- **Acessibilidade:** HTML semântico, link para pular ao conteúdo, foco visível, links externos identificados para leitores de tela e suporte a `prefers-reduced-motion`.
- **SEO:** título, descrição e metadados Open Graph no `index.html`.

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# clonar o repositório
git clone https://github.com/vbuarque/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO

# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev

# gerar a versão de produção (pasta dist)
npm run build

# visualizar a versão de produção localmente
npm run preview
```

## Como editar o conteúdo

Você não precisa mexer nos componentes para atualizar o portfólio. Tudo fica em `src/data/`:

| Arquivo | O que controla |
| --- | --- |
| `profile.ts` | nome, título, texto de apresentação, "Sobre mim", contatos e caminho do currículo |
| `skills.ts` | grupos de tecnologias |
| `experience.ts` | experiência profissional, formação e cursos |
| `projects.ts` | lista de projetos, links e projeto em andamento |

Para **adicionar um projeto**, inclua um novo objeto na lista `projects` em `src/data/projects.ts`. Os campos `title`, `summary`, `group`, `tags` e `repo` são obrigatórios. Use `demo` e `backendRepo` quando existirem.

Para **trocar o currículo**, substitua o arquivo `public/curriculo-vinicius-buarque.pdf` mantendo o mesmo nome (ou ajuste o caminho em `profile.ts`).

## Estrutura

```
├── public/
│   └── curriculo-vinicius-buarque.pdf
├── src/
│   ├── components/     # About, Contact, Education, Experience, Footer, Header,
│   │                   # Hero, Projects, ProjectCard, Skills e componentes de apoio
│   ├── data/           # conteúdo do portfólio (perfil, skills, experiência, projetos)
│   ├── App.tsx
│   ├── index.css       # tema do Tailwind e animações
│   └── main.tsx
├── index.html
└── vite.config.ts
```

## Deploy

O projeto gera arquivos estáticos em `dist/` e pode ser publicado em qualquer hospedagem estática, como Vercel, Netlify ou GitHub Pages. Na Vercel, basta importar o repositório: o Vite é detectado automaticamente, com `npm run build` como comando de build e `dist` como pasta de saída.

## Contato

- GitHub: [github.com/vbuarque](https://github.com/vbuarque)
- LinkedIn: [linkedin.com/in/vbgusmao](https://linkedin.com/in/vbgusmao)
- E-mail: [viniciusbuarque17@gmail.com](mailto:viniciusbuarque17@gmail.com)
- WhatsApp: [(12) 98222-9518](https://wa.me/5512982229518)
