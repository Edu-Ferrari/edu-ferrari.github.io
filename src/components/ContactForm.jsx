// ─────────────────────────────────────────────────────────────────────────────
// ContactForm.jsx
// Controlled form with name, email, message and simulated send state.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// ContactForm.jsx
// Usa EmailJS para enviar mensagens reais.
// Setup: https://www.emailjs.com (gratuito até 200 emails/mês)
//
// Passos:
// 1. Crie uma conta em emailjs.com
// 2. Crie um Email Service (Gmail, Outlook etc.)
// 3. Crie um Email Template com as variáveis: {{from_name}}, {{from_email}}, {{message}}
// 4. Substitua os 3 valores abaixo pelos seus:
//    - YOUR_SERVICE_ID  → Dashboard > Email Services > Service ID
//    - YOUR_TEMPLATE_ID → Dashboard > Email Templates > Template ID
//    - YOUR_PUBLIC_KEY  → Dashboard > Account > Public Key
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";

const SERVICE_ID  = "service_qjhcbd2";
const TEMPLATE_ID = "template_1aoyx1t";
const PUBLIC_KEY  = "0HzHHSZuojXzMZrtb";

export default function ContactForm({ t }) {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name:  form.name,
        from_email: form.email,
        message:    form.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("error");
    });
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
      {status === "error" && (
        <p className="form-error">Something went wrong. Please try again.</p>
      )}
      <button className="form-btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
