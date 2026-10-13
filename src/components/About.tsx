import { about } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="max-w-[68ch] space-y-5 text-lg text-mute">
        {about.map((p, i) => <Reveal key={p} delay={i * 90}><p>{p}</p></Reveal>)}
      </div>
    </Section>
  )
}
