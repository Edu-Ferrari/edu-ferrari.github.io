// ─────────────────────────────────────────────────────────────────────────────
// Hero.jsx
// Full-screen landing section with animated name and CTA.
// ─────────────────────────────────────────────────────────────────────────────

import { forwardRef } from "react";
import { ChevronDown } from "./Icons";
import "../styles/Hero.css";

const Hero = forwardRef(function Hero({ t, onCtaClick }, ref) {
  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg" />
      <p className="hero-eyebrow">{t.tagline}</p>
      <h1 className="hero-name">{t.name}</h1>
      <p className="hero-tagline">{t.sub}</p>
      <button className="hero-cta" onClick={onCtaClick}>
        {t.cta}
      </button>
      <div className="scroll-hint">
        <ChevronDown />
      </div>
    </section>
  );
});

export default Hero;
