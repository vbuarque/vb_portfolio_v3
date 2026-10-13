import { profile } from '../data/profile'
import { ButtonLink } from './ButtonLink'

const links = [
  ['Sobre', '#sobre'],
  ['Tecnologias', '#tecnologias'],
  ['Experiência', '#experiencia'],
  ['Projetos', '#projetos'],
  ['Formação', '#formacao'],
  ['Contato', '#contato'],
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#topo" className="font-display text-lg font-bold">VB</a>
        <nav aria-label="Principal" className="hidden gap-6 text-sm text-mute md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-fog">{label}</a>
          ))}
        </nav>
        <ButtonLink href={profile.resume} download>Baixar currículo</ButtonLink>
      </div>
    </header>
  )
}
