# Grajales Cleaning

A modern, responsive website for a professional residential and commercial cleaning company. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with modern UI components
- **Service Pages**: Dedicated pages for residential and commercial cleaning services
- **Contact System**: Functional contact form for customer inquiries
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Includes sitemap, robots.txt, and meta tags

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/grajales-cleaning/grajales-cleaning.github.io.git
cd grajales-cleaning.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ContactForm.tsx  # Contact form component
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section
│   ├── Layout.tsx       # Main layout wrapper
│   ├── NavBar.tsx       # Navigation bar
│   └── ServiceCard.tsx  # Service display cards
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── ResidentialPage.tsx  # Residential services
│   ├── CommercialPage.tsx   # Commercial services
│   ├── ContactPage.tsx      # Contact page
│   ├── PrivacyPage.tsx      # Privacy policy
│   └── TermsPage.tsx        # Terms of service
├── assets/             # Static assets
└── index.css          # Global styles and Tailwind imports
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. To manually deploy:

```bash
npm run deploy
```

## License

This project is private and proprietary to Grajales Cleaning.
