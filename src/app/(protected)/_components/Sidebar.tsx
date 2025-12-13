'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { useState } from 'react'

type Item = { href: string; label: string }

const navItems: Item[] = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/frameworks/endt', label: 'ENDT' },
  { href: '/frameworks/xik-td', label: 'XIK-TD' },
  { href: '/frameworks/belief-space', label: 'Belief Space' },
  { href: '/frameworks/integration', label: 'Integration' },
  { href: '/references', label: 'References' },
]

function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <aside className="md:sticky md:top-0 md:h-screen md:w-64 border-r border-stone-300 bg-stone-200 text-stone-900">
      {/* Top */}
      <div className="flex items-center justify-between px-4 py-3 md:block">
        <div>
          <div className="font-semibold text-stone-900">Doctoral Progress</div>
          <div className="text-sm text-stone-600">Private workspace</div>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-stone-100 px-3 py-1.5 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="sidebar-nav"
        >
          Menu
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav id="sidebar-nav" className={cx('md:block', open ? 'block' : 'hidden')}>
        <ul className="px-2 pb-2 space-y-1">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cx(
                    'block rounded-lg px-3 py-2 text-sm transition',
                    active
                      ? 'bg-emerald-200 text-emerald-900 font-medium'
                      : 'hover:bg-stone-300 text-stone-800'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Account */}
      <div className="mt-auto hidden items-center justify-between px-4 py-3 md:flex border-t border-stone-300">
        <SignedIn>
          <div className="flex items-center gap-2 text-sm text-stone-700">
            <UserButton />
            <span>Account</span>
          </div>
        </SignedIn>
      </div>
    </aside>
  )
}
