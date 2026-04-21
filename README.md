# Lahsiv Foundation — Website

Self-hosted, static website for [Lahsiv Foundation](https://www.lahsivfoundation.com/),
built with Astro + Tailwind, deployed on GitHub Pages.

## What's in this repo

- **Astro** static site generator — outputs pure HTML/CSS, no server needed
- **Tailwind CSS** for styling, with a custom palette (teal, coral, sand)
- **Markdown-driven** gallery — founders add new albums by dropping photos
  and creating one markdown file
- **Formspree** contact form — update the form ID once and submissions go
  straight to email

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produces /dist for deploy
```

## Before launch

Complete this checklist from the PRD:

- [ ] Drop your **logo** at `/public/images/logo.png` and a favicon at
      `/public/favicon.ico`
- [x] Drop the **hero image** at `/public/images/hero.jpg`
- [x] Drop the **mission image** at `/public/images/mission.jpg`
- [ ] Drop **director photos** in `/public/images/directors/` (see the
      README in that folder for file names)
- [ ] Drop **gallery photos** in `/public/images/gallery/vrr-memorial-2025/`
      (`cover.jpg`, `01.jpg`, `02.jpg`, ...)
- [ ] Update VRR Memorial date and description in
      `/src/content/events/vrr-memorial-2025.md`
- [ ] Update bank details in `/src/components/BankDetails.astro`
- [ ] Create a Formspree form and replace `YOUR_FORMSPREE_ID` in
      `/src/pages/contact.astro`

See `/public/images/README.md` for full image guidance.

## Folder structure

```
lahsiv-website/
├── public/
│   ├── images/              ← drop photos/logo here (see images/README.md)
│   │   ├── logo.png         [placeholder]
│   │   ├── hero.jpg
│   │   ├── mission.jpg
│   │   ├── directors/       [drop headshots here]
│   │   └── gallery/         [one folder per event]
│   ├── favicon.ico          [placeholder]
│   └── robots.txt
├── src/
│   ├── components/          (Header, Footer, Hero, ContactForm, ...)
│   ├── layouts/             (BaseLayout.astro — <head>, header, footer)
│   ├── pages/               (one .astro file per route)
│   │   ├── index.astro      →  /
│   │   ├── about.astro      →  /about
│   │   ├── work.astro       →  /work
│   │   ├── impact-stories.astro
│   │   ├── gallery.astro    (album list)
│   │   ├── gallery/[slug].astro  (single album)
│   │   └── contact.astro
│   ├── content/
│   │   └── events/          ← add new event .md files here
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Adding a new gallery event

1. Create a folder: `/public/images/gallery/my-new-event/`
2. Drop `cover.jpg` plus `01.jpg`, `02.jpg`, ... into it
3. Create `/src/content/events/my-new-event.md`:

   ```yaml
   ---
   title: "My New Event"
   slug: "my-new-event"
   date: "2026-06-15"
   cover: "/images/gallery/my-new-event/cover.jpg"
   description: "Short 1–2 sentence description shown on the album page."
   photos:
     - "01.jpg"
     - "02.jpg"
     - "03.jpg"
   ---

   Optional longer body text about the event.
   ```

4. Commit and push — the site rebuilds automatically.

## Editing content

All text lives in `.astro` or `.md` files. For example:

- Mission text on the home page: `/src/pages/index.astro`
- About page body: `/src/pages/about.astro`
- RISE / SHINE copy: `/src/pages/work.astro`
- R. P. Varsha testimonial: `/src/pages/impact-stories.astro`
- Office address, email, phone: `/src/components/Footer.astro` and
  `/src/pages/contact.astro`
- Bank details: `/src/components/BankDetails.astro`

Edit, commit, push — the site rebuilds and deploys automatically.

## Deploy

On push to `main`, the GitHub Actions workflow in `.github/workflows/deploy.yml`
builds the site and publishes it to GitHub Pages. In repo settings:

1. Settings → Pages → Source = "GitHub Actions"
2. Settings → Pages → Custom domain = `lahsivfoundation.com`
3. At your DNS registrar, point the domain to `<github-username>.github.io`

## Tech stack

- [Astro 5](https://astro.build/) — static site generator
- [Tailwind CSS 3](https://tailwindcss.com/) — utility styling
- [Formspree](https://formspree.io/) — contact form backend (free tier:
  50 submissions/month)
- GitHub Pages — hosting (free, custom domain supported)

## License

© 2026 Lahsiv Foundation. All rights reserved.
