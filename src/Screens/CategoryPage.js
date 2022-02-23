import React, { useEffect, useState } from "react";
import { db } from "../firebase.js"
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet'

import ProductsList from "../Components/ProductsList"

export default function CategoryPage({ categoryName }) {

    const [products, setProducts] = useState([{ title: "none" }]);

    const location = useLocation();

    useEffect(() => {
        onSnapshot(query(collection(db, "products"), where("category", "==", categoryName)), (snapshot) => {
            const product = [];
            snapshot.forEach((doc) => {
                product.push(doc.data());
            });
            setProducts(product)
        });

    }, [location.pathname]);

    return (
        <div>
            <Helmet>
                <title>{"TeeForMee | " + categoryName + " T-shirts"}</title>
            </Helmet>
            <div className="flex flex-row justify-center">
                <ProductsList products={products} />
            </div>
        </div>
    );
}
