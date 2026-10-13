import { contacts, profile } from '../data/profile'
import { ButtonLink } from './ButtonLink'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="mb-6 max-w-[60ch] text-lg text-mute">Quer conversar sobre uma vaga, um projeto ou uma dúvida? Pode me chamar por qualquer um destes canais.</p>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {contacts.map((c, i) => (
          <li key={c.label}>
            <Reveal delay={i * 80}>
            <a
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="block rounded-xl border border-line bg-panel p-4 transition-colors hover:border-accent"
            >
              <span className="block font-display text-lg font-bold">{c.label}</span>
              <span className="break-words text-mute">{c.value}</span>
              {c.external && <span className="sr-only"> (abre em nova aba)</span>}
            </a>
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink href={profile.resume} variant="primary" download>Baixar currículo (PDF)</ButtonLink>
      </div>
    </Section>
  )
}
