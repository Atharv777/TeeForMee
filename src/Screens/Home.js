import React, { useEffect, useState } from "react";
import { db } from "../firebase.js"
import { collection, onSnapshot } from "firebase/firestore";
import { Helmet } from 'react-helmet'

import ProductsList from "../Components/ProductsList";

export default function Home() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        try {
            onSnapshot(collection(db, "products"), (snapshot) => {
                const product = [];
                snapshot.forEach((doc) => {
                    product.push(doc.data());
                });
                setProducts(product)
            });
        } catch (error) {
            console.log(error)
        }

    }, []);

    return (
        <div>
            <Helmet>
                <title>{"TeeForMee | Home"}</title>
            </Helmet>
            <div className="flex flex-row justify-center">
                <ProductsList products={products} />
            </div>
        </div>)
}
