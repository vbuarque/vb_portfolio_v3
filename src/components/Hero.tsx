import { profile } from '../data/profile'
import { ButtonLink } from './ButtonLink'

// Linhas do cartão: só dados confirmados no perfil
const lines: [string, string][] = [
  ['foco', '"Front-end"'],
  ['stack', '["React", "TypeScript", "Tailwind CSS"]'],
  ['formacao', '"FATEC, Desenvolvimento de Software Multiplataforma"'],
  ['local', '"São José dos Campos, SP"'],
  ['interesse', '"Full Stack"'],
]

export function Hero() {
  const endDelay = 250 + lines.length * 140

  return (
    <section id="topo" aria-labelledby="hero-title" className="relative isolate mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-5 pb-12 pt-20 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
      </div>

      <div className="min-w-0">
        <h1 id="hero-title" className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          {profile.name.split(' ').map((word, i) => (
            <span key={word}>
              <span className="mask"><span className="rise" style={{ animationDelay: `${i * 120}ms` }}>{word}</span></span>{' '}
            </span>
          ))}
        </h1>
        <p className="enter mt-4 text-xl font-medium text-accent" style={{ animationDelay: '400ms' }}>{profile.role}</p>
        <p className="enter text-mute" style={{ animationDelay: '480ms' }}>{profile.stackLine}</p>
        <p className="enter mt-6 max-w-[60ch] text-lg text-mute" style={{ animationDelay: '560ms' }}>{profile.intro}</p>
        <div className="enter mt-8 flex flex-wrap gap-3" style={{ animationDelay: '680ms' }}>
          <ButtonLink href="#projetos" variant="primary">Ver projetos</ButtonLink>
          <ButtonLink href="#contato">Entrar em contato</ButtonLink>
        </div>
      </div>

      <figure aria-label="Resumo do perfil em formato de código" className="min-w-0 rounded-xl border border-line bg-panel p-4 font-mono text-xs sm:p-5 sm:text-sm">
        <figcaption className="mb-3 text-xs text-mute">perfil.ts</figcaption>
        <pre className="whitespace-pre-wrap break-words leading-7">
          <code>
            <span className="line-in text-mute" style={{ animationDelay: '100ms' }}>
              {'const '}<span className="text-accent">vinicius</span>{': Desenvolvedor = {'}
            </span>
            {'\n'}
            {lines.map(([key, value], i) => (
              <span key={key}>
                <span className="line-in" style={{ animationDelay: `${250 + i * 140}ms` }}>
                  {'  '}<span className="text-fog">{key}</span>{': '}<span className="text-warm">{value}</span>{','}
                </span>
                {'\n'}
              </span>
            ))}
            <span className="line-in text-mute" style={{ animationDelay: `${endDelay}ms` }}>{'}'}<span className="caret" aria-hidden="true" /></span>
          </code>
        </pre>
      </figure>
    </section>
  )
}
