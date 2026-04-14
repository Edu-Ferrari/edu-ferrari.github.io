// ─────────────────────────────────────────────────────────────────────────────
// About.jsx
// About Me section with photo grid and bio text.
// Photos: place your images in src/assets/ and import them below.
// ─────────────────────────────────────────────────────────────────────────────

import { forwardRef } from "react";
import FadeIn from "./FadeIn";
import "../styles/About.css";
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.JPG";

const About = forwardRef(function About({ t }, ref) {
  return (
    <section className="about-section" ref={ref}>
      <div className="about-inner">

        {/* Photo grid */}
        <FadeIn delay={0.1}>
          <div className="about-photos">
            <div className="photo-slot photo-slot--wide">
              { 
                  <img src={photo1} alt="Eduardo Ferrari" />
              }
              <div className="photo-placeholder">Photo 1</div>
            </div>
            <div className="photo-slot">
              { <img src={photo2} alt="Eduardo Ferrari" /> }
              <div className="photo-placeholder">Photo 2</div>
            </div>
            <div className="photo-slot">
              { <img src={photo3} alt="Eduardo Ferrari" /> }
              <div className="photo-placeholder">Photo 3</div>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.3}>
          <div className="about-text-block">
            <p className="section-label">{t.title}</p>
            <h2 className="section-title">Eduardo Ferrari</h2>
            {t.text.map((paragraph, i) => (
              <p key={i} className="about-para">{paragraph}</p>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
});

export default About;
