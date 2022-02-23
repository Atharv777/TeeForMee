import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from "../Context/User/UserContext"

export default function WishlistCard({ productId, title, fabric, imgUrl, price, category }) {

    const { Loved, setLoved } = useContext(UserContext);

    return (
        <div className="rounded relative shadow-lg flex flex-col justify-between">
            <Link to={`/product/${productId}`}>
                <div className="w-full h-96 overflow-hidden group">
                    <img className="transition w-full object-cover h-full group-hover:scale-125" src={imgUrl} alt="T shirt" />
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-row justify-between">
                    <div className="mr-1">
                        <div className="font-bold text-xl mb-1">{title}</div>
                    </div>
                    <p className="font-bold text-xl">₹{price}</p>
                </div>
                <div className="px-6 text-md text-gray-600">{fabric}</div>
            </Link>
            <div className="px-6 pt-4 pb-2 flex flex-row justify-between items-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category} T-shirt</span>
                <button
                    onClick={() => {
                        Loved.some(e => e.productId === productId) && setLoved(Loved.filter((item, i) => i !== Loved.findIndex(x => x.productId === productId)))
                    }}
                    className="transition px-3 py-1 font-bold bg-gray-200 rounded-full hover:bg-red-500 hover:text-white">Remove</button>
            </div>
        </div>
    );
}
