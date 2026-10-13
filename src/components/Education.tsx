import { courses, education } from '../data/experience'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="formacao" title="Formação e cursos">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}><article>
              <h3 className="font-display text-lg font-bold">{e.title}</h3>
              <p className="text-mute">{e.place}</p>
              <p className="text-sm text-mute">{e.note}</p>
            </article></Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <h3 className="mb-3 font-display text-lg font-bold">Cursos complementares</h3>
          <ul className="list-disc space-y-2 pl-5 text-mute marker:text-accent">
            {courses.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
