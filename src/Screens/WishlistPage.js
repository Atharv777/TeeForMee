import React, { useContext } from 'react';
import UserContext from "../Context/User/UserContext"

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import WishlistCard from '../Components/WishlistCard';

export default function WishlistPage() {

    const { Loved } = useContext(UserContext);

    return (
        <div className="relative flex flex-col justify-center px-24 pt-10">
            <Helmet>
                <title>{"TeeForMee | Wishlist (" + Loved.length + ")"}</title>
            </Helmet>

            <div className="flex flex-row items-center">
                <p className="text-xl font-bold ml-14">My Wishlist :</p>
                <p className="text-xl ml-2">{Loved.length} item(s)</p>
            </div>

            {Loved.length > 0
                ? <div className="flex flex-row justify-center">
                    <div className="w-[75vw] p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                        {Loved.map((data, index) => {
                            return (<>
                                <WishlistCard key={index} productId={data.productId} title={data.title} fabric={data.fabric} imgUrl={data.imgUrl} price={data.price} category={data.category} />
                            </>
                            )
                        })}
                    </div>

                </div>


                : <div className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
                    <p className="text-2xl mt-3 font-bold">Your Wishlist seems empty</p>
                    <p>Start shopping and add some items into your wishlist.</p>
                    <button className="bg-black text-white text-xl px-5 py-3 rounded-lg mt-5"><Link to="/">Continue Shopping</Link></button>
                </div>
            }
        </div >
    )
}
