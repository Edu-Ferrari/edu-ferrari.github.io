// ─────────────────────────────────────────────────────────────────────────────
// Navbar.jsx
// Fixed top navigation with smooth-scroll links and EN/PT toggle.
// ─────────────────────────────────────────────────────────────────────────────

import "../styles/Navbar.css";

export default function Navbar({ t, lang, setLang, refs, navScrolled }) {
  const { homeRef, aboutRef, projectsRef, contactRef } = refs;
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className={`nav${navScrolled ? " scrolled" : ""}`}>
      <span className="nav-brand">EF</span>

      <div className="nav-center">
        <button className="nav-btn" onClick={() => scrollTo(homeRef)}>{t.home}</button>
        <button className="nav-btn" onClick={() => scrollTo(aboutRef)}>{t.about}</button>
        <button className="nav-btn" onClick={() => scrollTo(projectsRef)}>{t.projects}</button>
        <button className="nav-btn" onClick={() => scrollTo(contactRef)}>{t.contact}</button>
      </div>

      <div className="lang-group">
        <button
          className={`lang-pill${lang === "en" ? " active" : ""}`}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <button
          className={`lang-pill${lang === "pt" ? " active" : ""}`}
          onClick={() => setLang("pt")}
        >
          PT
        </button>
      </div>
    </nav>
  );
}
