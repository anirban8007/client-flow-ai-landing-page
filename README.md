# 🚀 ClientFlow AI Landing Page

A premium, highly interactive, and responsive landing page for **ClientFlow AI**—an advanced, AI-powered business assistant designed to automate client communications, streamline project management, generate smart invoices, and integrate with modern SaaS tools.

Built on the cutting-edge **Next.js 16 (App Router)** and **Tailwind CSS v4**, this landing page incorporates modern design patterns: glassmorphic components, fluid scroll animations, dynamic glow effects, and modern HSL/OKLCH color theory.

---

## 🎨 Visual Design & Theme System

This project is built using a customized, ultra-premium dark theme config. It leverages the latest **Tailwind CSS v4 `@theme inline`** syntax and native CSS variables in **OKLCH space** (offering smoother gradients and more natural color progressions than RGB/HSL).

### Core Design Utilities (defined in `app/globals.css`):
- **`.gradient-text`**: Smooth gradient clip (`oklch` purple-to-blue) for high-impact titles.
- **`.glass`**: Advanced glassmorphism with backdrop filters and precise border overlays.
- **`.glow`**: High-fidelity accent shadows that mimic glowing backlights.
- **`.animated-gradient`**: A custom 8-second looping keyframe transition for ambient landing cards.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (React 19, App Router)
- **Styling**: Tailwind CSS v4 & PostCSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **UI Architecture**: Headless primitives built on Radix UI (shadcn/ui compatible)
- **Analytics**: Vercel Analytics integration
- **Language**: TypeScript

---

## 📂 Directory Structure

Here is a map of the core files and folders in this project:

```text
├── app/
│   ├── globals.css           # Global custom classes, OKLCH theme configurations & custom animations
│   ├── layout.tsx            # Main layout importing Inter/Geist fonts, providers, and Vercel Analytics
│   └── page.tsx              # Assembly point for all landing page components
├── components/
│   ├── landing/              # Dedicated modular landing page section components
│   │   ├── benefits-section.tsx      # Dynamic visual list of benefits with interactive grids
│   │   ├── cta-section.tsx           # Call-to-action panel with modern styling
│   │   ├── faq-section.tsx           # Interactive FAQ accordions powered by Radix UI
│   │   ├── features-section.tsx      # Visual list of ClientFlow's core AI functionalities
│   │   ├── footer.tsx                # Context-aware footer with links and social icons
│   │   ├── hero-section.tsx          # Dynamic hero with an interactive AI chat interface mockup
│   │   ├── how-it-works-section.tsx  # Timeline/step visual explaining the platform
│   │   ├── integrations-section.tsx  # Interactive logos showing external tool connections
│   │   ├── navigation.tsx            # Sticky, translucent header with responsive mobile drawer
│   │   ├── pricing-section.tsx       # Interactive pricing tiers (toggle-able)
│   │   ├── showcase-section.tsx      # Interactive mockups of ClientFlow dashboard and interfaces
│   │   ├── testimonials-section.tsx  # Rich, grid-based card list of user reviews
│   │   └── trust-section.tsx         # Responsive company trust logos banner
│   ├── theme-provider.tsx    # Next-themes wrapper for light/dark capabilities
│   └── ui/                   # Full-featured design system components (buttons, badges, inputs, etc.)
├── hooks/                    # Reusable React hooks (use-mobile, use-toast)
├── lib/                      # Helper scripts (shadcn classes merger utils)
├── public/                   # Static assets (logos, icons, vector graphics)
├── vercel.json               # Security configuration rules for Vercel edge routes
├── tsconfig.json             # TypeScript rules
└── package.json              # Script runner and dependencies definitions
```

---

## 🚀 Getting Started

To run ClientFlow AI Landing Page locally, follow these steps:

### 1. Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **Package Manager**: npm (or pnpm/yarn)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/anirban8007/client-flow-ai-landing-page.git

# Navigate to the workspace
cd client-flow-ai-landing-page

# Install dependencies
npm install
```

### 3. Development Server
Start the local server with hot-reloading:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
To build the application for optimal production deployment:
```bash
npm run build
```
To run the production build locally:
```bash
npm run start
```

---

## 🌐 Vercel Deployment

This project is configured to deploy seamlessly to [Vercel](https://vercel.com).

### Custom Routing and Security Header Configuration (`vercel.json`)
We have defined custom rules in `vercel.json` to enforce security headers at Vercel's CDN Edge layer:
- **`X-Frame-Options: DENY`**: Prevents clickjacking by blocking iframe rendering.
- **`X-Content-Type-Options: nosniff`**: Prevents browsers from MIME-sniffing away from the declared content-type.
- **`Referrer-Policy: strict-origin-when-cross-origin`**: Limits exposed referrer information.
- **`Permissions-Policy`**: Restricts access to sensitive device features (e.g. camera, microphone, geolocation) for privacy.
- **`Strict-Transport-Security`**: Enforces secure HTTPS connections for two years including subdomains and preloading.
- **`X-DNS-Prefetch-Control`**: Controls DNS prefetching to improve performance.
- **`X-XSS-Protection`**: Enables XSS filtering block in older browsers.

### Deploying via Vercel Dashboard (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to the [Vercel Dashboard](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Vercel will automatically detect **Next.js** and apply the optimal build command (`npm run build`) and output directory.
5. Click **"Deploy"**.

### Deploying via Vercel CLI
If you prefer terminal-based deployment:
```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Log in to your Vercel account
vercel login

# Deploy standard preview build
vercel

# Deploy to production environment
vercel --prod
```

---

## 🎨 Theme Customization

The layout uses custom CSS tokens mapped directly to Tailwind. To adjust core colors, fonts, or component styles:
1. Open [globals.css](file:///home/blackberry/Desktop/client-flow-ai-landing-page-main/app/globals.css).
2. Edit the `:root` and `.dark` blocks.
3. Color values use OKLCH notation: `oklch(L C H)` where:
   - `L` is Lightness (0% to 100% or 0 to 1)
   - `C` is Chroma (color intensity/saturation)
   - `H` is Hue (color angle on the color wheel, 0-360)
4. To alter fonts, typography, or border radiuses, modify the `@theme inline` block in `globals.css`.

---

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
