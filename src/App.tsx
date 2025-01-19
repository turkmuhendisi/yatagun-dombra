import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Router>
    );
}

export default App;
