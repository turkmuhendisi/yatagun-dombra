import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Home from "./pages/home-page/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Product from "./pages/product-page/Products";
import ProductDetail from "./pages/product-page/ProductDetail";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dombra-satin-al" element={<Product />} />
                <Route path="/hakkimizda" element={<About />} />
                <Route path="/sss" element={<FAQ />} />
                <Route path="/urun/:id/:name" element={<ProductDetail />} />
            </Routes>
            <Analytics /> {/* Vercel Analytics in here */}
            <SpeedInsights /> {/* Vercel Speed Insights in here */}
        </Router>
    );
}

export default App;
