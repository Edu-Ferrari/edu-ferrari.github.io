import { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import translations  from "./data/translations";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Projects      from "./components/Projects";
import Contact       from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

// ── Portfolio (single page) ───────────────────────────────────────────────
function Portfolio({ lang, setLang }) {
  const [navScrolled, setNavScrolled] = useState(false);

  const homeRef     = useRef(null);
  const aboutRef    = useRef(null);
  const projectsRef = useRef(null);
  const contactRef  = useRef(null);

  const t = translations[lang];

  useEffect(() => {
    const container = document.getElementById("scroll-root");
    if (!container) return;
    const onScroll = () => setNavScrolled(container.scrollTop > 40);
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar
        t={t.nav}
        lang={lang}
        setLang={setLang}
        navScrolled={navScrolled}
        refs={{ homeRef, aboutRef, projectsRef, contactRef }}
      />
      <div id="scroll-root">
        <Hero
          ref={homeRef}
          t={t.hero}
          onCtaClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
        />
        <About ref={aboutRef} t={t.about} />
        <Projects ref={projectsRef} t={t.projects} lang={lang} />
        <Contact ref={contactRef} t={t.contact} />
      </div>
    </>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Portfolio lang={lang} setLang={setLang} />} />
        <Route path="/project/:id" element={<ProjectDetail lang={lang} />} />
      </Routes>
    </BrowserRouter>
  );
}
