import type { ReactNode } from 'react'

type Props = { href: string; children: ReactNode; variant?: 'primary' | 'ghost'; external?: boolean; download?: boolean }

const styles = {
  primary: 'bg-accent text-ink hover:bg-fog',
  ghost: 'border border-line text-fog hover:border-accent hover:text-accent',
}

export function ButtonLink({ href, children, variant = 'ghost', external, download }: Props) {
  return (
    <a
      href={href}
      download={download || undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none ${styles[variant]}`}
    >
      {children}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  )
}
