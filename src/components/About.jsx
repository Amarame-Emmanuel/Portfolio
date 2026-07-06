import { Code, Server, Database, Layout } from 'lucide-react';
import { skills, profile } from '../data/content';
import Reveal from './Reveal';
import './About.css';

const ICONS = { Code, Server, Database, Layout };

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="about-content">
          <Reveal className="about-text glass-card-alt">
            {profile.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>

          <div className="skills-grid">
            {skills.map(({ name, icon, desc }, index) => {
              const Icon = ICONS[icon];
              return (
                <Reveal key={name} delay={index * 0.08}>
                  <div className="skill-card">
                    <div className="skill-icon">{Icon && <Icon size={24} aria-hidden="true" />}</div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
