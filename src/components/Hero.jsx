import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white/80 to-white/20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-16 pb-12 lg:pt-24 lg:pb-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Trusted Microsoft Partner
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Secure, Modern Workplace for Enterprise IT
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We design, secure, and manage Microsoft cloud environments for regulated and global organizations.
              Bring clarity to complexity with a partner obsessed with reliability and outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium shadow-sm hover:bg-slate-800">
                Talk to an expert
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 font-medium ring-1 ring-inset ring-slate-200 hover:bg-slate-50">
                Explore services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-500">
              <div className="text-sm">ISO 27001</div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="text-sm">SOC 2</div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="text-sm">Canada | US | EU</div>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl border border-slate-200 bg-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)]" />
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
