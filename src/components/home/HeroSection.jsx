import { motion } from 'framer-motion';
import { heroImage } from '../../data/siteData';

function HeroSection() {
  return (
    <section className="hero" id="top">
      <div
        className="hero__image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        }}
      />
      <div className="hero__overlay" />
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Good light, odd timing, no flashbacks.</p>
        <h1 className="hero__title">THEKAMERAGRAPHER</h1>
        <p className="hero__subtitle">
          Cars, people, streets, travels, and the occasional view from irresponsibly high above the ground.
        </p>
        <a className="button button--ghost" href="#categories">
          Enter Portfolio
        </a>
      </motion.div>
    </section>
  );
}

export default HeroSection;
