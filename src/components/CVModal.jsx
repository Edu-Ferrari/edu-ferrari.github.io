// ─────────────────────────────────────────────────────────────────────────────
// CVModal.jsx
// Overlay modal with an iframe PDF preview and a download button.
// Place your resume at /public/resume.pdf
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from "react";
import { XIcon, DownloadIcon } from "./Icons";
import "../styles/CVModal.css";

export default function CVModal({ t, onClose }) {
  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <span>{t.title}</span>
          <div className="modal-actions">
            <a href="/resume.pdf" download className="modal-btn">
              <DownloadIcon /> {t.download}
            </a>
            <button className="modal-close" onClick={onClose}>
              <XIcon />
            </button>
          </div>
        </div>

        <div className="modal-body">
          <iframe
            src="/resume.pdf#toolbar=0"
            title="CV"
            className="cv-iframe"
          />
          <p className="cv-note">{t.note}</p>
        </div>

      </div>
    </div>
  );
}
