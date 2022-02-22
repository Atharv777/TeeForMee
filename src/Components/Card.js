import React, { useContext } from 'react';
import { RiHeartLine, RiHeartFill } from "react-icons/ri"
import { Link } from 'react-router-dom';
import UserContext from "../Context/User/UserContext"



export default function Card({ productId, title, fabric, description, imgUrl, price, category }) {

    const { Loved, setLoved, Cart, setCart } = useContext(UserContext);

    return (
        <div className="rounded relative shadow-lg">
            <div className="w-full h-96 overflow-hidden group">
                <div className="transition group-hover:visible invisible bg-slant z-10 absolute top-0 right-0 p-5 flex justify-end w-full h-1/3">
                    <div className="mx-1 hover:cursor-pointer h-[30px]">
                        {
                            Loved.includes(productId)
                                ? <div
                                    onClick={() => {
                                        Loved.includes(productId) && setLoved(Loved.filter((item, i) => i !== Loved.indexOf(productId)))
                                    }}
                                    className="text-3xl text-red-500">
                                    <RiHeartFill />
                                </div>

                                : <div
                                    onClick={() => {
                                        !Loved.includes(productId) && setLoved([...Loved, productId])
                                    }}
                                    className="text-3xl text-red-500">
                                    <RiHeartLine />
                                </div>
                        }
                    </div>
                </div>
                <Link to={`/product/${productId}`}>
                    <img className="transition w-full object-cover h-full group-hover:scale-125" src={imgUrl} alt="T shirt" />
                </Link>
            </div>
            <Link to={`/product/${productId}`}>
                <div className="px-6 pt-4 pb-2 flex justify-between">
                    <div>
                        <div className="font-bold text-xl mb-1">{title}</div>
                        <div className="text-md text-gray-600">{fabric}</div>
                    </div>
                    <p className="font-bold text-xl">₹{price}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category} T-shirt</span>
                </div>
            </Link>
        </div >
    );
}
