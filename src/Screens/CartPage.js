import React, { useState, useEffect, useContext } from 'react';
import UserContext from "../Context/User/UserContext"

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import CartItemCard from '../Components/CartItemCard';

export default function CartPage() {

    const { Loved, setLoved, Cart, setCart } = useContext(UserContext);
    const [GradientDeg, setGradientDeg] = useState(0)



    return (
        <div className="relative flex flex-col justify-center px-24 pt-10">
            <Helmet>
                <title>{"TeeForMee | Cart (" + Cart.length + ")"}</title>
            </Helmet>

            <div className="flex flex-row items-center">
                <p className="text-xl font-bold ml-14">My cart :</p>
                <p className="text-xl ml-2">{Cart.length} item(s)</p>
            </div>

            {Cart.length > 0
                ? <div className="flex flex-row justify-center">
                    <div className="w-[60vw] p-10 flex flex-col max-h-screen overflow-y-auto h-[calc(100vh-9.25rem)]">
                        {Cart.map((data, index) => {
                            return (<>
                                <CartItemCard key={index} productId={data.productId} />
                            </>
                            )
                        })}
                    </div>
                    <div className="w-[40vw] p-14">
                        <div className="my-5 rounded-lg w-full py-3 shadow-lg divide-y-2 px-5 bg-black text-white">
                            <p className="text-center text-xl">Try using cupons</p>
                        </div>

                        <div className="my-5 rounded-lg w-full py-3 shadow-lg divide-y-2 px-5">
                            <p className="font-bold text-gray-600 text-center text-2xl">Price Summary</p>
                        </div>
                    </div>

                </div>


                : <div className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
                    <p className="text-2xl mt-3 font-bold">Your shopping cart seems empty</p>
                    <p>Start shopping and add some items into your cart.</p>
                    <button className="bg-black text-white text-xl px-5 py-3 rounded-lg mt-5"><Link to="/">Continue Shopping</Link></button>
                </div>
            }
        </div >
    )
}
