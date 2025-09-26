const testimonials = [
  {
    name: 'Aarav Sharma',
    quote: 'The speaking mentorship boosted my confidence. Scored an overall band 7.5! ',
    score: '7.5 Band',
    avatar: 'https://api.dicebear.com/9.x/thumbs/svg?seed=aarav',
  },
  {
    name: 'Priya Singh',
    quote: 'Mock tests felt exactly like the real exam. I went from 6.0 to 7.0 in 6 weeks.',
    score: '7.0 Band',
    avatar: 'https://api.dicebear.com/9.x/thumbs/svg?seed=priya',
  },
  {
    name: 'Rahul Verma',
    quote: 'AI feedback showed exactly where I was losing marks. Super helpful.',
    score: '7.5 Band',
    avatar: 'https://api.dicebear.com/9.x/thumbs/svg?seed=rahul',
  },
]

import SectionHeading from './SectionHeading.jsx'

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Student Testimonials" subtitle="Real stories from learners who achieved their goals." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" width="48" height="48" loading="lazy" />
                <figcaption>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-indigo-600">{t.score}</div>
                </figcaption>
              </div>
              <div className="mt-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2l2.78 5.64 6.22.9-4.5 4.38 1.06 6.18L12 16.9l-5.56 2.92 1.06-6.18-4.5-4.38 6.22-.9L12 2z"/></svg>
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-6 text-slate-700">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
