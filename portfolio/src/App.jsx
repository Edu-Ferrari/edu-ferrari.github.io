// ─────────────────────────────────────────────────────────────────────────────
// App.jsx
// Root component. Holds language state, section refs, and scroll detection.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from "react";

import translations  from "./data/translations";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Projects      from "./components/Projects";
import Contact       from "./components/Contact";

export default function App() {
  const [lang, setLang]           = useState("en");
  const [navScrolled, setNavScrolled] = useState(false);

  const homeRef     = useRef(null);
  const aboutRef    = useRef(null);
  const projectsRef = useRef(null);
  const contactRef  = useRef(null);

  const t = translations[lang];

  // ── Detect scroll to apply frosted-glass nav style ──────────────────────
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

        <About
          ref={aboutRef}
          t={t.about}
        />

        <Projects
          ref={projectsRef}
          t={t.projects}
          lang={lang}
        />

        <Contact
          ref={contactRef}
          t={t.contact}
          tCv={t.cv}
        />
      </div>
    </>
  );
}
