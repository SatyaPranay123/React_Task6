import React from 'react';
import './Contact.css';

export function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-header text-primary">Contact</h1>
      <div className="contact-icons">
        <a href="https://www.facebook.com/satya.pranay.96/" className="contact-link">
          <img
            src="https://i.pcmag.com/imagery/articles/04HUXgEu0I3mdCOejOjQpNE-5.fit_lim.v1620748900.jpg"
            alt="Facebook"
          />
        </a>
        <a href="https://www.linkedin.com/in/satya-pranay-kotha-856a09246/" className="contact-link">
          <img
            src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/SatyaPranay123" className="contact-link">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}
