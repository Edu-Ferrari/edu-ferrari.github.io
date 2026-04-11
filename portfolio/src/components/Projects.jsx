// ─────────────────────────────────────────────────────────────────────────────
// Projects.jsx
// Projects section with Swift / Java Spring Boot tab switcher.
// ─────────────────────────────────────────────────────────────────────────────

import { forwardRef, useState } from "react";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { swiftProjects, javaProjects } from "../data/projects";
import "../styles/Projects.css";

const Projects = forwardRef(function Projects({ t, lang }, ref) {
  const [activeTab, setActiveTab] = useState("swift");

  const projects = activeTab === "swift" ? swiftProjects : javaProjects;

  return (
    <section className="projects-section" ref={ref}>
      <div className="projects-inner">

        {/* Header row */}
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

        {/* Cards grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              viewProjectLabel={t.viewProject}
              delay={i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
});

export default Projects;
