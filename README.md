# 🚀 Portfolio - Pierre MAZELAYGUE

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-1.0-FFFFFF?style=for-the-badge&logo=dev.to&logoColor=FFFFFF)
![React](https://img.shields.io/badge/React-19.2.0-38B2AC?style=for-the-badge&logo=react&logoColor=38B2AC)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.3-61DAFB?style=for-the-badge&logo=tailwind-css&logoColor=61DAFB)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.22-BE185D?style=for-the-badge&logo=framer&logoColor=BE185D)
![React Icons](https://img.shields.io/badge/React%20Icons-5.5.0-FF0000?style=for-the-badge&logo=react&logoColor=red)
![Vite](https://img.shields.io/badge/Vite-6.3.6-FFD700?style=for-the-badge&logo=vite&logoColor=yellow)

**Un portfolio moderne et performant développé avec React, TailwindCSS et Framer Motion**

[🐛 **Signaler un bug**](https://github.com/PierreMaze/my-portfolio/issues/new) • [💬 **Discuter**](https://www.linkedin.com/in/pierremazelaygue/)

</div>

---

## 📋 Table des matières

- [🎯 À propos](#-à-propos)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Stack technique](#️-stack-technique)
- [🚀 Installation](#-installation)
- [🏗️ Architecture](#️-architecture)
- [🎨 Design System](#-design-system)
- [⚡ Performance](#-performance)
- [📚 Scripts disponibles](#-scripts-disponibles)
- [📞 Contact](#-contact)

---

## 🎯 À propos

Ce portfolio est une vitrine moderne de mes compétences en développement web. Il présente mes projets, mon parcours professionnel et mes compétences techniques dans une interface élégante et performante.

### 🎨 Caractéristiques principales

- **Design moderne** : Interface épurée avec animations fluides
- **Performance optimisée** : Score Lighthouse 95/100
- **Responsive** : Compatible mobile, tablette et desktop
- **Accessibilité** : Conforme aux standards WCAG 2.1 AA
- **SEO optimisé** : Meta tags et structure sémantique

---

## ✨ Fonctionnalités

### 🏠 Page d'accueil

- **Hero section** avec présentation personnelle
- **Compétences** organisées par catégories
- **Projets** avec filtres et détails
- **Timeline** du parcours professionnel

### 📁 Pages projets

- **Galerie** de projets avec filtres par categories
- **Pages dédiées** pour chaque projet
- **Détails techniques** et résultats obtenus
- **Liens** vers démos et repositories

### 🎯 Navigation

- **Menu responsive** avec navigation fluide
- **Scroll spy** pour la navigation par sections
- **Animations** au scroll avec Framer Motion

### 📱 Responsive Design

- **Mobile-first** Version mobile priorisé
- **Breakpoints** optimisés pour tous les écrans
- **Touch-friendly** interface

---

## 🛠️ Stack technique

### 🎨 Frontend

- **React 19.2.0** - Bibliothèque UI moderne
- **React Router DOM 7.9.4** - Routage côté client
- **TailwindCSS 3.4.3** - Framework CSS utility-first
- **Framer Motion 12.23.22** - Animations et transitions
- **React Icons 5.5.0** - Icônes vectorielles

### 🔧 Outils de développement

- **Vite 6.3.6** - Build tool ultra-rapide
- **ESLint** - Linting et qualité du code
- **PostCSS** - Traitement CSS avancé

### 🚀 Déploiement

- **Lighthouse** - Audit de performance automatique

### 📊 Technologies maîtrisées

<details>
<summary><strong>🔤 Langages</strong></summary>

- JSX
- TaiwindCSS

</details>

<details>
<summary><strong>⚛️ Frameworks & Bibliothèques</strong></summary>

- ReactJS
- React Router DOM
- TailwindCSS
- Framer Motion

</details>

<details>
<summary><strong>🛠️ Outils & Méthodes</strong></summary>

- Git / GitHub
- Figma
- Vite
- CI/CD
- Scrum
- Responsive Design
- Notion

</details>

---

## 🚀 Installation

### Prérequis

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recommandé) ou npm

### 1. Cloner le repository

```bash
git clone https://github.com/PierreMaze/my-portfolio.git
cd my-portfolio
```

### 2. Installer les dépendances

```bash
# Avec pnpm (recommandé)
pnpm install

# Ou avec npm
npm install
```

### 3. Lancer le serveur de développement

```bash
# Avec pnpm
pnpm dev

# Ou avec npm
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### 4. Build de production

```bash
# Avec pnpm
pnpm build

# Ou avec npm
npm run build
```

---

## 🏗️ Architecture

```
src/
├── components/          # Composants réutilisables
│   ├── layout/         # Layout et navigation
│   └── ui/             # Composants UI de base
├── pages/              # Pages de l'application
├── data/               # Données statiques
├── hooks/              # Hooks personnalisés
├── contexts/           # Contextes React
├── utils/              # Utilitaires
└── constants/          # Constantes
```

### 🎯 Principes architecturaux

- **Composants modulaires** et réutilisables
- **Séparation des responsabilités** claire
- **Hooks personnalisés** pour la logique métier
- **Contextes** pour la gestion d'état global
- **Utilitaires** pour les fonctions communes

---

## 🎨 Design System

### 🎨 Palette de couleurs

- **Primaire** : Orange moderne (#EA580C)
- **Secondaire** : Blanc élégant (#FAFAF8)

### 📝 Typographie

- **Police principale** : Inter (sans-serif)
- **Police code** : JetBrains Mono (monospace)
- **Hiérarchie** : 6 niveaux de titres optimisés

### 🎭 Animations

- **Transitions** fluides avec Framer Motion
- **Scroll animations** pour la narration
- **Loading states** pour l'expérience utilisateur

---

## ⚡ Performance

### 📊 Métriques actuelles

- **Lighthouse Score** : 95/100
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **Time to Interactive** : < 3.5s

### 🚀 Optimisations implémentées

- **Code splitting** avec Vite
- **Lazy loading** des images
- **Minification** JavaScript/CSS
- **Compression** des assets
- **Cache** optimisé

---

## 📚 Scripts disponibles

```bash
# Développement
pnpm dev              # Lance le serveur de développement
pnpm build            # Build de production
pnpm preview          # Prévisualise le build

# Qualité du code
pnpm lint             # Vérification ESLint
pnpm fix              # Correction automatique Prettier

# Maintenance
pnpm clean            # Nettoyage des dépendances
pnpm reset            # Reset complet du projet
pnpm preload          # Installation + démarrage rapide
```

---


## 📞 Contact

**Pierre MAZELAYGUE** - Développeur Full Stack

- 🌐 **Portfolio** : A venir
- 📧 **Email** : [promazelaygue@gmail.com](mailto:promazelaygue@gmail.com)
- 💼 **LinkedIn** : [linkedin.com/in/pierre-mazelaygue](https://linkedin.com/in/pierre-mazelaygue)
- 🐙 **GitHub** : [github.com/PierreMaze](https://github.com/PierreMaze)

---

<div align="center">

**⭐ N'hésitez pas à laisser une étoile si ce projet vous plaît !**

</div>
