import Reveal from './Reveal'

const partners = [
  { name: 'Microsoft Solutions Partner', note: 'Azure, Modern Work, Security' },
  { name: 'Copilot for Microsoft 365', note: 'Adoption & Enablement' },
  { name: 'FastTrack Ready', note: 'Accelerated deployments' },
]

export default function Partners() {
  return (
    <section id="partners" className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Partners & designations</h2>
          <p className="mt-3 text-lg text-slate-600">Recognized by Microsoft for proven outcomes across cloud, security, and modern work.</p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {partners.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.08}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold text-slate-900">{p.name}</div>
                <p className="mt-1 text-sm text-slate-600">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
