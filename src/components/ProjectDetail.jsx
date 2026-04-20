// ─────────────────────────────────────────────────────────────────────────────
// ProjectDetail.jsx
// Página de detalhe de cada projeto. Acessada via /project/:id
// ─────────────────────────────────────────────────────────────────────────────

import { useParams, useNavigate } from "react-router-dom";
import { swiftProjects, javaProjects } from "../data/projects";
import "../styles/ProjectDetail.css";

const allProjects = [...swiftProjects, ...javaProjects];

export default function ProjectDetail({ lang }) {
  const { id }   = useParams();
  const navigate = useNavigate();

  const project = allProjects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="pd-not-found">
        <p>Project not found.</p>
        <button onClick={() => navigate(-1)}>← Go back</button>
      </div>
    );
  }

  const title    = lang === "pt" ? project.titlePt    : project.titleEn;
  const desc     = lang === "pt" ? project.descPt     : project.descEn;
  const fullDesc = lang === "pt" ? project.fullDescPt : project.fullDescEn;

  return (
    <div className="pd-page">

      {/* Back button */}
      <button className="pd-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="pd-inner">

        {/* Hero image */}
        <div className="pd-hero-img">
          {project.image ? (
            <img src={project.image} alt={title} />
          ) : (
            <div className="pd-img-placeholder" />
          )}
        </div>

        {/* Content */}
        <div className="pd-content">
          <span className="pd-tag">{project.tag}</span>
          <h1 className="pd-title">{title}</h1>
          <p className="pd-desc">{fullDesc || desc}</p>

          {/* Extra images (screenshots etc.) */}
          {project.images && project.images.length > 0 && (
            <div className="pd-gallery">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${title} screenshot ${i + 1}`} className="pd-gallery-img" />
              ))}
            </div>
          )}

          {/* Link */}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="pd-cta"
            >
              {project.linkLabel || "View Project →"}
            </a>
          )}
        </div>

      </div>
    </div>
  );
}