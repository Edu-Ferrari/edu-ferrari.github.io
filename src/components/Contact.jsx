import { forwardRef } from "react";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { GitHubIcon } from "./Icons";
import "../styles/Contact.css";

const Contact = forwardRef(function Contact({ t }, ref) {
  return (
    <section className="contact-section" ref={ref}>
      <div className="contact-inner">

        <FadeIn delay={0.1}>
          <div className="contact-left">
            <p className="section-label">Get in Touch</p>
            <h2 className="contact-title">{t.title}</h2>
            <p className="contact-subtitle">{t.subtitle}</p>

            <div className="contact-links">

              <a
                href="https://www.linkedin.com/in/edurferrari/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon link-li">in</span>
                <span className="contact-link-label">
                  <div>{t.linkedin}</div>
                  <div className="contact-link-url">linkedin.com/in/edurferrari</div>
                </span>
              </a>

              <a
                href="https://github.com/Edu-Ferrari"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon link-gh">
                  <GitHubIcon />
                </span>
                <span className="contact-link-label">
                  <div>{t.github}</div>
                  <div className="contact-link-url">github.com/Edu-Ferrari</div>
                </span>
              </a>

              <a href="mailto:eduferrari.du@gmail.com" className="contact-link">
                <span className="contact-link-icon link-em">@</span>
                <span className="contact-link-label">
                  <div>{t.email}</div>
                  <div className="contact-link-url">eduferrari.du@gmail.com</div>
                </span>
              </a>

            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div>
            <h3 className="form-title">{t.formTitle}</h3>
            <ContactForm t={t} />
          </div>
        </FadeIn>

      </div>
    </section>
  );
});

export default Contact;