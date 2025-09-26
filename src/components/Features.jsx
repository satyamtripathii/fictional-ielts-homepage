const features = [
  {
    title: 'Speaking Practice',
    desc: 'Daily 1:1 sessions with certified trainers and instant feedback.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M8.25 3v1.5H6.75A2.25 2.25 0 0 0 4.5 6.75v3a2.25 2.25 0 0 0 2.25 2.25h1.5V13.5H6a3.75 3.75 0 0 1-3.75-3.75v-3A3.75 3.75 0 0 1 6 3h2.25Z"/>
        <path d="M15.75 3v1.5H18a3.75 3.75 0 0 1 3.75 3.75v3A3.75 3.75 0 0 1 18 15h-2.25v1.5H18A5.25 5.25 0 0 0 23.25 11.25v-3A5.25 5.25 0 0 0 18 3h-2.25Z"/>
        <path d="M8.25 9.75h7.5v4.5a3.75 3.75 0 1 1-7.5 0v-4.5Z"/>
      </svg>
    ),
  },
  {
    title: 'Mock Tests',
    desc: 'Weekly full-length tests simulating the latest exam pattern.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M4.5 3.75A.75.75 0 0 1 5.25 3h13.5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.22.57L12 16.56l-6.28 5.01A.75.75 0 0 1 4.5 21V3.75Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'AI Band Score',
    desc: 'Real-time band predictions and actionable insights for improvement.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Batches',
    desc: 'Morning, evening, and weekend options available for all learners.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v6.439l4.5-4.5a.75.75 0 1 1 1.06 1.061l-6 6a.75.75 0 0 1-1.06 0l-6-6A.75.75 0 0 1 6.75 4.94l4.5 4.5V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
      </svg>
    ),
  },
]

import SectionHeading from './SectionHeading.jsx'

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Programs & Features" subtitle="Designed for faster progress and real-world exam readiness." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-gradient-to-br from-slate-100 to-indigo-100 p-[1px]">
              <div className="group h-full rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600/90 text-white ring-4 ring-indigo-100">
                  <span aria-hidden="true" className="block h-6 w-6">{f.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                <div className="mt-4 text-sm font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">Learn more →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
