# Project Guidelines

## Code Style
- Use functional React components with hooks only
- Prefer Tailwind CSS utility classes for styling
- Default exports for components
- Mobile-first responsive design with `md:` breakpoints

## Architecture
- Single-page landing site with 7 sections: Nav, Hero, AboutUs, Services, Testimony, Contact, Footer
- Components in `src/components/`
- Use react-scroll for smooth navigation between sections

## Build and Test
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Lint code (no auto-fix configured)

## Conventions
- Import images at top of component files
- Use `useState` for local state; no global state management yet
- Array mapping for rendering lists
- ESLint ignores unused variables matching `^[A-Z_]` pattern