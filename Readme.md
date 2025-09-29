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

