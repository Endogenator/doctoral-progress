'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type Item = { href: string; label: string }

const items: Item[] = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/frameworks/endt', label: 'ENDT' },
  { href: '/frameworks/xik-td', label: 'XIK-TD' },
  { href: '/frameworks/integration', label: 'Integration' },
  { href: '/frameworks/belief-space', label: 'Belief Space' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const LinkItem = ({ href, label }: Item) => {
    const active =
      pathname === href ||
      // treat route prefixes as active (e.g., /frameworks/endt/notes)
      (href !== '/dashboard' && pathname?.startsWith(href))

    return (
      <Link
        href={href}
        className={[
          'block rounded-md px-3 py-2 text-sm transition',
          active
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-700 hover:bg-neutral-100',
        ].join(' ')}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    )
  }

  return (
    <aside className="border-r bg-white">
      {/* Mobile toggle */}
      <div className="p-3 border-b md:hidden">
        <button
          type="button"
          className="w-full rounded-md border px-3 py-2 text-sm hover:bg-neutral-50"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="sidebar-links"
        >
          {open ? 'Close menu' : 'Open menu'}
        </button>
      </div>

      {/* Links */}
      <nav
        id="sidebar-links"
        className={[
          'md:block',
          open ? 'block' : 'hidden',
          'p-3 space-y-1 w-[240px]',
        ].join(' ')}
      >
        <div className="text-xs uppercase tracking-wide text-neutral-500 px-3 pb-1">
          Research
        </div>
        {items.map((it) => (
          <LinkItem key={it.href} {...it} />
        ))}
      </nav>
    </aside>
  )
}
