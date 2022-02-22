import React from 'react';
import { Link } from 'react-router-dom';
import Card from "../Components/Card.js";

export default function ProductsList({ products }) {
    return (
        products
            ?
            <div className="w-[75vw] p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {products.map((product, index) => {
                    return (
                        <Card
                            key={index}
                            productId={product.productId}
                            title={product.title}
                            fabric={product.fabric}
                            description={product.desc}
                            imgUrl={product.imgUrl}
                            price={product.price}
                            category={product.category}
                        />
                    )
                })}
            </div>

            : <div className="w-[75vw] h-[calc(100vh-5rem)] flex flex-col items-center justify-center pr-[25%]">
                <div className="w-16 h-16 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
                <p className="mt-3 font-bold">Loading...</p>
            </div>
    )
}
