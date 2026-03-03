# Custom Asset Guide

Place custom files in these folders:

- `assets/icons/social/`
- `assets/logos/experience/`
- `assets/images/projects/`

## 1) GitHub / LinkedIn SVG logos

The site already includes inline SVG icons for GitHub and LinkedIn in Home, Contact, and Footer.

If you want to swap to your own files:

- Save custom icon files as:
  - `assets/icons/social/github.svg`
  - `assets/icons/social/linkedin.svg`
- Then replace the inline `<svg>` blocks in `index.html` with `<img src="...">` for those paths.

## 2) Experience icons

The experience timeline now uses built-in SVG type icons:

- `work` entries: briefcase icon
- `education` entries: academic cap icon

No custom organization logos are required for this section.

## 3) Project images

Project cards and the project modal use these filenames:

- `assets/images/projects/lkml-dashboard.jpg`
- `assets/images/projects/rust-load-balancer.jpg`
- `assets/images/projects/linux-raid.jpg`
- `assets/images/projects/music-rnn.jpg`
- `assets/images/projects/cicd-portfolio.jpg`
- `assets/images/projects/research-summarizer.jpg`

If any image is missing, the UI falls back to the letter-style placeholder automatically.

## Recommended image sizes

- Project images: 1600x900 (16:9)
- Experience logos: 512x512 (square)
- Social SVG icons: 24x24 or 32x32 viewBox
