export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12 border-t border-slate-200 pt-4 text-xs text-slate-600 dark:text-slate-400">
      <p>
        © {year} Brian Davis. All rights reserved.
      </p>
      <p className="mt-1">
        Private work in progress for research and mentoring. Do not copy, share, or distribute without written permission.
      </p>
    </footer>
  )
}
