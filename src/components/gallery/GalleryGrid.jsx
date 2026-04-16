import { motion } from 'framer-motion';

function GalleryGrid({ photos, onSelect, selectedId }) {
  return (
    <section className="section section--gallery" id="gallery">
      <div className="section-heading section-heading--compact">
        <p className="eyebrow">Curated Collection</p>
        <h2>Pick a shot and give it the screen time it deserves.</h2>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.id}
            type="button"
            className={`gallery-card ${selectedId === photo.id ? 'gallery-card--selected' : ''}`}
            onClick={() => onSelect(photo.id)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <img src={photo.src} alt={photo.alt} />
            <span className="gallery-card__overlay">
              <strong>{photo.title}</strong>
              <span>{photo.meta}</span>
              <span className="gallery-card__hint">Open Fullscreen</span>
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

export default GalleryGrid;
