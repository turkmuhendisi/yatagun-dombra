import HeroSection from "./section/HeroSection.tsx";
import FeaturedProductsSection from "./section/FeaturedProductsSection.tsx";
import AboutDombraSection from "./section/AboutDombraSection.tsx";

export default function Home() {
    return (
        <div>
            <HeroSection />

            <FeaturedProductsSection />

            <AboutDombraSection />
        </div>
    );
}
