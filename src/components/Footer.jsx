export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-slate-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-indigo-600 text-white font-semibold">I</span>
              <span className="text-base font-bold tracking-tight text-slate-900">Fictional IELTS</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Professional IELTS coaching with proven results.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#features">Programs</a></li>
              <li><a className="hover:text-slate-900" href="#testimonials">Reviews</a></li>
              <li><a className="hover:text-slate-900" href="#home">Home</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Email: info@ieltspro.example</li>
              <li>Phone: +91-98765-43210</li>
              <li>Address: Sector 18, Chandigarh</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Hours</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Mon–Fri: 7:00–21:00</li>
              <li>Sat–Sun: 9:00–18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Fictional IELTS. All rights reserved.</div>
      </div>
    </footer>
  )
}
