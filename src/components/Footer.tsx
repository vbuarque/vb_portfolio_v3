import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-mute">
      © 2026 {profile.name}. {profile.location}.
    </footer>
  )
}
