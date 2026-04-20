// ─────────────────────────────────────────────────────────────────────────────
// ProjectDetail.jsx
// Página de detalhe de cada projeto — inspirada na referência fornecida.
// Acesso via /project/:id
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { swiftProjects, javaProjects } from "../data/projects";
import "../styles/ProjectDetail.css";

const allProjects = [...swiftProjects, ...javaProjects];

// ── Carousel de screenshots ───────────────────────────────────────────────────
function ScreenshotCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="pd-carousel">
      <div className="pd-carousel-track">
        {images.map((img, i) => (
          <div
            key={i}
            className={`pd-carousel-slide${i === current ? " active" : ""}`}
          >
            <img src={img} alt={`Screenshot ${i + 1}`} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="pd-carousel-arrow pd-carousel-arrow--left" onClick={prev}>&#8249;</button>
          <button className="pd-carousel-arrow pd-carousel-arrow--right" onClick={next}>&#8250;</button>
          <div className="pd-carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`pd-carousel-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Team card ─────────────────────────────────────────────────────────────────
function TeamCard({ member }) {
  return (
    <a
      href={member.linkedin || "#"}
      target="_blank"
      rel="noreferrer"
      className="pd-team-card"
    >
      <div className="pd-team-card-top">
        <span className="pd-member-name">{member.name}</span>
        <span className="pd-member-arrow">↗</span>
      </div>
      <span className={`pd-member-role pd-member-role--${member.role?.toLowerCase()}`}>
        {member.role}
      </span>
    </a>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ProjectDetail({ lang }) {
  const { id }   = useParams();
  const navigate = useNavigate();

  const currentIdx = allProjects.findIndex((p) => String(p.id) === String(id));
  const project    = allProjects[currentIdx];

  const canGoPrev = currentIdx > 0;
  const canGoNext = currentIdx < allProjects.length - 1;

  const goPrev = () => navigate(`/project/${allProjects[currentIdx - 1].id}`);
  const goNext = () => navigate(`/project/${allProjects[currentIdx + 1].id}`);

  // Scroll to top when project changes
  useEffect(() => { window.scrollTo({ top: 0 }); }, [id]);

  if (!project) {
    return (
      <div className="pd-not-found">
        <p>Project not found.</p>
        <button onClick={() => navigate("/")}>← Go back</button>
      </div>
    );
  }

  const title    = lang === "pt" ? project.titlePt    : project.titleEn;
  const desc     = lang === "pt" ? project.descPt     : project.descEn;
  const fullDesc = lang === "pt" ? project.fullDescPt : project.fullDescEn;

  return (
    <div className="pd-page">

      {/* ── Side arrows ── */}
      {canGoPrev && (
        <button className="pd-side-arrow pd-side-arrow--left" onClick={goPrev}>
          &#8249;
        </button>
      )}
      {canGoNext && (
        <button className="pd-side-arrow pd-side-arrow--right" onClick={goNext}>
          &#8250;
        </button>
      )}

      {/* ── Back button ── */}
      <button className="pd-back" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="pd-inner">

        {/* ── HERO ── */}
        <div className="pd-hero">
          <div className="pd-hero-glow" />

          {/* Imagem pequena do projeto */}
          <div className="pd-hero-img">
            {project.image ? (
              <img src={project.image} alt={title} />
            ) : (
              <div className="pd-hero-img-placeholder" />
            )}
          </div>

          <span className="pd-tag">{project.tag}</span>
          <h1 className="pd-title">{title}</h1>
          <p className="pd-short-desc">{desc}</p>

          {/* Tech pills */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="pd-tech-pills">
              {project.technologies.map((tech) => (
                <span key={tech} className="pd-tech-pill">{tech}</span>
              ))}
            </div>
          )}

          {/* Link button */}
          {project.link && project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noreferrer" className="pd-cta">
              {project.linkLabel || "View Project →"}
            </a>
          )}
        </div>

        {/* ── ABOUT ── */}
        <div className="pd-section">
          <span className="pd-section-label">About</span>
          <p className="pd-full-desc">{fullDesc || desc}</p>
        </div>

        {/* ── SCREENSHOTS ── */}
        {project.images && project.images.length > 0 && (
          <div className="pd-section">
            <span className="pd-section-label">Screenshots</span>
            <ScreenshotCarousel images={project.images} />
          </div>
        )}

        {/* ── TECHNOLOGIES ── */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="pd-section">
            <span className="pd-section-label">Technologies</span>
            <div className="pd-tech-grid">
              {project.technologies.map((tech) => (
                <div key={tech} className="pd-tech-item">{tech}</div>
              ))}
            </div>
          </div>
        )}

        {/* ── TEAM ── */}
        {project.team && project.team.length > 0 && (
          <div className="pd-section">
            <span className="pd-section-label">Team</span>
            <div className="pd-team-grid">
              {project.team.map((member, i) => (
                <TeamCard key={i} member={member} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}