// ─────────────────────────────────────────────────────────────────────────────
// ProjectCard.jsx
// Single project card with image placeholder, tag, title, description & link.
// ─────────────────────────────────────────────────────────────────────────────

import FadeIn from "./FadeIn";
import { ExternalLink } from "./Icons";
import "../styles/ProjectCard.css";

export default function ProjectCard({ project, lang, viewProjectLabel, delay }) {
  const title = lang === "pt" ? project.titlePt : project.titleEn;
  const desc  = lang === "pt" ? project.descPt  : project.descEn;

  return (
    <FadeIn delay={delay}>
      <div className="project-card">

        {/* Image area — replace .project-placeholder-img with a real <img> */}
        <div className="project-card-img-area">
          {project.image ? (
            <img src={project.image} alt={title} className="project-real-img" />
          ) : (
            <div className="project-placeholder-img" aria-hidden="true" />
          )}
        </div>

        <div className="project-card-body">
          <span className="project-tag">{project.tag}</span>
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{desc}</p>
          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            {viewProjectLabel} <ExternalLink />
          </a>
        </div>

      </div>
    </FadeIn>
  );
}
