import React from 'react';
import UserContext from "../Context/User/UserContext"

import { Link } from 'react-router-dom';

import { MdPerson, MdPersonOutline } from "react-icons/md"
import { RiShoppingCart2Line, RiShoppingCart2Fill, RiHeartLine, RiHeartFill } from "react-icons/ri"


import SearchBar from "./SearchBar"


export default function Header() {

    const { Loved, Cart } = React.useContext(UserContext);

    return (
        <div className="w-full h-20 bg-black py-5 flex flex-row justify-around items-center">
            <div className="flex flex-row justify-between items-center">
                <Link to="/" className="mx-10 lobster text-white text-4xl">TeeForMee</Link>

                <div className="mx-10 flex flex-row">
                    <Link to="/men" className="mx-2 px-1 text-md text-white link-underline link-underline-black">MEN</Link>
                    <Link to="/women" className="mx-2 px-1 text-md text-white link-underline link-underline-black">WOMEN</Link>
                    <Link to="/unisex" className="mx-2 px-1 text-md text-white link-underline link-underline-black">UNISEX</Link>
                </div>
            </div>

            <SearchBar />

            <div className="text-white text-3xl flex flex-row items-center">
                <div className="group mx-2 relative">
                    <MdPerson className="group-hover:hidden" />
                    <MdPersonOutline className="hidden group-hover:block" />

                    <div className="-top-2 -right-2 absolute">
                        {/* <p className="w-5 h-5 text-center text-sm bg-red-500 rounded-full">2</p> */}
                    </div>
                </div>
                <div className="group mx-2 relative">
                    <RiHeartFill className="group-hover:hidden" />
                    <RiHeartLine className="hidden group-hover:block" />

                    <div className="-top-2 -right-2 absolute">
                        {Loved.length >= 1 && <p className="w-5 h-5 text-center text-sm bg-red-500 rounded-full">{Loved.length}</p>}
                    </div>
                </div>
                <div className="group mx-2 relative">
                    <Link to="/cart">
                        <RiShoppingCart2Fill className="group-hover:hidden" />
                        <RiShoppingCart2Line className="hidden group-hover:block" />
                    </Link>

                    <div className="-top-2 -right-2 absolute">
                        {Cart.length >= 1 && <p className="w-5 h-5 text-center text-sm bg-red-500 rounded-full">{Cart.length}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
