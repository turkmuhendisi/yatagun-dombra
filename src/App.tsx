import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "./components/Navbar";
import Home from "./pages/home-page/Home.tsx";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Product from "./pages/product-page/Products.tsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Analytics /> {/* Vercel Analytics in here */}
            <SpeedInsights /> {/* Vercel speed Insights in here */}
        </Router>
    );
}

export default App;
