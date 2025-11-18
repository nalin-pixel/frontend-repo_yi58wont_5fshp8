import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'radial-gradient(1200px 600px at 80% 10%, var(--brand-light), transparent), radial-gradient(800px 400px at 10% 30%, #F0F9FF, transparent)'
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-16 pb-12 lg:pt-24 lg:pb-20">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="h-2 w-2 rounded-full bg-[var(--brand-primary)] animate-pulse" />
              Trusted Microsoft Partner
            </motion.div>
            <motion.h1
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--brand-dark)]"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Secure, Modern Workplace for Enterprise IT
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-slate-600 leading-relaxed"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We design, secure, and manage Microsoft cloud environments for regulated and global organizations.
              Bring clarity to complexity with a partner obsessed with reliability and outcomes.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-white font-medium shadow-sm bg-[var(--brand-primary)] hover:bg-sky-700">
                Talk to an expert
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-[var(--brand-dark)] font-medium ring-1 ring-inset ring-slate-200 hover:bg-slate-50">
                Explore services
              </a>
            </motion.div>
            <motion.div
              className="mt-8 flex items-center gap-6 text-slate-500"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-sm">ISO 27001</div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="text-sm">SOC 2</div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="text-sm">Canada | US | EU</div>
            </motion.div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl border border-slate-200 bg-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)]" />
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <motion.div
              className="pointer-events-none absolute -inset-6 rounded-[28px]"
              style={{ background: 'linear-gradient(90deg, rgba(0,94,184,.15), rgba(0,173,239,.15))' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
