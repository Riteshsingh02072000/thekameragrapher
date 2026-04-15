import { featuredPlatforms } from '../../data/siteData';

function LogoMarquee() {
  const loopedPlatforms = [...featuredPlatforms, ...featuredPlatforms];

  return (
    <section className="section section--marquee" id="featured">
      <div className="section-heading section-heading--compact">
        <p className="eyebrow">Featured Placements</p>
        <h2>Published, shared, and recognized.</h2>
      </div>

      <div className="logo-marquee">
        <div className="logo-marquee__track">
          {loopedPlatforms.map((platform, index) => (
            <div className="logo-pill" key={`${platform.name}-${index}`}>
              <img src={platform.logo} alt={`${platform.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;
