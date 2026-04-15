import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CategoryHero({ category }) {
  return (
    <section className="category-hero">
      <div className="category-hero__media">
        <img src={category.coverImage.src} alt={category.coverImage.alt} />
      </div>
      <div className="category-hero__overlay" />

      <motion.div
        className="category-hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <p className="eyebrow">{category.label}</p>
        <h1>{category.title}</h1>
        <p>{category.longDescription}</p>
        <div className="category-hero__actions">
          <a className="button" href="#gallery">
            Explore Frames
          </a>
          <Link className="button button--ghost" to="/">
            Back Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CategoryHero;
