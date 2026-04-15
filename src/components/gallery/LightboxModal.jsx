import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

function LightboxModal({ photos, activePhotoId, onClose, onPrev, onNext }) {
  const photo = photos.find((item) => item.id === activePhotoId);

  useEffect(() => {
    if (!photo) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        onPrev();
      }

      if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {photo ? (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="lightbox__dialog"
            initial={{ scale: 0.95, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close lightbox">
              Close
            </button>

            <div className="lightbox__media">
              <button type="button" className="lightbox__nav lightbox__nav--left" onClick={onPrev}>
                Prev
              </button>
              <img src={photo.src} alt={photo.alt} />
              <button type="button" className="lightbox__nav lightbox__nav--right" onClick={onNext}>
                Next
              </button>
            </div>

            <div className="lightbox__meta">
              <div>
                <p className="eyebrow">Selected Frame</p>
                <h3>{photo.title}</h3>
              </div>
              <p>{photo.meta}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default LightboxModal;
