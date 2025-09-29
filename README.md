# Abdalla Eldoumani - Portfolio Website

A production-grade portfolio showcasing exceptional frontend craftsmanship and attention to detail. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring refined typography, sophisticated interactions, and a command palette for keyboard-first navigation.

🌟 **Live Demo:** [View Portfolio](https://abdallaeldoumani.vercel.app/)

## About Me

I'm a Computer Science student at the University of Calgary specializing in high-performance systems, AI/ML, and full-stack development. Creator of Rust HTTP servers handling 10k+ concurrent requests and performance-optimized C++ libraries achieving 25-41% gains over NumPy.

## ✨ Key Features

### 🎯 Signature Interactions
- **⌘K Command Palette**: Professional keyboard-first navigation with fuzzy search
- **Refined Micro-interactions**: Spring physics animations and meaningful hover states
- **Progressive Skill Visualization**: Animated progress bars with tabular numeric displays

### 🎨 Visual Excellence
- **Swiss Design Meets Modern Web**: Deliberate color palette beyond typical dark themes
- **Optical Typography**: Letter-spacing adjustments, font features, and text balancing
- **Refined Glassmorphism**: Functional backdrop blur with elevated shadows
- **Custom Selection Colors**: Brand-consistent text selection and focus states

### ⚡ Performance Optimized
- **Next.js Image Optimization**: AVIF/WebP support with responsive sizing
- **Bundle Optimization**: Strategic package imports, 178 kB First Load JS
- **Production Ready**: Zero TypeScript errors, clean static generation
- **Accessibility First**: WCAG compliant with refined focus-visible states

## 🛠️ Technologies Used

### Core Framework
- **Next.js 14** - React framework with App Router and experimental optimizations
- **TypeScript** - Type-safe development with strict mode
- **Tailwind CSS** - Utility-first CSS with custom design system

### Animations & UI
- **Framer Motion** - Spring physics and orchestrated animations
- **Lucide React** - Consistent iconography (optimized imports)
- **React Icons** - Extended icon library with Simple Icons

### Design System
- **Custom CSS Variables** - Semantic color tokens and elevation system
- **Typography Scale** - Optical sizing with OpenType features
- **Motion Design** - Cubic-bezier easing with reduced motion support

### Development Tools
- **ESLint** - Code quality and Next.js best practices
- **PostCSS** - CSS processing with Tailwind optimizations

## 🚀 Featured Projects

### Rust HTTP Server
Production-ready HTTP server handling **10,000+ concurrent requests** with <10ms response time.
- **Tech:** Rust, Axum, SQLite, WebSocket, JWT Authentication
- **Performance:** 60% reduction in database queries, sub-100ms search responses

### FastMathExt
High-performance C++ matrix multiplication library achieving **25-41% performance gains** over NumPy through advanced optimization techniques.
- **Tech:** C++, OpenMP, AVX2 SIMD, Multi-level Cache Blocking
- **Performance:** O(n³) to O(n^2.807) complexity reduction using Strassen's algorithm

### Budget Buddy
CalgaryHacks24 winning project - A full-stack financial platform for young Canadian investors.
- **Tech:** Next.js, Supabase, TypeScript, TailwindCSS
- **Impact:** Addresses the issue that 70% of young Canadians avoid stock market investing

### Interactive Cybersecurity Site
Educational platform demonstrating cybersecurity concepts with interactive simulations.
- **Tech:** React, Node.js, MongoDB, Express.js

### AI-Platform
Multi-model AI platform integrating OpenAI's latest models with modern web technologies.
- **Tech:** Next.js, TypeScript, OpenAI API, Prisma, MySQL, Stripe

## 📁 Project Structure

```
portfolio_website/
├── app/                    # Next.js App Router
│   ├── resume/            # Resume page
│   ├── globals.css        # Design system with CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx          # Homepage composition
├── components/            # React components
│   ├── about.tsx         # About with highlight cards
│   ├── command-palette.tsx # ⌘K command palette (signature feature)
│   ├── contact.tsx       # Elevated contact section
│   ├── experience.tsx    # Timeline with achievements
│   ├── hero-section.tsx  # Hero with optimized images
│   ├── navbar.tsx        # Active section navigation
│   ├── projects.tsx      # Project showcase with Next.js Image
│   └── skills.tsx        # Skills with progress visualization
├── lib/                  # Utility functions
│   └── utils.ts         # Tailwind merge utilities
├── public/              # Static assets
│   ├── images/         # Optimized project images
│   └── my-resume.pdf   # Resume document
├── next.config.mjs      # Image optimization config
└── tailwind.config.ts   # Extended design tokens
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Abdalla-Eldoumani/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Philosophy

**"Swiss design meets modern web"** - Craftsmanship over flashiness:

### Visual Hierarchy
- **Optical Typography**: Letter-spacing adjustments (-0.03em for h1, -0.025em for h2)
- **Font Features**: Kerning, ligatures, contextual alternates, tabular figures
- **Text Balancing**: Automatic line balancing for headlines

### Color System
- **Semantic Variables**: `--accent-primary`, `--text-secondary`, `--shadow-elevated`
- **Refined Palette**: Beyond typical dark theme (#0a0b0f base, #06b6d4 accent cyan)
- **Custom Selection**: Brand-consistent text selection (`rgba(6, 182, 212, 0.25)`)

### Interaction Design
- **Meaningful Animations**: Reduced intensity, cubic-bezier(0.4, 0, 0.2, 1) easing
- **Spring Physics**: Natural feel on skill card hover interactions
- **Purposeful Feedback**: 1px lifts with shadow elevation, scale(0.98) on press

### Accessibility
- **Focus-Visible States**: 2px rings with proper offset, no generic outline
- **Keyboard Navigation**: Command palette, arrow key support, Tab traversal
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **High Contrast**: Compatible with `prefers-contrast: high`

## 📊 Performance Metrics

- ⚡ **First Load JS**: 178 kB (optimized bundle splitting)
- 🖼️ **Image Optimization**: AVIF/WebP formats, responsive sizing
- 🚀 **Static Generation**: Pre-rendered pages for instant loading
- ♿ **Accessibility**: WCAG 2.1 AA compliant with enhanced focus states
- 📱 **Responsive**: Optimized breakpoints (640px, 768px, 1024px, 1280px)

## 🎯 What Makes It Stand Out

1. **Command Palette** (`⌘K`): Keyboard-first navigation with fuzzy search - immediate signal of technical sophistication
2. **Typography Excellence**: Optical sizing, proper kerning, and letter-spacing show attention to detail
3. **Refined Animations**: Spring physics and proper easing curves feel premium, not generic
4. **Skills Visualization**: Progress bars with animated fills and tabular numerics go beyond static grids
5. **Design System**: Custom CSS variables enable consistent, maintainable design
6. **Performance**: Proper image optimization, bundle management, and static generation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdalla-Eldoumani/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build    # Creates optimized production build
npm start        # Serves production build
```

## ⌨️ Keyboard Shortcuts

- **⌘K / Ctrl+K**: Open command palette
- **↑↓**: Navigate commands
- **Enter**: Execute selected command
- **Esc**: Close command palette
- **1-6**: Quick section navigation
- **g**: Open GitHub profile
- **l**: Open LinkedIn profile
- **r**: Download resume

## 🤝 Connect With Me

- **Portfolio**: [abdallaeldoumani.vercel.app](https://abdallaeldoumani.vercel.app/)
- **LinkedIn**: [Abdalla Eldoumani](https://www.linkedin.com/in/abdallaeldoumani/)
- **GitHub**: [@Abdalla-Eldoumani](https://github.com/Abdalla-Eldoumani)
- **Email**: [aamsdoumani@gmail.com](mailto:aamsdoumani@gmail.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---