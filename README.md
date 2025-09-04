# ZakariaSaid

A modern, fast personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. It showcases projects, skills, and contact options with an accessible, responsive UI using Radix primitives and lightweight components.

## Features
- Fast dev/build with Vite and TypeScript
- Tailwind CSS styling + animations
- Radix UI primitives with accessible components
- Project, skills, and contact sections
- Production-ready build output in `dist/`

## Tech Stack
- React 18, TypeScript, Vite 5
- Tailwind CSS 3, PostCSS, Autoprefixer
- Radix UI, Lucide icons, Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+ (Vite 5 requires Node 18+)

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
- The dev server will print a local URL (e.g. http://localhost:5173).

### Build for Production
```bash
npm run build
```
- Output is written to `dist/`.

### Preview Production Build
```bash
npm run preview
```

## Deployment
You can deploy the `dist/` folder to any static hosting provider.

- Vercel: Import the GitHub repo, framework preset: "Vite".
- Netlify: Connect the repo, build command: `npm run build`, publish directory: `dist`.
- GitHub Pages: Build locally or via CI and publish `dist/` to the `gh-pages` branch (configure `base` in `vite.config.ts` if deploying under a subpath).

## Environment Variables (optional)
If you use EmailJS for the contact form, configure your Service ID, Template ID, and Public Key. Example (names may vary based on your implementation):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Available Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Type-check and build for production
- `npm run preview`: Preview the built app locally
- `npm run lint`: Lint the project

## Dependencies
The following are pulled from `package.json`.

### Runtime
- @emailjs/browser: ^4.4.1
- @hookform/resolvers: ^3.9.0
- @radix-ui/react-accordion: ^1.2.0
- @radix-ui/react-alert-dialog: ^1.1.1
- @radix-ui/react-aspect-ratio: ^1.1.0
- @radix-ui/react-avatar: ^1.1.0
- @radix-ui/react-checkbox: ^1.1.1
- @radix-ui/react-collapsible: ^1.1.0
- @radix-ui/react-context-menu: ^2.2.1
- @radix-ui/react-dialog: ^1.1.1
- @radix-ui/react-dropdown-menu: ^2.1.1
- @radix-ui/react-hover-card: ^1.1.1
- @radix-ui/react-icons: ^1.3.0
- @radix-ui/react-label: ^2.1.0
- @radix-ui/react-menubar: ^1.1.1
- @radix-ui/react-navigation-menu: ^1.2.0
- @radix-ui/react-popover: ^1.1.1
- @radix-ui/react-progress: ^1.1.0
- @radix-ui/react-radio-group: ^1.2.0
- @radix-ui/react-scroll-area: ^1.1.0
- @radix-ui/react-select: ^2.1.1
- @radix-ui/react-separator: ^1.1.0
- @radix-ui/react-slider: ^1.2.0
- @radix-ui/react-slot: ^1.1.0
- @radix-ui/react-switch: ^1.1.0
- @radix-ui/react-tabs: ^1.1.0
- @radix-ui/react-toast: ^1.2.1
- @radix-ui/react-toggle: ^1.1.0
- @radix-ui/react-toggle-group: ^1.1.0
- @radix-ui/react-tooltip: ^1.1.2
- class-variance-authority: ^0.7.0
- clsx: ^2.1.1
- cmdk: ^1.0.0
- date-fns: ^3.6.0
- emailjs: ^4.0.3
- embla-carousel-react: ^8.3.0
- framer-motion: ^12.23.12
- input-otp: ^1.2.4
- lucide-react: ^0.446.0
- next-themes: ^0.3.0
- react: ^18.3.1
- react-day-picker: ^8.10.1
- react-dom: ^18.3.1
- react-hook-form: ^7.53.0
- react-resizable-panels: ^2.1.3
- recharts: ^2.12.7
- sonner: ^1.5.0
- tailwind-merge: ^2.5.2
- tailwindcss-animate: ^1.0.7
- vaul: ^1.0.0
- zod: ^3.23.8

### Dev
- @eslint/js: ^9.11.1
- @types/node: ^22.7.3
- @types/react: ^18.3.9
- @types/react-dom: ^18.3.0
- @vitejs/plugin-react: ^4.3.1
- autoprefixer: ^10.4.20
- eslint: ^9.11.1
- eslint-plugin-react-hooks: ^5.1.0-rc.0
- eslint-plugin-react-refresh: ^0.4.12
- globals: ^15.9.0
- postcss: ^8.4.47
- tailwindcss: ^3.4.13
- typescript: ^5.5.3
- typescript-eslint: ^8.7.0
- vite: ^5.4.8

## License
This project is licensed under the MIT License. See the license terms that best fit your needs if you plan to redistribute.

---

If you find this useful, consider starring the GitHub repo. 😊
