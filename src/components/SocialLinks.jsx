import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
};

/**
 * Renders a list of social/contact links. Centralizes the icon mapping and the
 * external-link safety attributes so markup isn't duplicated across the app.
 */
const SocialLinks = ({ items, size = 20, className = '', linkClassName = '' }) => (
  <div className={className}>
    {items.map(({ label, href, icon }) => {
      const Icon = ICONS[icon];
      const isExternal = href.startsWith('http');

      return (
        <a
          key={href}
          href={href}
          className={linkClassName}
          aria-label={label}
          title={label}
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {Icon && <Icon size={size} aria-hidden="true" />}
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
