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
      { href: '/frameworks/etcs', label: 'ETCS' },
      { href: '/frameworks/xik-ts', label: 'XIK-TS' },
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
      { href: '/writings/educ-830', label: 'EDUC 830: Curricular Gatekeeping' },
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
    <aside
      className="md:sticky md:top-0 md:h-screen md:w-64"
      style={{
        background: '#2a2d1a',
        borderRight: '1px solid #3a3e22',
        color: '#a8a880',
      }}
    >
      {/* Top */}
      <div
        className="flex items-center justify-between px-4 py-4 md:block"
        style={{ borderBottom: '1px solid #3a3e22' }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontWeight: 600,
              fontSize: '15px',
              color: '#e0ddc0',
              letterSpacing: '0.01em',
            }}
          >
            Doctoral Progress
          </div>
          <div style={{ fontSize: '11px', color: '#60622e', marginTop: '2px' }}>
            Private workspace
          </div>
        </div>

        <button
          className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm md:hidden"
          style={{
            background: '#3a3e22',
            border: '1px solid #4a4e2a',
            color: '#a8a880',
          }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="sidebar-nav"
        >
          Menu
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav id="sidebar-nav" className={cx('md:block', open ? 'block' : 'hidden')}>
        <div className="px-2 pb-4 space-y-1 mt-1">
          {navSections.map((section) => (
            <div key={section.title}>
              <div
                className="px-2 pt-3 pb-1"
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: '#60622e',
                }}
              >
                {section.title}
              </div>

              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active =
                    pathname === item.href || pathname?.startsWith(item.href + '/')

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className="block rounded-lg px-3 py-2 text-sm transition"
                        style={
                          active
                            ? {
                                background: '#3a3e22',
                                color: '#d8d8a0',
                                fontWeight: 500,
                                borderLeft: '3px solid #a0a832',
                                paddingLeft: '9px',
                              }
                            : {
                                color: '#a8a880',
                              }
                        }
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
      <div
        className="mt-auto hidden items-center justify-between px-4 py-3 md:flex"
        style={{ borderTop: '1px solid #3a3e22' }}
      >
        <SignedIn>
          <div className="flex items-center gap-2 text-sm" style={{ color: '#60622e' }}>
            <UserButton />
            <span>Account</span>
          </div>
        </SignedIn>
      </div>
    </aside>
  )
}
