// ─────────────────────────────────────────────────────────────────────────────
// Projects.jsx
// Projects section with Swift / Java Spring Boot tab switcher.
// ─────────────────────────────────────────────────────────────────────────────

import { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeIn from "./FadeIn";
import { swiftProjects, javaProjects } from "../data/projects";
import "../styles/Projects.css";

const Projects = forwardRef(function Projects({ t, lang }, ref) {
  const [activeTab, setActiveTab] = useState("swift");
  const navigate = useNavigate();

  const projects = activeTab === "swift" ? swiftProjects : javaProjects;

  return (
    <section className="projects-section" ref={ref}>
      <div className="projects-inner">

        {/* Header */}
        <div className="projects-header">
          <FadeIn>
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="section-title">{t.title}</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="tabs">
              <button
                className={`tab-btn${activeTab === "swift" ? " active-swift" : ""}`}
                onClick={() => setActiveTab("swift")}
              >
                <span className="tab-dot dot-swift" />
                {t.tabs.swift}
              </button>
              <button
                className={`tab-btn${activeTab === "java" ? " active-java" : ""}`}
                onClick={() => setActiveTab("java")}
              >
                <span className="tab-dot dot-java" />
                {t.tabs.java}
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Horizontal scroll */}
        <div className="projects-scroll-track">
          {projects.map((project) => {
            const title = lang === "pt" ? project.titlePt : project.titleEn;
            const desc  = lang === "pt" ? project.descPt  : project.descEn;
            return (
              <div
                key={project.id}
                className="project-card"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="project-card-img-area">
                  {project.image ? (
                    <img src={project.image} alt={title} className="project-real-img" />
                  ) : (
                    <div className="project-placeholder-img" />
                  )}
                </div>
                <div className="project-card-body">
                  <span className="project-tag">{project.tag}</span>
                  <h3 className="project-title">{title}</h3>
                  <p className="project-desc">{desc}</p>
                  <span className="project-link">{t.viewProject}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

export default Projects;