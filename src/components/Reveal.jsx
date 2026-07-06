import useInView from '../hooks/useInView';

/**
 * Wraps children in an element that fades/slides in when scrolled into view.
 * The wrapper handles the reveal so children keep their own hover transitions.
 */
const Reveal = ({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
