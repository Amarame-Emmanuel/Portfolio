import { Mail } from 'lucide-react';
import { profile, socials } from '../data/content';
import SocialLinks from './SocialLinks';
import './Contact.css';

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content glass-card-alt text-center">
          <h2 className="section-title contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-desc">
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question, a project idea, or just want to say hi, I'll
            try my best to get back to you!
          </p>

          <a href={`mailto:${profile.email}`} className="btn btn-primary contact-btn">
            Say Hello <Mail size={18} aria-hidden="true" />
          </a>

          <SocialLinks
            items={socials}
            size={24}
            className="social-links mt-4"
            linkClassName="social-icon"
          />
        </div>
      </div>

      <footer className="footer text-center">
        <p>© {year} {profile.name}. Designed &amp; built with React.</p>
      </footer>
    </section>
  );
};

export default Contact;
