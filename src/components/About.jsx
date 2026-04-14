// ─────────────────────────────────────────────────────────────────────────────
// About.jsx
// About Me section with photo grid and bio text.
// Photos: place your images in src/assets/ and import them below.
// ─────────────────────────────────────────────────────────────────────────────

import { forwardRef, useState } from "react";
import FadeIn from "./FadeIn";
import "../styles/About.css";
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.JPG";

const photos = [photo1, photo2, photo3];

const About = forwardRef(function About({ t }, ref) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <section className="about-section" ref={ref}>
      <div className="about-inner">

        {/* Photo carousel */}
        <FadeIn delay={0.1}>
          <div className="photo-carousel">

            {/* Botão esquerdo */}
            <button className="carousel-arrow carousel-arrow--left" onClick={prev}>
              &#8249;
            </button>

            {/* Imagem atual */}
            <div className="carousel-img-wrapper">
              {photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`Eduardo Ferrari ${i + 1}`}
                  className={`carousel-img${i === current ? " carousel-img--active" : ""}`}
                />
              ))}
            </div>

            {/* Botão direito */}
            <button className="carousel-arrow carousel-arrow--right" onClick={next}>
              &#8250;
            </button>

            {/* Dots */}
            <div className="carousel-dots">
              {photos.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === current ? " carousel-dot--active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
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
