import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router preserves scroll position across navigations by default.
 * This component snaps the window to the top whenever the pathname
 * changes, so clicking a header/footer/in-page link always lands on a
 * fresh viewport. In-page anchors with a hash (#contact) are left alone.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
