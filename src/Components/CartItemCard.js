import React, { useState, useContext, useEffect } from 'react';
import UserContext from "../Context/User/UserContext"
import { Link } from 'react-router-dom'

import { IoRemoveCircle, IoAddCircle, IoClose } from "react-icons/io5"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"

export default function CartItemCard({ productId }) {

    const { Loved, setLoved, Cart, setCart } = useContext(UserContext);
    const [data, setData] = useState(null);

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const [ShowModal, setShowModal] = useState(false);

    useEffect(() => {
        const tempindex = Cart.findIndex(obj => obj.productId === productId);
        setData(Cart[tempindex])
        setSelectedSize(Cart[tempindex].size)
        setSelectedQuantity(Cart[tempindex].quantity)
    }, [])


    return (
        <div className="rounded shadow-xl flex justify-between my-3">
            {data
                ? <><div className="w-[20%] overflow-hidden group">
                    <Link to={`/product/${data.product.productId}`}>
                        <img className="transition w-full object-cover h-full group-hover:scale-125" src={data.product.imgUrl} alt="T shirt" />
                    </Link>
                </div>
                    <div className="w-[80%] px-6 pt-4 pb-2 flex flex-col justify-between">
                        <p className="font-semibold text-lg mb-1">{data.product.title}</p>

                        <div className="flex flex-row justify-center divide-x-2">
                            <div className="w-1/2 flex justify-evenly items-center">
                                <p className="text-lg">Size: </p>
                                <div onClick={() => { setShowModal(true) }} className="cursor-pointer flex flex-row  items-center px-3 py-2 bg-gray-100">
                                    <p className="text-base font-bold mx-1">{data.size}</p>
                                    {ShowModal ? <RiArrowDropUpLine className="mx-1 text-xl" /> : <RiArrowDropDownLine className="mx-1 text-xl" />}
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-evenly items-center">
                                <p className="text-lg">Quantity: </p>
                                <div className="flex flex-row items-center px-3 py-2 bg-gray-100">
                                    <div
                                        onClick={() => {
                                            const tempCart = Cart;
                                            const tempIndex = Cart.findIndex(obj => obj.productId === productId);
                                            tempCart[tempIndex].quantity = selectedQuantity - 1;
                                            setSelectedQuantity(selectedQuantity - 1)
                                            setCart(tempCart);
                                        }}
                                        className="cursor-pointer mx-1 text-xl">
                                        <IoRemoveCircle />
                                    </div>

                                    <p className="text-base font-bold mx-1">{selectedQuantity}</p>

                                    <div
                                        onClick={() => {
                                            const tempCart = Cart;
                                            const tempIndex = Cart.findIndex(obj => obj.productId === productId);
                                            tempCart[tempIndex].quantity = selectedQuantity + 1;
                                            setSelectedQuantity(selectedQuantity + 1)
                                            setCart(tempCart);
                                        }}
                                        className="cursor-pointer mx-1 text-xl">
                                        <IoAddCircle />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-row">
                                <p className="mx-1 text-xl font-bold">₹ {data.product.price}</p>
                                <p className="mx-1 text-lg line-through text-gray-600">₹{parseInt(data.product.price) + 500}</p>
                                <p className="mx-1 text-lg text-red-500 ">({Math.floor(50000 / (parseInt(data.product.price) + 500))}% OFF)</p>
                            </div>
                            <p className="text-gray-500 text-xs">Inclusive of taxes</p>
                        </div>
                    </div>



                    {
                        ShowModal
                        && <div className="bg-black/[.33] w-full h-[calc(100vh-5rem)] top-0 left-0 flex flex-row justify-center items-center absolute">
                            <div
                                style={{ backgroundImage: `linear-gradient(-45deg, var(--tw-gradient-stops))`, backgroundSize: "200%" }}
                                className="flex flex-col justify-evenly items-center z-100 p-5 w-[500px] h-[275px] rounded-2xl border border-white/[.2] from-indigo-300/[.4] via-gray-300/[.15] to-pink-300/[.4] animate-gradientAnim backdrop-blur-[6px]">

                                <div className="w-full flex flex-row justify-center">
                                    <p className="w-[60%] text-right text-2xl font-bold text-gray-800">Select Size</p>
                                    <div className="w-[40%] flex items-center justify-center text-3xl">
                                        <IoClose onClick={() => { setShowModal(false) }} />
                                    </div>
                                </div>

                                <div className="flex flex-row w-full justify-center">
                                    <div
                                        onClick={() => { setSelectedSize("S") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "S" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        S
                                    </div>
                                    <div
                                        onClick={() => { setSelectedSize("M") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "M" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        M
                                    </div>
                                    <div
                                        onClick={() => { setSelectedSize("L") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "L" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        L
                                    </div>
                                    <div
                                        onClick={() => { setSelectedSize("XL") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "XL" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        XL
                                    </div>
                                    <div
                                        onClick={() => { setSelectedSize("XXL") }}
                                        className={`w-14 h-14 flex justify-center items-center rounded-full mx-3 text-xl border border-gray-200 hover:border-black hover:cursor-pointer transition ${selectedSize === "XXL" ? "bg-black text-white" : "bg-gray-50"}`}>
                                        XXl
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        const tempCart = Cart;
                                        const tempIndex = Cart.findIndex(obj => obj.productId === productId);
                                        tempCart[tempIndex].size = selectedSize;
                                        setCart(tempCart);
                                        setShowModal(false);
                                    }}
                                    className="py-2 Font-bold text-white bg-black rounded-lg w-3/4 text-2xl">DONE</button>
                            </div>
                        </div>
                    }
                </>
                : <div className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
                    <p className="mt-3 font-bold">Loading...</p>
                </div>
            }
        </div >
    )
}
