import HeroSection from "./section/HeroSection";
import FeaturedProductsSection from "./section/FeaturedProductsSection";
import AboutDombraSection from "./section/AboutDombraSection";

export default function Home() {
    return (
        <div>
            <HeroSection />

            <FeaturedProductsSection />

            <AboutDombraSection />
        </div>
    );
}
