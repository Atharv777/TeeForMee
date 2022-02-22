import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Components/Header.js";

import Home from "./Screens/Home"
import CartPage from "./Screens/CartPage"
import CategoryPage from "./Screens/CategoryPage"
import ProductDetailPage from "./Screens/ProductDetailPage"

// import { db } from "./firebase.js"
// import { doc, updateDoc } from "firebase/firestore";
// import { collection, query, where, getDocs } from "firebase/firestore";

function App() {

    // const hello = async () => {

    //     const ANS = await getDocs(collection(db, "products"))
    //     var i = 0

    //     ANS.forEach(async (docu) => {

    //         await updateDoc(doc(db, "products", docu.id), {
    //             title: data[i]
    //         });

    //         i++

    //     });
    // }

    // hello()


    return (
        // <div></div>
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
                </Routes>

            </div>
        </Router>


    );
}

export default App;
