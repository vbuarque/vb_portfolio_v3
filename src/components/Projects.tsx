import { groups, inProgress, projects, type Group } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'

const order: Group[] = ['fullstack', 'web', 'fatec']

export function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <div className="space-y-14">
        {order.map((g) => (
          <div key={g}>
            <Reveal>
              <h3 className="font-display text-2xl font-bold">{groups[g].title}</h3>
              <p className="mb-5 mt-1 max-w-[70ch] text-mute">{groups[g].intro}</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {projects.filter((p) => p.group === g).map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
            </div>
          </div>
        ))}

        <div>
          <h3 className="mb-5 font-display text-2xl font-bold">Em andamento</h3>
          <Reveal><article className="rounded-xl border-2 border-dashed border-warm/60 p-5">
            <p className="mb-2 inline-block rounded-md bg-warm/15 px-2 py-0.5 text-xs font-semibold text-warm">Em desenvolvimento</p>
            <h4 className="font-display text-xl font-bold">{inProgress.title}</h4>
            <p className="mt-2 max-w-[70ch] text-sm text-mute">{inProgress.summary}</p>
          </article></Reveal>
        </div>
      </div>
    </Section>
  )
}
