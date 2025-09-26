export default function Hero() {
  return (
    <section className="scroll-mt-24 relative isolate overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">IELTS Institute</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              Achieve Your Target IELTS Band
            </span>
          </h1>
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
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 text-sm">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-xl font-bold text-slate-900">1,200+</div>
              <div className="text-slate-600">Students trained</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <div className="text-xl font-bold text-slate-900">10k+</div>
              <div className="text-slate-600">Practice hours</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm sm:col-span-1 col-span-2">
              <div className="text-xl font-bold text-slate-900">+1.2</div>
              <div className="text-slate-600">Avg. band improvement</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-indigo-200/40 blur-3xl"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                alt="Students preparing for IELTS"
                width="1600"
                height="1200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
