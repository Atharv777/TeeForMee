import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

import Home from "./Screens/Home"
import CartPage from "./Screens/CartPage"
import WishlistPage from "./Screens/WishlistPage"
import CategoryPage from "./Screens/CategoryPage"
import ProductDetailPage from "./Screens/ProductDetailPage"

function App() {
    return (
        <Router>
            <div>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<CategoryPage categoryName="Unisex" />} />
                    <Route path="/women" element={<CategoryPage categoryName="Women" />} />
                    <Route path="/unisex" element={<CategoryPage categoryName="Unisex" />} />
                    <Route path="/product/:productId" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                </Routes>

                <Footer />
            </div>
        </Router>


    );
}

export default App;
