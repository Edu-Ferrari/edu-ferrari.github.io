// ─────────────────────────────────────────────────────────────────────────────
// FadeIn.jsx
// Wrapper that fades + slides children in when they enter the viewport.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function FadeIn({ children, delay = 0, style = {}, className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
