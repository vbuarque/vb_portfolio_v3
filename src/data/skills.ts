export type SkillGroup = { title: string; items: string[]; primary?: boolean }

export const skillGroups: SkillGroup[] = [
  { title: 'Front-end', primary: true, items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass/SCSS', 'Vite'] },
  { title: 'Mobile', items: ['React Native'] },
  { title: 'Back-end e linguagens', items: ['Node.js', 'Java', 'Python', 'C#', '.NET'] },
  { title: 'APIs e dados', items: ['APIs REST', 'SQL', 'Bancos relacionais', 'NoSQL (MongoDB, via Mongoose)'] },
  { title: 'Ferramentas', items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Deploy', 'Figma', 'VS Code'] },
  { title: 'Práticas', items: ['Componentização', 'Interfaces responsivas', 'UI/UX', 'Clean Code', 'Testes de software', 'Scrum'] },
]
