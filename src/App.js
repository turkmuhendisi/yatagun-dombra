import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Home from "./pages/home-page/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Product from "./pages/product-page/Products";
import ProductDetail from "./pages/product-page/ProductDetail";
function App() {
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/dombra-satin-al", element: _jsx(Product, {}) }), _jsx(Route, { path: "/hakkimizda", element: _jsx(About, {}) }), _jsx(Route, { path: "/sss", element: _jsx(FAQ, {}) }), _jsx(Route, { path: "/urun/:id/:name", element: _jsx(ProductDetail, {}) })] }), _jsx(Analytics, {}), " ", _jsx(SpeedInsights, {}), " "] }));
}
export default App;
