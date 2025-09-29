# Nuxt 3 Project

This is a **Nuxt 3** project, ready for development, production, and deployment on platforms like **Vercel**.

---

## 🚀 Features
- Built with **Nuxt 3** (`^3.14.159`)
- Server-Side Rendering (SSR) support
- Ready for static generation if needed
- Environment variables support via `.env`
- Easy deployment to **Vercel**, **Netlify**, or other platforms

---

## 📁 Project Structure

├── .nuxt/ # Nuxt build files (ignored by Git)
├── .output/ # Build output (ignored by Git)
├── components/ # Vue components
├── pages/ # Nuxt pages
├── public/ # Static assets
├── nuxt.config.ts # Nuxt configuration
├── package.json
└── .gitignore


---

## ⚡ Getting Started

### 1. Install dependencies
```bash
yarn install
# or
npm install

yarn dev
# or
npm run dev

yarn build
# or
npm run build

yarn start
# or
npm run start

🌐 Deployment on Vercel

Push your repository to GitHub.

Sign in to Vercel
 and import your project.

Set:

Framework Preset: Nuxt.js

Build Command: yarn build (or npm run build)

Output Directory: .nuxt/dist (or leave default)

Add environment variables if needed.

Click Deploy. Your app will be live at https://your-project.vercel.app.
######################################

# Nuxt 3 Project

Short and ready-to-deploy Nuxt 3 project.

## Setup
```bash
yarn install
yarn dev  # development server
```

## Build & Start
```bash
yarn build  # production build
yarn start  # start SSR server
```

## Deployment on Vercel
- Framework: Nuxt.js
- Build: `yarn build`
- Output: `.nuxt/dist` (default)
- Push repo to GitHub and import in Vercel

## Environment Variables
Create `.env` file (not committed to Git) for secrets:
```
API_KEY=your_api_key_here
```

## Notes
- `.nuxt/` and `.output/` are ignored in Git
- Ready for SSR deployment on Vercel

