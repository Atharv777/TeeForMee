import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from "../firebase.js"
import { collection, onSnapshot, where, query } from "firebase/firestore";

import { Helmet } from 'react-helmet'

import UserContext from "../Context/User/UserContext"

import { RiHeartLine, RiShoppingCart2Line } from "react-icons/ri"

import { AiFillStar } from "react-icons/ai"

export default function ProductDetailPage() {

    let params = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const [sizeError, setSizeError] = useState(null);
    const [errorAnim, setErrorAnim] = useState(false);

    const { Loved, setLoved, Cart, setCart } = useContext(UserContext);

    useEffect(() => {
        onSnapshot(query(collection(db, "products"), where("productId", "==", parseInt(params.productId))), (snapshot) => {
            const product = [];
            snapshot.forEach((doc) => {
                product.push(doc.data());
            });
            setProduct(product[0])

        });
    }, [params]);

    return (
        <div className="flex flex-row justify-center">
            {product
                ? <>
                    <Helmet>
                        <title>{"TeeForMee | " + product.title}</title>
                    </Helmet>
                    <div className="h-full w-1/2 px-10 py-10 flex flex-row justify-center">
                        <img className="w-3/4" src={product.imgUrl} alt={product.title} />
                    </div>



                    <div className="h-full w-1/2 pl-14 pr-32 py-14 flex flex-col divide-y-4 divide-gray-100">

                        <div className="py-5">
                            <h2 className="text-4xl font-bold text-gray-800">TeeForMee</h2>
                            <h3 className="text-2xl text-gray-700">{product.title}</h3>
                            <div className="my-2 w-36 py-1 flex flex-row justify-center items-center bg-gray-100 border border-gray-200 divide-x-2 divide-gray-500">
                                <div className="w-2/5 px-1 flex flex-row justify-center items-center">
                                    <p className="text-md font-bold mr-1">3.5</p>
                                    <AiFillStar className="text-yellow-400 text-lg" />
                                </div>
                                <div className="w-3/5 px-1">
                                    <p className="text-black text-xs text-center"><span className="font-bold">150 </span> Ratings</p>
                                </div>
                            </div>
                        </div>

                        <div className="py-5">

                            <div className="px-2">
                                <div className="flex flex-row">
                                    <p className="mx-1 text-3xl font-bold">₹ {product.price}</p>
                                    <p className="mx-1 text-2xl line-through text-gray-600">₹{parseInt(product.price) + 501}</p>
                                    <p className="mx-1 text-2xl text-red-500 ">({Math.floor(50000 / (parseInt(product.price) + 501))}% OFF)</p>
                                </div>
                                <p className="text-gray-500 text-xs">Inclusive of taxes</p>
                            </div>

                            <div className="mt-6">
                                <p className="text-gray-800 font-bold text-lg ml-3">Select Size {sizeError && <span className="ml-2 font-normal text-sm text-red-500">{sizeError}</span>}</p>
                                <div className={`mt-5 flex flex-row ${errorAnim && "animate-wiggle"}`} onAnimationEnd={() => setErrorAnim(false)}>
                                    <div
                                        onClick={() => { setSizeError(null); setSelectedSize("S") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "S" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        S
                                    </div>
                                    <div
                                        onClick={() => { setSizeError(null); setSelectedSize("M") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "M" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        M
                                    </div>
                                    <div
                                        onClick={() => { setSizeError(null); setSelectedSize("L") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "L" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        L
                                    </div>
                                    <div
                                        onClick={() => { setSizeError(null); setSelectedSize("XL") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "XL" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        XL
                                    </div>
                                    <div
                                        onClick={() => { setSizeError(null); setSelectedSize("XXL") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "XXL" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        XXl
                                    </div>

                                </div>

                                <div className="mt-6 flex flex-row w-full">
                                    <button
                                        onClick={() => {
                                            Loved.includes(product.productId) ? setLoved(Loved.filter((item, i) => i !== Loved.indexOf(product.productId))) : setLoved([...Loved, product.productId])
                                        }}
                                        className={`flex justify-center items-center mx-1 rounded-lg px-4 py-3 border border-red-500 text-3xl hover:border-red-400 hover:text-red-400 ${Loved.includes(product.productId) ? "text-white bg-red-500" : "text-red-500"}`}>
                                        <RiHeartLine />
                                    </button>

                                    {Cart.some(e => e.productId === product.productId)
                                        ? <Link to="/cart" className="flex flex-row justify-center items-center mx-1 rounded-lg w-5/6 p-3 bg-black text-white text-xl"><RiShoppingCart2Line className="text-2xl mr-3" />GO TO CART &#8594;</Link>

                                        : <button
                                            onClick={
                                                !Cart.some(e => e.productId === product.productId)
                                                    && selectedSize
                                                    ? () => setCart([...Cart, { productId: product.productId, product: product, price: product.price, size: selectedSize, quantity: 1 }])
                                                    : () => {
                                                        setErrorAnim(true);
                                                        setSizeError("Please select a Size!")
                                                    }
                                            }
                                            className="flex flex-row justify-center items-center mx-1 rounded-lg w-5/6 p-3 text-white text-xl bg-black"><RiShoppingCart2Line className="text-2xl mr-3" />ADD TO CART</button>
                                    }
                                </div>
                            </div>


                        </div>

                        <div className="py-5">
                            <p className="text-gray-800 font-bold text-lg mb-2">Product Description</p>
                            <p className="ml-2">{product.description}</p>
                        </div>


                    </div>
                </>
                : <div className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
                    <p className="mt-3 font-bold">Loading...</p>
                </div>
            }

        </div >
    )
}
