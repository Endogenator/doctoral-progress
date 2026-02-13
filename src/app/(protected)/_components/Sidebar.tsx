'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { useState } from 'react'

type Item = { href: string; label: string }
type Section = { title: string; items: Item[] }

const navSections: Section[] = [
  {
    title: 'Core',
    items: [{ href: '/dashboard', label: 'Dashboard' }],
  },
  {
    title: 'Frameworks',
    items: [
      { href: '/frameworks/endt', label: 'ENDT' },
      { href: '/frameworks/xik-td', label: 'XIK-TD' },
      { href: '/frameworks/belief-space', label: 'Belief Space' },
      { href: '/frameworks/integration', label: 'Integration' },
      { href: '/references', label: 'References' },
    ],
  },
  {
    title: 'Writings',
    items: [
      { href: '/writings/educ-827', label: 'EDUC 827: Leadership as Alignment Verification' },
      { href: '/writings/educ-829', label: 'EDUC 829: The Belief in Schooling (1890–1958)' },
    ],
  },
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
          <div className="text-sm text-stone-700">Private workspace</div>
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
        <div className="px-2 pb-3 space-y-3">
          {navSections.map((section) => (
            <div key={section.title}>
              <div className="px-2 pt-2 pb-1 text-xs font-semibold tracking-wide text-stone-700 uppercase">
                {section.title}
              </div>

              <ul className="space-y-1">
                {section.items.map((item) => {
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
                            : 'hover:bg-stone-300 text-stone-900'
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {/* Account */}
      <div className="mt-auto hidden items-center justify-between px-4 py-3 md:flex border-t border-stone-300">
        <SignedIn>
          <div className="flex items-center gap-2 text-sm text-stone-800">
            <UserButton />
            <span>Account</span>
          </div>
        </SignedIn>
      </div>
    </aside>
  )
}
