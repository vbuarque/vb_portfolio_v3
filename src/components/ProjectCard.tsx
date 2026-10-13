import type { Project } from '../data/projects'
import { ButtonLink } from './ButtonLink'
import { Reveal } from './Reveal'
import { Tag } from './Tag'

export function ProjectCard({ project: p, index = 0 }: { project: Project; index?: number }) {
  const follow = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <Reveal delay={(index % 2) * 100} className="h-full">
    <article onPointerMove={follow} className="spotlight flex h-full flex-col rounded-xl border border-line bg-panel p-5">
      {(p.team || p.docsOnly) && (
        <p className="mb-2 text-xs text-mute">
          {p.team}{p.team && p.docsOnly ? ', ' : ''}{p.docsOnly && 'repositório de documentação'}
        </p>
      )}
      <h4 className="font-display text-xl font-bold">{p.title}</h4>
      <p className="mt-2 flex-1 text-sm text-mute">{p.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias">
        {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.demo && <ButtonLink href={p.demo} variant="primary" external>Demonstração</ButtonLink>}
        <ButtonLink href={p.repo} external>{p.backendRepo ? 'Front-end' : 'Repositório'}</ButtonLink>
        {p.backendRepo && <ButtonLink href={p.backendRepo} external>Back-end</ButtonLink>}
      </div>
    </article>
    </Reveal>
  )
}
