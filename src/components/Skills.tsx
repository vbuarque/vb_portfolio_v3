import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { Tag } from './Tag'

export function Skills() {
  const [main, ...others] = skillGroups
  return (
    <Section id="tecnologias" title="Tecnologias">
      <Reveal className="rounded-xl border border-accent/40 bg-panel p-6">
        <h3 className="font-display text-xl font-bold text-accent">{main.title}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {main.items.map((item, i) => (
            <li key={item} className="chip rounded-lg bg-accent/15 px-3 py-1.5 text-base font-medium" style={{ '--i': i } as React.CSSProperties}>{item}</li>
          ))}
        </ul>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 90}>
            <h3 className="mb-3 font-display text-lg font-bold">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">{g.items.map((item) => <Tag key={item}>{item}</Tag>)}</ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
