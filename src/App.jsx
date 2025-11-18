import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <CaseStudies />
      <CTA />
      <footer className="py-12 bg-white border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-400" />
              <span className="font-semibold">Itergy</span>
            </div>
            <div className="text-sm text-slate-500">© {new Date().getFullYear()} Itergy. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
