import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../navigation/Navbar';
import ScrollToTop from '../navigation/ScrollToTop';

const HERO_NAV_THRESHOLD = 620;

function Shell() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(location.pathname !== '/');

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowNav(true);
      return undefined;
    }

    const handleScroll = () => {
      setShowNav(window.scrollY > HERO_NAV_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar showNav={showNav} />
      <Outlet />
    </>
  );
}

export default Shell;
