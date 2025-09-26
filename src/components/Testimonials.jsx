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

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Student Testimonials</h2>
          <p className="mt-3 text-slate-600">Real stories from learners who achieved their goals.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full" loading="lazy" />
                <figcaption>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-indigo-600">{t.score}</div>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-sm leading-6 text-slate-700">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
