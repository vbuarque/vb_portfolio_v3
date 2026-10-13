export type Group = 'fullstack' | 'web' | 'fatec'

export type Project = {
  title: string
  summary: string
  group: Group
  tags: string[]
  repo: string
  backendRepo?: string
  demo?: string
  team?: string // preenchido nos projetos em equipe
  docsOnly?: boolean
}

export const groups: Record<Group, { title: string; intro: string }> = {
  fullstack: { title: 'Aplicações com front-end e back-end', intro: 'Projetos em que a interface conversa com uma API própria.' },
  web: { title: 'Projetos web e estudos', intro: 'Interfaces publicadas, a maioria com demonstração no ar.' },
  fatec: { title: 'Projetos integradores da FATEC', intro: 'Trabalhos em equipe para empresas, feitos durante o curso. As descrições refletem o que está nos repositórios, sem atribuir o trabalho do grupo só a mim.' },
}

export const projects: Project[] = [
  {
    title: 'Miau Café (aplicativo)',
    summary: 'Cardápio de uma cafeteria no celular, feito para a disciplina de Programação para Dispositivos Móveis. O back-end fica em um repositório separado.',
    group: 'fullstack',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Node.js', 'Express', 'Mongoose'],
    repo: 'https://github.com/vbuarque/fatec-app-cafe',
    backendRepo: 'https://github.com/vbuarque/fatec-app-cafe-back',
  },
  {
    title: 'E-Condos Secret Christmas',
    summary: 'Plataforma de amigo secreto online: cadastro, edição e exclusão de participantes, sorteio e envio de e-mail com o amigo sorteado.',
    group: 'fullstack',
    tags: ['React', 'TypeScript', 'Vite', 'Sass', 'Axios', 'EmailJS', 'Node.js', 'Express', 'Mongoose'],
    repo: 'https://github.com/vbuarque/e-condos-secret-cristimas',
    backendRepo: 'https://github.com/vbuarque/e-condos-back-end',
  },
  {
    title: 'RocketHelp (Ignite Lab)',
    summary: 'Projeto de estudo do Ignite Lab da Rocketseat, em React Native com Expo e Firebase (autenticação e Firestore).',
    group: 'fullstack',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'NativeBase'],
    repo: 'https://github.com/vbuarque/ignitelab-rockethelp',
  },
  {
    title: 'DevLinks',
    summary: 'Agregador de links que funciona como cartão de visitas online, feito no programa DevLinks da Rocketseat.',
    group: 'web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    repo: 'https://github.com/vbuarque/Rocketseat-DevLinks',
    demo: 'https://vbuarque.github.io/Rocketseat-DevLinks/',
  },
  {
    title: 'Travelgram',
    summary: 'Layout do perfil de uma rede social de fotos de viagem, desenvolvido em aula na formação Full-Stack da Rocketseat.',
    group: 'web',
    tags: ['HTML', 'CSS'],
    repo: 'https://github.com/vbuarque/RS-Travelgram-HTML',
    demo: 'https://vbuarque.github.io/RS-Travelgram-HTML/',
  },
  {
    title: 'Tech News',
    summary: 'Homepage de um portal de notícias sobre tecnologia, desenvolvida na formação Full-Stack da Rocketseat.',
    group: 'web',
    tags: ['HTML', 'CSS'],
    repo: 'https://github.com/vbuarque/RS-Portal-de-noticias-HTML',
    demo: 'https://vbuarque.github.io/RS-Portal-de-noticias-HTML/',
  },
  {
    title: 'Página de receita: Cupcake',
    summary: 'Página de receita estática, feita na formação Full-Stack da Rocketseat para praticar HTML, CSS e organização de conteúdo.',
    group: 'web',
    tags: ['HTML', 'CSS'],
    repo: 'https://github.com/vbuarque/RS-Pagina-Receita-HTML',
    demo: 'https://vbuarque.github.io/RS-Pagina-Receita-HTML/',
  },
  {
    title: 'VB Portfolio (versão anterior)',
    summary: 'Versão anterior do meu portfólio pessoal. Este site é a versão atual.',
    group: 'web',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    repo: 'https://github.com/vbuarque/vb-portfolio',
    demo: 'https://vb-portfolio.vercel.app',
  },
  {
    title: 'Plataforma de análise estatística (Vanguarda)',
    summary: 'Plataforma para jornalistas da Rede Vanguarda consultarem dados de eleitores de diferentes regiões. Projeto do 1º semestre.',
    group: 'fatec',
    team: 'Projeto em equipe, FATEC',
    tags: ['Jupyter Notebook'],
    repo: 'https://github.com/grupo-3dsm/repo_pi',
  },
  {
    title: 'Sirius (Visiona)',
    summary: 'Portal web com mapa para consultar, manipular e baixar imagens públicas de satélite, entregue em 4 sprints com Scrum. Projeto do 2º semestre.',
    group: 'fatec',
    team: 'Projeto em equipe, FATEC',
    tags: ['React', 'TypeScript', 'Leaflet', 'Python'],
    repo: 'https://github.com/grupo-3dsm/Sirius-repoP.I',
  },
  {
    title: 'GoodTicket (IACIT)',
    summary: 'Help desk web para suporte técnico, voltado a identificar causas de falhas que geram retrabalho. Projeto do 3º semestre.',
    group: 'fatec',
    team: 'Projeto em equipe, FATEC',
    tags: ['TypeScript', 'Node.js', 'Express', 'Swagger'],
    repo: 'https://github.com/Grupo2-DSM/Api-3dsm-2022',
  },
  {
    title: 'Convecção (Tecsus)',
    summary: 'Documentação do Convecção, plataforma de disseminação de dados meteorológicos criada a partir de redes de sensores IoT. Projeto do 4º semestre.',
    group: 'fatec',
    team: 'Projeto em equipe, FATEC',
    docsOnly: true,
    tags: ['Documentação', 'Scrum'],
    repo: 'https://github.com/Conveccao/conveccao-documentacao',
  },
  {
    title: 'ProManage (Oracle)',
    summary: 'Documentação do ProManage, software de organização de gestão desenvolvido para a Oracle Academy. Projeto do 5º semestre.',
    group: 'fatec',
    team: 'Projeto em equipe, FATEC',
    docsOnly: true,
    tags: ['Documentação', 'Scrum'],
    repo: 'https://github.com/ProManage-FatecSJC/pro-manager-documentation',
  },
  {
    title: 'ForDevs (Oracle)',
    summary: 'Documentação do ForDevs, sistema que classifica temas a partir de comentários de clientes usando processamento de linguagem natural. Projeto do 5º semestre.',
    group: 'fatec',
    team: 'Projeto em equipe, FATEC',
    docsOnly: true,
    tags: ['Documentação', 'Scrum'],
    repo: 'https://github.com/ForDevs-Fatec/Documentation',
  },
]

export const inProgress = {
  title: 'Pokédexia',
  summary: 'Projeto de programação relacionado a uma Pokédex, ainda em desenvolvimento. Repositório e demonstração serão adicionados quando existirem.',
}
