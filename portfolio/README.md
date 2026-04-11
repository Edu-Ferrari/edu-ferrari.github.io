# Eduardo Ferrari — Portfolio

Personal portfolio built with React. Neon blue + pink design, bilingual (EN/PT).

## 🚀 Getting Started

```bash
npm install
npm start
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html          ← HTML shell
│   ├── favicon.ico         ← Replace with your favicon
│   ├── logo192.png         ← Replace with your logo
│   ├── logo512.png         ← Replace with your logo
│   ├── manifest.json
│   ├── robots.txt
│   └── resume.pdf          ← ⚠️  Add your CV here
│
└── src/
    ├── assets/             ← ⚠️  Add your photos here
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   ├── photo3.jpg
    │   └── (project images...)
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Projects.jsx
    │   ├── ProjectCard.jsx
    │   ├── Contact.jsx
    │   ├── ContactForm.jsx
    │   ├── CVModal.jsx
    │   ├── FadeIn.jsx
    │   └── Icons.jsx
    │
    ├── data/
    │   ├── translations.js  ← EN / PT strings
    │   └── projects.js      ← ⚠️  Add your project info + links here
    │
    ├── hooks/
    │   └── useInView.js
    │
    ├── styles/
    │   ├── variables.css    ← Design tokens (colors, fonts)
    │   ├── global.css       ← Reset + shared rules
    │   ├── Navbar.css
    │   ├── Hero.css
    │   ├── About.css
    │   ├── Projects.css
    │   ├── ProjectCard.css
    │   ├── Contact.css
    │   ├── ContactForm.css
    │   └── CVModal.css
    │
    ├── App.jsx              ← Root component
    ├── index.js             ← React entry point
    ├── index.css            ← Imports variables + global CSS
    └── reportWebVitals.js
```

## ✏️ Customising

### Add your photos (About section)
1. Copy your images into `src/assets/`
2. Open `src/components/About.jsx`
3. Uncomment the import lines and replace the `<div className="photo-placeholder">` blocks with `<img>` tags

### Add your projects
Open `src/data/projects.js` and fill in `titleEn`, `titlePt`, `descEn`, `descPt`, `link`, `tag`, and `image` for each project.

### Add your CV
Place `resume.pdf` inside `public/`.

### Change colours
All design tokens live in `src/styles/variables.css`.

## 🛠 Build for production

```bash
npm run build
```
