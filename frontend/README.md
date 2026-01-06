# UNAC Vancouver Website - Frontend

This is the frontend application for the United Nations Association in Canada - Vancouver Branch (UNAC-V) website. Built with React, TypeScript, and Vite, this application provides an engaging platform for community engagement, event management, and resource sharing focused on UN Sustainable Development Goals.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Custom component library with Radix UI primitives
- **Icons**: Lucide React & React Icons
- **Animations**: Custom Tailwind animations

## Project Structure

```
src/
├── components/
│   ├── HomePage.tsx
│   ├── About.tsx
│   ├── Events.tsx
│   ├── GetInvolved.tsx
│   ├── Resources.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ScrollToHash.tsx
│   ├── HomePageSections/
│   ├── AboutPageSections/
│   ├── EventsPageSections/
│   ├── GetInvoledSections/
│   ├── ResourcesPageSections/
│   ├── ContactPageSections/
│   ├── NavbarComponents/
│   └── ui/                    # Reusable UI components
├── assets/                    # Images and static assets
├── lib/                       # Utility functions
├── App.tsx
└── index.css                  # Global styles & design tokens
```

## Features

### Pages
- **Home**: Landing page with mission statement and overview
- **About**: Team information and national affiliations
- **Events**: Upcoming and past events showcase
- **Get Involved**: Membership, volunteering, and donation information
- **Resources**: Educational materials and UN resources
- **Contact**: Contact form and FAQ

### Key Components
- **Responsive Navbar**: Dropdown menus with smooth navigation
- **Footer**: Social links and quick navigation
- **ScrollToHash**: Automatic smooth scrolling to page sections
- **Reusable UI Components**: Buttons, typography, form elements

### Design System
Custom CSS variables defined in `index.css`:
- Primary Blue Colors (05-10): Brand colors from light to dark
- Neutral Colors (0-10): Grayscale palette
- Custom animations for smooth interactions

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Development

### Adding New Pages
1. Create page component in `src/components/`
2. Create section components in corresponding folder (e.g., `YourPageSections/`)
3. Add route in `App.tsx`
4. Update navbar in `NavbarComponents/navItems.ts` if needed

### Design Tokens
All colors are defined as CSS variables in `src/index.css`. Use them with Tailwind:
```tsx
className="bg-[var(--color-primary-blue-6)]"
className="text-[var(--color-neutral-8)]"
```

### Hash Navigation
Use regular `Link` components with hash fragments. The `ScrollToHash` component handles smooth scrolling:
```tsx
<Link to="/page#section-id">Go to Section</Link>
```

Ensure your target sections have matching IDs:
```tsx
<section id="section-id">...</section>
```

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

## Contributing

This project follows standard React and TypeScript best practices. Key guidelines:
- Use functional components with hooks
- Follow the existing component structure
- Use the design system colors from CSS variables
- Ensure responsive design for mobile, tablet, and desktop
- Add proper TypeScript types for all props and functions

## License

This project is private and proprietary to UNAC Vancouver.
