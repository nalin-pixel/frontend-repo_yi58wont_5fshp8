import { Shield, Cloud, Users, Box, Lock, Settings } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Zero Trust, identity, and endpoint security engineered for regulated environments.',
  },
  {
    icon: Cloud,
    title: 'Cloud Platform & Landing Zones',
    desc: 'Azure architecture, governance, and automation built for scale and reliability.',
  },
  {
    icon: Users,
    title: 'Modern Workplace',
    desc: 'Microsoft 365, device management, and collaboration simplified for global teams.',
  },
  {
    icon: Lock,
    title: 'Managed Services',
    desc: 'Proactive monitoring and optimization to keep your Microsoft stack resilient.',
  },
  {
    icon: Settings,
    title: 'Advisory & Assessments',
    desc: 'Actionable roadmaps aligned to your risk, compliance, and transformation goals.',
  },
  {
    icon: Box,
    title: 'Migrations & Integrations',
    desc: 'Seamless tenant moves, mergers, and system integrations with minimal downtime.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-lg text-slate-600">End-to-end Microsoft expertise across cloud, security, and the modern workplace.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
