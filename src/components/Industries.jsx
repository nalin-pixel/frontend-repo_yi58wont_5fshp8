import Reveal from './Reveal'

const industries = [
  {
    name: 'Financial Services',
    desc: 'Identity-first security, data protection, and compliance for banks and fintech.',
  },
  {
    name: 'Manufacturing',
    desc: 'Global scale device management and secure collaboration across plants.',
  },
  {
    name: 'Public Sector',
    desc: 'Zero Trust alignment and sovereign cloud options for sensitive workloads.',
  },
  {
    name: 'Healthcare',
    desc: 'PHI protection, endpoint hardening, and secure telehealth experiences.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Industries we serve</h2>
          <p className="mt-3 text-lg text-slate-600">Deep Microsoft expertise tailored to your regulatory and operational realities.</p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 0.06}>
              <div className="h-full rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-slate-900">{i.name}</div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{i.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
