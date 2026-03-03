# Scroll-Driven Hero Section Animation
Assignment Submission for Itzfizz Digital - Web Development Internship

## 📌 Live Demo
🔗 [View Live Project](https://itzfizz-hero-demo.onrender.com/)

## 📌 GitHub Repository
🔗 [View Source Code](https://github.com/harsheditz79/itzfizz-hero-demo)

## 🎨 Features Implemented

### ✅ Hero Section Layout
- Full-screen hero section with letter-spaced headline
- Impact statistics with smooth animations
- Responsive design for all devices

### ✅ Initial Load Animation
- Staggered text reveal animation
- Sequential stats appearance with delays
- Premium, smooth animations

### ✅ Scroll-Based Animation (Core Feature)
- Car animation tied to scroll progress
- Green track reveal on scroll
- Stats triggered at specific scroll points
- Natural easing and fluid motion
- Smooth scroll progress indicator

### ✅ Performance Optimizations
- Transform-based animations (no layout reflows)
- Optimized scroll listeners
- Smooth 60fps animations
- Efficient component rendering

## 🛠️ Tech Stack

### Mandatory
- HTML5
- CSS3 (with custom animations)
- JavaScript (ES6+)
- React.js (with Hooks)

### Plus Points
- Vite (Fast build tool)
- Responsive Design (Mobile-first approach)
- Clean Code Architecture
- Component-based structure
- Custom React Hooks

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/harsheditz79/itzfizz-hero-demo.git
   cd itzfizz-hero-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
http://localhost:5173

## 📂 Project Structure


itzfizz-hero-demo/
├── public/
│   ├── _redirects
│   └── icons8-car-100.png
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── car.png
│   │       ├── car1.png
│   │       └── car2.png
│   ├── components/
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── HeroSection.css
│   │   │   └── hero.constants.js
│   │   ├── ScrollProgress/
│   │   │   ├── ScrollProgress.jsx
│   │   │   └── ScrollProgress.css
│   │   └── Stats/
│   │       ├── Stats.jsx
│   │       └── Stats.css
│   ├── hooks/
│   │   └── useCounter.js
│   ├── styles/
│   │   ├── index.css
│   │   └── variables.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md

## 🎯 Key Components

### 1. HeroSection Component
- Main hero section with scroll-based animations
- Car reveal effect on scroll
- Green track building animation
- Responsive layout

### 2. Stats Component
- Animated statistics counter
- Smooth number animations using custom hook
- Fade-in effects

### 3. ScrollProgress Component
- Top progress bar indicator
- Real-time scroll percentage
- Smooth color transitions

### 4. useCounter Hook
- Custom React hook for number animations
- Configurable duration and easing
- Reusable across components

## 🎨 Animation Features

### Scroll-Triggered Effects
- **0-20% scroll**: Initial state
- **20-50% scroll**: Car starts appearing
- **50-80% scroll**: Green track reveals
- **80-100% scroll**: Full animation complete

### Performance Metrics
- **First Paint**: < 1s
- **Animation FPS**: 60fps
- **Bundle Size**: 311 KB (gzipped: 107 KB)
- **Load Time**: ~2s

## 🌐 Deployment

### Platform: Render
- **URL**: https://itzfizz-hero-demo.onrender.com/
- **Auto-deploy**: Enabled on `main` branch push
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## 👨‍💻 Developer

**Harsh Sharma**
- GitHub: [@harsheditz79](https://github.com/harsheditz79)
- Assignment for: Itzfizz Digital - Web Development Internship

## 📝 Assignment Completion Checklist

- ✅ Hero section with responsive layout
- ✅ Initial load animations implemented
- ✅ Scroll-based car animation working
- ✅ Green track reveal on scroll
- ✅ Stats counter animations
- ✅ Scroll progress indicator
- ✅ Clean, maintainable code
- ✅ Component-based architecture
- ✅ Deployed to production
- ✅ GitHub repository with proper documentation

## 🔧 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deployment
Automatically deploys to Render on push to `main` branch.

## 📄 License
This project is created as an assignment submission for Itzfizz Digital.

---

**Built with ❤️ for Itzfizz Digital Internship Assignment**
