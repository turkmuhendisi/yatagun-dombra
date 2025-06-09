import HeroSection from "./section/HeroSection";
import FeaturedProductsSection from "./section/FeaturedProductsSection";
import AboutDombraSection from "./section/AboutDombraSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <HeroSection />
            <FeaturedProductsSection />
            <AboutDombraSection />
        </div>
    );
}
