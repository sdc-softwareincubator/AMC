# AMC - Advanced Manufacturing Centre

A modern, responsive website for the Advanced Manufacturing Centre at AKGEC Skills Foundation, built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout for both small and large screens
- **Modern UI**: Clean and professional design with custom color scheme
- **Components**: Modular component structure similar to janatics-akgec
- **Color Scheme**: 
  - Primary: #029896 (Navbar and primary elements)
  - Hover: #566E95 (Hover states)
  - Font Family: Oswald for headings

## Project Structure

```
amc/
├── public/
│   └── amc/
│       ├── logo.png
│       ├── nsdc-logo.jpg
│       ├── main-slider.jpg
│       ├── about-center.jpg
│       ├── facebook.png
│       ├── twitter.png
│       ├── linkedin.png
│       ├── certification/
│       │   └── certificate.jpg
│       ├── services/
│       │   ├── dimensional.jpg
│       │   ├── cmm.jpg
│       │   └── 3d-scanning.jpg
│       ├── infrastructure/
│       │   └── (various infrastructure images)
│       ├── projects/
│       │   └── (project images)
│       ├── success_story/
│       │   └── (success story images)
│       └── photogallery/
│           └── (gallery images)
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── Navbar.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Certification.tsx
│   │   ├── ContactNow.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── Infrastructure.tsx
│   │   ├── Layout.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── SuccessStories.tsx
│   │   └── Training.tsx
│   ├── pages/
│   │   └── Landing.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add images to the `public/amc/` directory structure as shown above.

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Components

- **Navbar**: Responsive navigation with search and register functionality
- **Hero**: Hero section with main slider
- **AboutUs**: About the centre section
- **Training**: Training programs grid
- **Services**: Services offered by the centre
- **Infrastructure**: Infrastructure and facilities showcase
- **Projects**: Industry projects section
- **Certification**: Certification information
- **SuccessStories**: Success stories of trainees
- **Gallery**: Photo gallery
- **Footer**: Footer with contact information and links
- **ContactNow**: Slide-out contact form

## Color Scheme

- Primary Color: `#029896` (used in navbar, buttons, links)
- Hover Color: `#566E95` (used for hover states)
- Font Family: `Oswald` for headings (via font-['Oswald',sans-serif])

## Technologies Used

- React 19.2.0
- TypeScript
- Tailwind CSS 4.1.17
- Vite 7.2.4
- React Router DOM 7.10.0
- Lucide React (for icons)

## Notes

- All images should be placed in the `public/amc/` directory structure
- The website is fully responsive and works on both mobile and desktop
- Components follow the same structure as janatics-akgec for consistency
