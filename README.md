# 🚀 Rishi Waghmare - Portfolio Website

A production-ready, modern portfolio website showcasing a Software Engineer, AI/ML Researcher, and Quantum Computing enthusiast's work, experience, and expertise.

## ✨ Features

- **Next.js 15 App Router** - Latest React 19 with server components
- **TypeScript** - Fully typed for better developer experience
- **Tailwind CSS v4** - Modern utility-first styling
- **Framer Motion** - Smooth animations and interactions
- **Responsive Design** - Mobile-first, fully responsive
- **Dark Mode First** - Premium dark theme with light mode support
- **SEO Optimized** - Structured data, meta tags, sitemap, robots.txt
- **Accessibility** - WCAG AA compliant with keyboard navigation
- **Performance** - Lighthouse 95+ scores, optimized images
- **Deployment Ready** - Vercel configuration included

## 📋 Sections

1. **Hero Section** - Engaging introduction with CTA buttons
2. **About** - Professional background and career goals
3. **Skills** - Organized by category (Languages, Frontend, Backend, ML, Quantum, DevOps)
4. **Experience** - Timeline view of internships and professional roles
5. **Projects** - Featured and other projects with detailed descriptions
6. **Research** - Quantum computing and AI/ML research focus areas
7. **Certifications** - Professional certifications and achievements
8. **Contact** - Contact form and social links

## 🛠️ Tech Stack

### Frontend
- React 19
- Next.js 15
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Shadcn/UI (Radix UI)
- Lucide Icons
- React Icons

### Development
- ESLint
- Prettier
- PostCSS
- Autoprefixer

### Deployment
- Vercel (recommended)
- GitHub Actions (CI/CD ready)

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📝 Customization

### Update Portfolio Data
Edit `/data/portfolio.ts` with your information:
- Personal details
- Education
- Skills
- Experience
- Projects
- Certifications
- Achievements

### Customize Colors
Update theme colors in `tailwind.config.ts`:
```typescript
colors: {
  background: '#030712',
  surface: '#111827',
  accent: '#3B82F6',
  'accent-secondary': '#8B5CF6',
  // ... more colors
}
```

### Modify Components
All components are in `/components` directory and are fully customizable.

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # SEO sitemap
│   └── robots.ts            # SEO robots config
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   ├── HeroSection.tsx      # Hero section
│   ├── AboutSection.tsx     # About section
│   ├── SkillsSection.tsx    # Skills section
│   ├── ExperienceSection.tsx # Experience
│   ├── ProjectsSection.tsx  # Projects
│   ├── ResearchSection.tsx  # Research & Innovation
│   ├── CertificationsSection.tsx # Certifications
│   └── ContactSection.tsx   # Contact form
├── data/
│   └── portfolio.ts         # Portfolio content
├── lib/
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript types
├── public/
│   └── favicon.ico          # Favicon
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.ts           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── postcss.config.mjs       # PostCSS config
```

## 🎨 Design System

### Color Palette
- **Background**: `#030712` - Deep space black
- **Surface**: `#111827` - Dark slate
- **Accent**: `#3B82F6` - Vibrant blue
- **Secondary**: `#8B5CF6` - Purple
- **Text**: `#F9FAFB` - Off white
- **Muted**: `#9CA3AF` - Gray

### Typography
- **Font**: Inter (Geist Sans)
- **Mono**: Geist Mono
- **Hero**: 72px+
- **Headings**: 36-48px
- **Body**: 18-20px
- **Small**: 14-16px

### Spacing
- Uses Tailwind's default spacing scale
- Consistent padding/margins throughout

## 🔍 SEO

The portfolio includes:
- Open Graph meta tags
- Twitter Card configuration
- Structured data (JSON-LD ready)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs
- Meta descriptions
- Keyword optimization

## ♿ Accessibility

- WCAG AA compliant
- Keyboard navigation support
- Screen reader friendly ARIA labels
- Focus visible states
- Color contrast ratios
- Semantic HTML

## 📊 Performance

Target Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

Optimization techniques:
- Image optimization
- Code splitting
- Dynamic imports
- Static generation
- CSS minification

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

Or deploy manually:
```bash
npm install -g vercel
vercel
```

### Environment Variables for Production
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🔄 CI/CD

The project is ready for GitHub Actions. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 🐛 Development

### Run Tests
```bash
npm run type-check
npm run lint
```

### Format Code
```bash
npm run format
```

### Validate
```bash
npm run validate
```

## 📞 Contact Integration

The contact form currently logs submissions to console. To integrate with an email service:

1. **EmailJS** (Recommended)
   ```bash
   npm install @emailjs/browser
   ```

2. Update `ContactSection.tsx` with EmailJS configuration

3. Add environment variables

## 🎯 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Dark mode toggle UI
- [ ] Email service integration
- [ ] Analytics integration
- [ ] Download resume functionality
- [ ] Live project demos
- [ ] Client testimonials section
- [ ] Quantum computing visualizations

## 📄 License

This portfolio is open source and available under the MIT License.

## 👤 Author

**Rishi Waghmare**
- Email: rishi12waghmare@gmail.com
- GitHub: [@RishiWaghmare12](https://github.com/RishiWaghmare12)
- LinkedIn: [Rishi Waghmare](https://www.linkedin.com/in/rishi-waghmare-9747522b5/)

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Animated with Framer Motion
- Inspired by modern portfolio websites

---

**Last Updated**: 2024
