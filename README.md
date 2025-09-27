# Fictional IELTS Institute — Home Page (React + Tailwind)

A modern, responsive landing page for a fictional IELTS coaching institute. Built with React (Vite) and Tailwind CSS (v4), focusing on clean UI, responsiveness, and component-driven code.

## Repo

- GitHub: https://github.com/your-username/fictional-ielts-homepage (replace after pushing)

## Getting Started

Prerequisites:
- Node.js 18+ recommended

Install and run:

```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Design & Implementation Choices

- React + Vite: fast dev, minimal boilerplate, great DX.
- Tailwind CSS v4: utility-first styling with zero-config. `@import "tailwindcss";` is added in `src/index.css`.
- Sections (as required):
  - Navbar (logo + links + CTA, mobile menu)
  - Hero (headline, subtext, buttons, banner image)
  - 4 Feature cards (Speaking Practice, Mock Tests, AI Band Score, Flexible Batches)
  - Student testimonials (3 small reviews)
  - Footer (links + contact info)
- Responsiveness: mobile-first layout, flexible grid, fluid spacing and typography.
- Accessibility: semantic structure, focusable CTAs, good color contrast.

## Project Structure

```
C:/Users/satya/OneDrive/Desktop/FictionalILTES/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Features.jsx
│  │  ├─ Testimonials.jsx
│  │  └─ Footer.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
└─ ...
```

## GitHub

Initialize and push:

```bash
git init -b main
git add .
git commit -m "chore: initial React + Tailwind scaffold and homepage UI"
# create an empty GitHub repo first, then set the remote:
# git remote add origin https://github.com/<your-username>/fictional-ielts-homepage.git
# git push -u origin main
```

## Notes

- Images use safe external sources (Unsplash / DiceBear). Replace with brand assets as needed.
- Update the title and brand in `index.html` and `Navbar.jsx` to match your institute name.
