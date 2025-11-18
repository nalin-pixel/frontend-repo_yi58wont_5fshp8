import Reveal from './Reveal'

const cases = [
  {
    company: 'Global Manufacturer',
    result: 'Reduced risk across 40k endpoints',
    detail: 'Zero Trust rollout with Defender, Intune and Entra ID. 30% incident reduction in 90 days.'
  },
  {
    company: 'Financial Services',
    result: 'SOC 2 Type II in 6 months',
    detail: 'Identity hardening, data loss prevention, and governance with Azure landing zones.'
  },
  {
    company: 'Public Sector',
    result: 'Cloud-first collaboration',
    detail: 'M365 migration, secure device management, and Teams adoption for 12k employees.'
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--brand-dark)]">Proven outcomes</h2>
            <p className="mt-3 text-lg text-slate-600">Real results from enterprises that modernized with us.</p>
          </Reveal>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <Reveal key={c.company} delay={idx * 0.06}>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs uppercase tracking-wide text-slate-500">{c.company}</div>
                <div className="mt-3 text-xl font-semibold text-slate-900">{c.result}</div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
