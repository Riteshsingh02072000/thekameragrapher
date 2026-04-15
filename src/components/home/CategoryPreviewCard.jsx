import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CategoryPreviewCard({ category, index }) {
  return (
    <motion.article
      className="category-card"
      id={category.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link to={`/category/${category.slug}`} className="category-card__link">
        <div className="category-card__media">
          <img src={category.coverImage.src} alt={category.coverImage.alt} />
        </div>
        <div className="category-card__content">
          <span className="category-card__index">0{index + 1}</span>
          <div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
          <span className="category-card__cta">View Gallery</span>
        </div>
      </Link>
    </motion.article>
  );
}

export default CategoryPreviewCard;
