import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = { id: string; title: string; children: ReactNode }

export function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">
      <Reveal>
        <h2 id={`${id}-title`} className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}
