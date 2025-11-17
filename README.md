## React + TypeScript Company Website
<br>[![Status](https://img.shields.io/badge/status-live-green.svg)](https://www.asset.ba)  ![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=flat&logo=react&logoColor=white)  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat&logo=typescript&logoColor=white)  ![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?style=flat&logo=vite&logoColor=white)
<br>

A professional, responsive website for AssetFin, a local accounting and business advisory agency. The site is live and implemented as a modern frontend application using React and TypeScript with Mantine for UI, and Vite for development.

**Live Site**: https://www.asset.ba

---

## Overview

This repo contains the production frontend for AssetFin. It is a single-page React application (TypeScript) that presents services, company information, contact details and other useful info. The design is custom and uses Mantine components together with scoped CSS Modules to achieve a consistent visual identity.

---

## Features

### UX & Accessibility
- Responsive pages and optimized content for fast loading
- Accessible navigation and focusable controls via Mantine components
- Mobile-first responsive layout
- Smooth scrolling and anchor linking for in-page navigation
- Clean, original design implemented with CSS Modules and Mantine themes

---

## Technologies used

**Frontend:** React 19, TypeScript, Vite 7 <br>
![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=flat&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?style=flat&logo=vite&logoColor=white)

**UI & Styling:** Mantine, Tabler Icons, PostCSS, CSS Modules <br>

---

## Project structure
```
asset/
├─ public/
├─ src/
│  ├─ assets/           # images & logos
│  ├─ components/       # Header, Footer, Hero, Contact, Features, Stats, FAQ
│  ├─ css/              # CSS Modules per component
│  ├─ pages/            # Home.tsx, Services.tsx, Contact.tsx
│  ├─ App.tsx
│  └─ main.tsx
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ postcss.config.cjs
```

This repo is a frontend-only project focused on presenting services and contact information for the company.

---

## Deployment

Live site at **https://www.asset.ba**. The repo contains a production-ready static build target (`dist/`). The build can be served by any static hosting provider.

---