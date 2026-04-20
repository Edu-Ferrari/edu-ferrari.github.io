// ─────────────────────────────────────────────────────────────────────────────
// projects.js
// Campos disponíveis:
//   technologies  → array de strings ex: ["SwiftUI", "HealthKit"]
//   team          → array de { name, role, linkedin }
//   images        → array de screenshots importados ex: [img1, img2]
//   fullDescEn/Pt → descrição longa para a página de detalhe
//   linkLabel     → texto do botão de link
// ─────────────────────────────────────────────────────────────────────────────

export const swiftProjects = [
  {
    id: 1,
    titleEn: "Clarify",
    titlePt: "Clarify",
    descEn: "Short description of Clarify. Replace with real content.",
    descPt: "Descrição curta do Clarify. Substitua pelo conteúdo real.",
    fullDescEn: "Full description of Clarify — explain the problem it solves, your role, and key learnings. Replace with real content.",
    fullDescPt: "Descrição completa do Clarify — explique o problema que resolve, seu papel e aprendizados. Substitua pelo conteúdo real.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "UIKit / APIService / MVVM",
    technologies: ["UIKit", "Swift", "REST API", "MVVM"],
    image: null,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
      // { name: "Team Member", role: "Designer", linkedin: "https://linkedin.com/in/..." },
    ],
  },
  {
    id: 2,
    titleEn: "CoffeeOverflow",
    titlePt: "CoffeeOverflow",
    descEn: "Short description of CoffeeOverflow. Replace with real content.",
    descPt: "Descrição curta do CoffeeOverflow. Substitua pelo conteúdo real.",
    fullDescEn: "Full description of CoffeeOverflow. Replace with real content.",
    fullDescPt: "Descrição completa do CoffeeOverflow. Substitua pelo conteúdo real.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "SwiftUI / GameCenter",
    technologies: ["SwiftUI", "Swift", "GameCenter"],
    image: null,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
  {
    id: 3,
    titleEn: "Zoomies",
    titlePt: "Zoomies",
    descEn: "Short description of Zoomies. Replace with real content.",
    descPt: "Descrição curta do Zoomies. Substitua pelo conteúdo real.",
    fullDescEn: "Full description of Zoomies. Replace with real content.",
    fullDescPt: "Descrição completa do Zoomies. Substitua pelo conteúdo real.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "SwiftUI / HealthKit",
    technologies: ["SwiftUI", "Swift", "HealthKit"],
    image: null,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
  {
    id: 4,
    titleEn: "DirtyDogs",
    titlePt: "DirtyDogs",
    descEn: "Short description of DirtyDogs. Replace with real content.",
    descPt: "Descrição curta do DirtyDogs. Substitua pelo conteúdo real.",
    fullDescEn: "Full description of DirtyDogs. Replace with real content.",
    fullDescPt: "Descrição completa do DirtyDogs. Substitua pelo conteúdo real.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "SwiftUI / HealthKit",
    technologies: ["SwiftUI", "Swift", "HealthKit"],
    image: null,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
];

export const javaProjects = [
  {
    id: 5,
    titleEn: "E-commerce Back-end",
    titlePt: "E-commerce Back-end",
    descEn: "Short description of the E-commerce Back-end. Replace with real content.",
    descPt: "Descrição curta do E-commerce Back-end. Substitua pelo conteúdo real.",
    fullDescEn: "Full description of the E-commerce Back-end. Replace with real content.",
    fullDescPt: "Descrição completa do E-commerce Back-end. Substitua pelo conteúdo real.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "Spring Boot",
    technologies: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    image: null,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
  {
    id: 6,
    titleEn: "Bank Back-end",
    titlePt: "Bank Back-end",
    descEn: "Short description of the Bank Back-end. Replace with real content.",
    descPt: "Descrição curta do Bank Back-end. Substitua pelo conteúdo real.",
    fullDescEn: "Full description of the Bank Back-end. Replace with real content.",
    fullDescPt: "Descrição completa do Bank Back-end. Substitua pelo conteúdo real.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "Spring Boot",
    technologies: ["Java", "Spring Boot", "JPA", "MySQL"],
    image: null,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
];