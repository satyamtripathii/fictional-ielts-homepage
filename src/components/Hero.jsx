export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">IELTS Institute</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Achieve Your Target IELTS Band</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Personalized coaching, AI-powered feedback, and mock tests designed to help you score higher—faster.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Book Free Demo</a>
            <a href="#features" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Explore Programs</a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <li>• 1:1 Speaking Practice</li>
            <li>• Weekly Mock Tests</li>
            <li>• AI Band Score Insights</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-indigo-200/40 blur-3xl"></div>
          <img
            className="relative w-full rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
            alt="Students preparing for IELTS"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
