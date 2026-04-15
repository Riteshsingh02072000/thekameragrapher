import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigationItems } from '../../data/siteData';

function Navbar({ showNav }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.header
      className={`site-nav ${showNav ? 'site-nav--visible' : ''}`}
      initial={false}
      animate={{
        opacity: showNav ? 1 : 0,
        y: showNav ? 0 : -18,
        pointerEvents: showNav ? 'auto' : 'none',
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-nav__inner">
        <NavLink className="site-nav__brand" to="/">
          THEKAMERAGRAPHER
        </NavLink>

        <nav className="site-nav__links" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.slug}
              href={isHome ? `#${item.slug}` : `/category/${item.slug}`}
              className="site-nav__link"
            >
              {item.label}
            </a>
          ))}
          <a href={isHome ? '#contact' : '/#contact'} className="site-nav__link">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
