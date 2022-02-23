import React, { useContext } from 'react';
import UserContext from "../Context/User/UserContext"

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import CartItemCard from '../Components/CartItemCard';

export default function CartPage() {

    const { Cart } = useContext(UserContext);
    const CartPrices = Cart.map(item => { return (parseInt(item.price) + (parseInt(item.quantity) * 501)) })
    const CartQuantities = Cart.map(item => { return (parseInt(item.quantity)) })
    const TotalMRP = CartPrices.reduce((partialSum, a) => partialSum + a, 0)
    const TotalItems = CartQuantities.reduce((partialSum, a) => partialSum + a, 0)


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
                    <div className="w-[40vw] p-14 flex flex-col max-h-screen overflow-y-auto h-[calc(100vh-9.25rem)]">

                        <div className="my-5 rounded-lg w-full py-3 shadow-lg divide-y-2 px-5">
                            <p className="font-bold text-gray-600 text-center text-2xl">Price Summary</p>
                            <div className="py-5">
                                <div className="flex flex-row justify-between my-1">
                                    <p className="text-gray-700"><span className="font-bold">Total MRP </span>({Cart.length} items):</p>
                                    <p className="font-bold">₹{TotalMRP}</p>
                                </div>
                                <div className="flex flex-row justify-between my-1">
                                    <p className="text-gray-700">Discount on MRP:</p>
                                    <p className="font-bold text-green-600">- ₹{501 * TotalItems}</p>
                                </div>
                                <div className="flex flex-row justify-between my-1">
                                    <p className="text-gray-700">Delivery Charges:</p>
                                    <p className="text-green-600">Free</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between py-5">
                                <p className="font-bold text-2xl">Total Amount:</p>
                                <p className="text-2xl font-bold">₹{TotalMRP - (501 * TotalItems)}</p>
                            </div>
                            <div>
                                <p className="py-3 text-center text-green-600">You will save ₹{501 * TotalItems} on this order</p>
                                <button className="bg-black rounded-xl w-full py-2 text-white text-2xl">PLACE ORDER</button>
                            </div>
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
