import React from 'react'
import Logo from "../assets/Logo.png"

import { SiInstagram, SiFacebook, SiYoutube, SiTwitter } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-7 flex flex-col items-center shadow-lg">
            <div className="mt-7 flex flex-row items-center">
                <img src={Logo} alt="" className="w-8 h-8 mr-2" />
                <a href="/" className="text-4xl text-gray-200 lobster">TeeForMee</a>
            </div>
            <div className="mt-9 flex flex-row items-center">
                <div className="flex flex-row justify-center items-center border border-solid border-transparent hover:border-gray-200 hover:bg-gray-100 px-3 py-3 rounded-full transition mx-5 text-3xl hover:text-purple-600">
                    <SiInstagram />
                </div>
                <div className="flex flex-row justify-center items-center border border-solid border-transparent hover:border-gray-200 hover:bg-gray-100 px-3 py-3 rounded-full transition mx-5 text-3xl hover:text-blue-700">
                    <SiFacebook />
                </div>
                <div className="flex flex-row justify-center items-center border border-solid border-transparent hover:border-gray-200 hover:bg-gray-100 px-3 py-3 rounded-full transition mx-5 text-3xl hover:text-blue-500">
                    <SiTwitter />
                </div>
                <div className="flex flex-row justify-center items-center border border-solid border-transparent hover:border-gray-200 hover:bg-gray-100 px-3 py-3 rounded-full transition mx-5 text-3xl hover:text-red-600">
                    <SiYoutube />
                </div>
            </div>
            <div className="mt-7 flex flex-row justify-center items-center divide-x-2 divide-gray-500">
                <p className="px-2">Copyright © TeeForMee 2022</p>
                <p className="px-2">Made with ❤️ by Atharv varshney</p>
            </div>
        </footer>
    )
}
