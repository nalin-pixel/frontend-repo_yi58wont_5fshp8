import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Services' },
  { label: 'Industries' },
  { label: 'Case Studies' },
  { label: 'Partners' },
  { label: 'Insights' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-400 shadow-sm" />
            <div className="font-semibold text-slate-900 tracking-tight text-lg">Itergy</div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.label.toLowerCase().replace(/\s/g, '-'))}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button className="ml-4 inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors">
              Contact <ChevronDown className="h-4 w-4 opacity-80" />
            </button>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-slate-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200/60">
          <div className="px-4 py-3 space-y-1 bg-white">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.label.toLowerCase().replace(/\s/g, '-'))}
                className="block w-full text-left px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </button>
            ))}
            <button className="mt-2 w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800">
              Contact <ChevronDown className="h-4 w-4 opacity-80" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
