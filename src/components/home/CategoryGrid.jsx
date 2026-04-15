import CategoryPreviewCard from './CategoryPreviewCard';

function CategoryGrid({ categories }) {
  return (
    <section className="section section--categories" id="categories">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>Five worlds, one visual signature.</h2>
        <p>
          Each gallery opens into its own dedicated page with full-screen viewing, hover states, and curated
          image selection.
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
