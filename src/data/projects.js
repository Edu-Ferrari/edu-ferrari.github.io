// ─────────────────────────────────────────────────────────────────────────────
// projects.js
// ─────────────────────────────────────────────────────────────────────────────

import clarifyImg       from '../assets/clairfy.jpg';
import zoomiesImg       from '../assets/zoomies.png';
import dirtyDogsImg     from '../assets/dirtyDogs2.png';
import coffeeOverflowImg from '../assets/coffeeOverflow5.jpg';
import javaImg from '../assets/javaSpring.png';

export const swiftProjects = [
  {
    id: 1,
    titleEn: "Clarify",
    titlePt: "Clarify",
    descEn: "An app created to make communication between doctors and patients clearer and more efficient.",
    descPt: "Aplicativo desenvolvido para tornar a comunicação entre médicos e pacientes mais clara e eficiente.",
    fullDescEn: "An app created to make communication between doctors and patients clearer and more efficient. It was a remarkable project because it delivered real impact to people's lives and was presented at the Apple Developer Academy 2025 Showcase at Tecnopuc.",
    fullDescPt: "Aplicativo desenvolvido para tornar a comunicação entre médicos e pacientes mais clara e eficiente. Foi um projeto marcante por gerar impacto real na vida das pessoas e por ter sido apresentado no Showcase da Apple Developer Academy 2025, na Tecnopuc.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "UIKit / APIService / MVVM",
    technologies: ["UIKit", "Swift", "REST API", "MVVM"],
    image: clarifyImg,
    images: [],
    team: [
      { name: "Leonardo",  role: "Designer",   linkedin: "https://www.linkedin.com/in/leonardosimon/" },
      { name: "Pablo",     role: "Developer",  linkedin: "https://www.linkedin.com/in/pablogarciadev/" },
      { name: "Bernardo",  role: "Developer",  linkedin: "https://www.linkedin.com/in/bernardofens/" },
      { name: "Andrei",    role: "Developer",  linkedin: "https://www.linkedin.com/in/rechandrei/" },
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
  {
    id: 2,
    titleEn: "CoffeeOverflow",
    titlePt: "CoffeeOverflow",
    descEn: "An arcade game built with SpriteKit, focused on reflexes, balance, and precision.",
    descPt: "Jogo arcade desenvolvido com SpriteKit, focado em reflexo, equilíbrio e precisão.",
    fullDescEn: "An arcade game built with SpriteKit, focused on reflexes, balance, and precision. The main challenge was building a solid architecture in a short time using MVVM and ECS, while also implementing monetization and structuring the game as a more complete and scalable product.",
    fullDescPt: "Jogo arcade desenvolvido com SpriteKit, focado em reflexo, equilíbrio e precisão. O principal desafio foi construir, em pouco tempo, uma arquitetura sólida baseada em MVVM e ECS, além de implementar monetização e estruturar o jogo como um produto mais completo e escalável.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "SpriteKit / MVVM / ECS",
    technologies: ["Swift", "SpriteKit", "MVVM", "ECS"],
    image: coffeeOverflowImg,
    images: [],
    team: [
      { name: "Leonardo",  role: "Designer",   linkedin: "https://www.linkedin.com/in/leonardosimon/" },
      { name: "Guilherme", role: "Developer",  linkedin: "https://www.linkedin.com/in/guilhermeghise/" },
      { name: "Pablo",     role: "Developer",  linkedin: "https://www.linkedin.com/in/pablogarciadev/" },
      { name: "Jean",      role: "Developer",  linkedin: "https://www.linkedin.com/in/jeanpierrerodrigues" },
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
  {
    id: 3,
    titleEn: "Zoomies",
    titlePt: "Zoomies",
    descEn: "A gamified health app that uses HealthKit to turn real-life walking and running into in-game progress.",
    descPt: "Aplicativo gamificado de saúde que utiliza HealthKit para transformar caminhadas e corridas reais em progresso dentro do jogo.",
    fullDescEn: "A gamified health app that uses HealthKit to turn real-life walking and running into in-game progress. The main highlight of the project was the complexity of the data architecture required to support gamification, goals, achievements, customization, and health data integration.",
    fullDescPt: "Aplicativo gamificado de saúde que utiliza HealthKit para transformar caminhadas e corridas reais em progresso dentro do jogo. O grande destaque do projeto foi a complexidade da arquitetura de dados necessária para sustentar gamificação, metas, conquistas, personalização e integração com dados de saúde.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "SwiftUI / HealthKit",
    technologies: ["SwiftUI", "Swift", "HealthKit"],
    image: zoomiesImg,
    images: [],
    team: [
      { name: "Gabriel",   role: "Developer",  linkedin: "https://www.linkedin.com/in/gabriel-cabreira-barbosa-972ba8247/" },
      { name: "Leonel",    role: "Developer",  linkedin: "https://www.linkedin.com/in/leonelhernandezs/" },
      { name: "Guilherme", role: "Developer",  linkedin: "https://www.linkedin.com/in/guilhermeghise/" },
      { name: "Giovana",   role: "Designer",   linkedin: "https://www.linkedin.com/in/giovanahrebello/" },
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
  {
    id: 4,
    titleEn: "DirtyDogs",
    titlePt: "DirtyDogs",
    descEn: "A multiplayer game where two dogs race to find the bone first.",
    descPt: "Jogo multiplayer onde dois cachorros disputam para encontrar o osso primeiro.",
    fullDescEn: "A multiplayer game built from a creative concept inspired by \"finding a needle in a haystack,\" transformed into a fun and competitive experience where two dogs race to find the bone first. The main highlight of the project was the Game Center online integration, the extensive use of haptics, and the challenge of making the whole experience feel cohesive, creative, and fun.",
    fullDescPt: "Jogo multiplayer criado a partir de uma proposta criativa inspirada na ideia de \"achar uma agulha no palheiro\", transformada em uma experiência divertida e competitiva onde dois cachorros disputam para encontrar o osso primeiro. O grande destaque do projeto foi a integração com Game Center para conexão online, o uso intenso de haptics e o desafio de tornar toda a experiência coesa, criativa e divertida.",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "SwiftUI / GameCenter / Haptics",
    technologies: ["SwiftUI", "Swift", "GameCenter", "Haptics"],
    image: dirtyDogsImg,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
      { name: "Isadora", role: "Developer",  linkedin: "https://www.linkedin.com/in/isadoraferreiraguerra/" },
      { name: "Pedro",   role: "Designer",   linkedin: "https://www.linkedin.com/in/pedro-kosciuk-lima-a29855207/" },
      { name: "Andrei",  role: "Developer",  linkedin: "https://www.linkedin.com/in/rechandrei/" },
    ],
  },
];

export const javaProjects = [
  {
    id: 5,
    titleEn: "E-commerce Back-end",
    titlePt: "E-commerce Back-end",
    descEn: "Incoming project...",
    descPt: "Projeto em andamento...",
    fullDescEn: "Incoming project...",
    fullDescPt: "Projeto em andamento...",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "Spring Boot",
    technologies: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    image: javaImg,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
  {
    id: 6,
    titleEn: "Bank Back-end",
    titlePt: "Bank Back-end",
    descEn: "Incoming project...",
    descPt: "Projeto em andamento...",
    fullDescEn: "Incoming project...",
    fullDescPt: "Projeto em andamento...",
    link: "#",
    linkLabel: "View on GitHub →",
    tag: "Spring Boot",
    technologies: ["Java", "Spring Boot", "JPA", "MySQL"],
    image: javaImg,
    images: [],
    team: [
      { name: "Eduardo Ferrari", role: "Developer", linkedin: "https://www.linkedin.com/in/edurferrari/" },
    ],
  },
];