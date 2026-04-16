import CategoryPreviewCard from './CategoryPreviewCard';

function CategoryGrid({ categories }) {
  return (
    <section className="section section--categories" id="categories">
      <div className="section-heading">
        <p className="eyebrow">Pick Your Chaos</p>
        <h2>Same camera, very different moods.</h2>
        <p>
          Some folders are fast, some are quiet, some are just me getting distracted by good shadows. Open any
          one and take a look around.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category, index) => (
          <CategoryPreviewCard key={category.slug} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
