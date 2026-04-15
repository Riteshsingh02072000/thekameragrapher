import PageTransition from '../components/common/PageTransition';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import LogoMarquee from '../components/home/LogoMarquee';
import ContactSection from '../components/home/ContactSection';
import { categories } from '../data/siteData';

function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <CategoryGrid categories={categories} />
      <LogoMarquee />
      <ContactSection />
    </PageTransition>
  );
}

export default HomePage;
