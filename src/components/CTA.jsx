export default function CTA() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to modernize your Microsoft cloud?</h2>
            <p className="mt-3 text-lg text-slate-300">Let’s talk about your roadmap. We’ll review your environment and outline a pragmatic plan.</p>
          </div>
          <form className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              <input required type="email" placeholder="Work email" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              <input placeholder="Company" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:col-span-2" />
              <textarea rows="4" placeholder="What challenge can we help with?" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-300/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:col-span-2" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 font-medium shadow-sm hover:bg-slate-100">Request consultation</button>
          </form>
        </div>
      </div>
    </section>
  )
}
