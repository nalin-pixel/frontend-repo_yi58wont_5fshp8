import { Shield, Cloud, Users, Box, Lock, Settings } from 'lucide-react'
import Reveal from './Reveal'
import AnimatedGradientBorder from './AnimatedGradientBorder'

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
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--brand-dark)]">What we do</h2>
            <p className="mt-3 text-lg text-slate-600">End-to-end Microsoft expertise across cloud, security, and the modern workplace.</p>
          </Reveal>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <Reveal key={title} delay={idx * 0.06}>
              <AnimatedGradientBorder>
                <div className="relative overflow-hidden rounded-xl">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white bg-[var(--brand-primary)]"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </AnimatedGradientBorder>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
