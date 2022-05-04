import Nav from '../components/nav/nav';
import HeroSection from '../components/hero-section/HeroSection';
import FeatureSection from '../components/feature-section/FeatureSection';
import AboutSection from '../components/about-section/AboutSection';
import Footer from '../components/footer/Footer';

import './HomePage.styles.css';

const HomePage = () => {
	return (
		<>
			<Nav />
			<HeroSection />
			<FeatureSection />
			<AboutSection />
			<Footer />
		</>
	);
};

export default HomePage;
