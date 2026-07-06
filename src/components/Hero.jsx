import { ArrowRight } from 'lucide-react';
import { profile } from '../data/content';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-greeting animate-fade-in delay-1">{profile.greeting}</h2>
          <h1 className="hero-name gradient-text animate-fade-in delay-2">{profile.name}</h1>
          <h3 className="hero-title animate-fade-in delay-3">{profile.role}</h3>
          <p className="hero-description animate-fade-in delay-4">{profile.tagline}</p>
          <div className="hero-cta animate-fade-in delay-4">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-2" aria-hidden="true">
          <div className="glow-circle primary"></div>
          <div className="glow-circle secondary"></div>
          <div className="glass-card main-card">
            <pre className="code-snippet">
              <span className="code-keyword">const</span>{' '}
              <span className="code-var">developer</span> = {'{'}
              {'\n'}  name: <span className="code-string">'Emmanuel'</span>,
              {'\n'}  status: <span className="code-string">'Recent Graduate'</span>,
              {'\n'}  passion: <span className="code-string">'Building scalable apps'</span>
              {'\n'}
              {'}'};
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
