# Engagement Invitation Website

A beautiful, animated engagement ceremony invitation website built with Next.js, featuring Marathi language content, smooth animations, and mobile-responsive design.

## Features

- ✨ Beautiful animated invitation card with flip effect
- 🎨 Attractive UI/UX with gradient backgrounds and glassmorphism effects
- 📱 Fully mobile responsive design
- 🎭 Multiple animations including floating elements, sliding effects, and transitions
- 🇮🇳 Marathi language content throughout
- ⏰ Countdown timer to the engagement date
- 📸 Photo gallery with lightbox
- 📝 RSVP form for guest responses
- 💫 Particle effects and decorative elements

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd engagement-invitation
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the invitation.

## Customization

### Update Names and Details

Edit the following files to customize the invitation:

- `src/components/InvitationCard.tsx` - Update names (राज & प्रिया)
- `src/components/Countdown.tsx` - Update the target date
- `src/components/Details.tsx` - Update date, time, venue, and dress code
- `src/components/Gallery.tsx` - Replace placeholder images with actual photos

### Update Colors and Styling

Modify `tailwind.config.js` to change the color scheme and add custom animations.

## Build for Production

### Static Site Generation (SSG)

This project is configured for Static Site Generation, which means it generates static HTML files that can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

To build the static site:

```bash
npm run build
```

This will create an `out` directory containing all the static files. The site is fully static and can be hosted anywhere.

### Deploy Static Files

After building, the `out` directory contains all static files. You can:

1. **Deploy to Netlify/Vercel**: Just connect your repository - they'll auto-detect Next.js
2. **Deploy to GitHub Pages**: Copy the `out` folder contents to your `gh-pages` branch
3. **Deploy to any static host**: Upload the `out` folder contents to your hosting service

### Development Server

For development:

```bash
npm run dev
```

Note: The static export doesn't require a Node.js server - all files are pre-rendered HTML, CSS, and JavaScript.

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Noto Sans Devanagari (for Marathi font support)

## License

This project is created for personal use.

