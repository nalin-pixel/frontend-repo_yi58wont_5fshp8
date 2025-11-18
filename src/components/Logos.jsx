const logos = [
  'Microsoft', 'Azure', 'M365', 'Entra', 'Intune', 'Defender'
]

export default function Logos() {
  return (
    <section className="py-10 lg:py-14 border-t border-b border-slate-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-slate-500 mb-6">Trusted by IT teams at</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="h-10 rounded-md bg-slate-50 text-slate-500 flex items-center justify-center border border-slate-200">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
