// ─────────────────────────────────────────────────────────────────────────────
// ContactForm.jsx
// Controlled form with name, email, message and simulated send state.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import "../styles/ContactForm.css";

export default function ContactForm({ t }) {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: replace setTimeout with a real API call (e.g. EmailJS / Formspree)
    setTimeout(() => setStatus("sent"), 1800);
  };

  if (status === "sent") {
    return <p className="form-sent">{t.sent}</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        name="name"
        placeholder={t.namePlaceholder}
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        name="email"
        type="email"
        placeholder={t.emailPlaceholder}
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="form-input form-textarea"
        name="message"
        placeholder={t.messagePlaceholder}
        value={form.message}
        onChange={handleChange}
        required
      />
      <button className="form-btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
