import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, socials, profile } from '../data/content';
import useActiveSection from '../hooks/useActiveSection';
import SocialLinks from './SocialLinks';
import './Navbar.css';

// Stable references so the effects/observers don't re-run on every render.
const sectionIds = ['home', ...navLinks.map((link) => link.id)];
const mobileSocials = [
  ...socials,
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'email' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // While the mobile menu is open: lock body scroll, close on Escape, and close
  // automatically if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    const onResize = () => window.innerWidth > 768 && setIsMenuOpen(false);

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Primary">
      <div className="container nav-container">
        <a href="#home" className="logo gradient-text">
          {profile.shortName}
        </a>

        <div className="nav-links desktop-nav">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              aria-current={activeSection === id ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <SocialLinks items={socials} className="nav-socials desktop-nav" />

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="nav-link" onClick={closeMenu}>
              {label}
            </a>
          ))}
          <SocialLinks items={mobileSocials} className="mobile-socials" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
