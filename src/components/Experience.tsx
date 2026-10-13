import { job } from '../data/experience'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experiencia" title="Experiência profissional">
      <Reveal className="max-w-3xl"><article>
        <h3 className="font-display text-xl font-bold">{job.role}, {job.company}</h3>
        <p className="text-mute">{job.client}. {job.period}.</p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-mute marker:text-accent">
          {job.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </article></Reveal>
    </Section>
  )
}
