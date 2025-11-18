import Reveal from './Reveal'

const insights = [
  { title: 'Zero Trust in 90 Days: A pragmatic path', tag: 'Guide' },
  { title: 'Landing zones that scale with governance', tag: 'Playbook' },
  { title: 'Copilot readiness for regulated industries', tag: 'Brief' },
]

export default function Insights() {
  return (
    <section id="insights" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Insights</h2>
          <p className="mt-3 text-lg text-slate-600">Perspectives to de-risk change and accelerate value.</p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {insights.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 0.06}>
              <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-sky-600" /> {i.tag}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">{i.title}</h3>
                <button className="mt-4 text-sm font-medium text-sky-700 hover:text-sky-800">Read more →</button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
