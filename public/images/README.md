# Image assets

Drop your image files here to replace the placeholders. The file names and
paths below are **final** — keep them exactly as shown so the website picks
them up automatically.

## Required files (at launch)

| Path | What it is | Recommended size |
|---|---|---|
| `/public/images/logo.png` | Main logo, transparent PNG | 500px wide minimum |
| `/public/favicon.ico` | Favicon (derived from logo) | 32x32 |
| `/public/images/hero.jpg` | Home page hero image | 2000x1200, landscape |
| `/public/images/mission.jpg` | Home "mission" section image | 1200x1200, square |

## Directors

Place headshots at `/public/images/directors/`:

| File | Who |
|---|---|
| `dweepanjali.jpg` | Dweepanjali — Director |
| `sankalp.jpg` | Sankalp Kumar Singh — Director |
| `siva-sundaram.jpg` | R. Siva Sundaram — Director |
| `jai-dev-singh.jpg` | Dr. Jai Dev Singh — Volunteer Coordinator |

Recommended size: **640x640px square JPG**.

## Gallery

Each event is a folder under `/public/images/gallery/<event-slug>/`.

The launch album folder already exists:
`/public/images/gallery/vrr-memorial-2025/`

Drop photos named `01.jpg`, `02.jpg`, `03.jpg`, etc., plus a `cover.jpg`.

### Adding a new event later

1. Create a new folder: `/public/images/gallery/my-new-event/`
2. Drop photos named `01.jpg`, `02.jpg`, etc., plus `cover.jpg`.
3. Create a new markdown file at `/src/content/events/my-new-event.md`
   with this shape:
   ```yaml
   ---
   title: "My New Event"
   slug: "my-new-event"
   date: "2026-06-15"
   cover: "/images/gallery/my-new-event/cover.jpg"
   description: "Short 1–2 sentence description."
   photos:
     - "01.jpg"
     - "02.jpg"
     - "03.jpg"
   ---

   Optional longer body text about the event.
   ```
4. Commit and push — the site rebuilds and the new album appears automatically.

## Image prep tips

- Compress photos with [TinyPNG](https://tinypng.com/) before uploading to
  keep the site fast.
- JPG is fine for photos; PNG is better for logos or graphics with
  transparency.
- Keep each photo under ~400 KB if you can.
