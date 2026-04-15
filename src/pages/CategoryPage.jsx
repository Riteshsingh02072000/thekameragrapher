import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import CategoryHero from '../components/gallery/CategoryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import LightboxModal from '../components/gallery/LightboxModal';
import { categoriesBySlug } from '../data/siteData';

function CategoryPage() {
  const { slug } = useParams();
  const category = categoriesBySlug[slug];
  const [selectedPhotoId, setSelectedPhotoId] = useState(category?.photos[0]?.id ?? null);
  const [lightboxPhotoId, setLightboxPhotoId] = useState(null);

  const activePhotoIndex = useMemo(
    () => category?.photos.findIndex((photo) => photo.id === lightboxPhotoId) ?? -1,
    [lightboxPhotoId, category],
  );

  useEffect(() => {
    setSelectedPhotoId(category?.photos[0]?.id ?? null);
    setLightboxPhotoId(null);
  }, [category]);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const handleSelect = (photoId) => {
    setSelectedPhotoId(photoId);
    setLightboxPhotoId(photoId);
  };

  const handlePrev = () => {
    const nextIndex = activePhotoIndex <= 0 ? category.photos.length - 1 : activePhotoIndex - 1;
    const nextPhotoId = category.photos[nextIndex].id;
    setSelectedPhotoId(nextPhotoId);
    setLightboxPhotoId(nextPhotoId);
  };

  const handleNext = () => {
    const nextIndex = activePhotoIndex >= category.photos.length - 1 ? 0 : activePhotoIndex + 1;
    const nextPhotoId = category.photos[nextIndex].id;
    setSelectedPhotoId(nextPhotoId);
    setLightboxPhotoId(nextPhotoId);
  };

  return (
    <PageTransition className="page page--category">
      <CategoryHero category={category} />
      <GalleryGrid photos={category.photos} onSelect={handleSelect} selectedId={selectedPhotoId} />
      <LightboxModal
        photos={category.photos}
        activePhotoId={lightboxPhotoId}
        onClose={() => setLightboxPhotoId(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </PageTransition>
  );
}

export default CategoryPage;
