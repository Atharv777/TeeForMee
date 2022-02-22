import React from 'react';
import { AiOutlineSearch } from "react-icons/ai"

import { db } from "../firebase.js"
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link, useLocation } from 'react-router-dom';



export default function SearchBar() {

    const [inpFocus, setInpFocus] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchData, setSearchData] = React.useState(null);

    const location = useLocation();

    React.useEffect(() => {
        const GetFirestoreData = async () => {
            const q = query(collection(db, "products"), where("keywords", "array-contains", searchTerm.toLowerCase()));

            const querySnapshot = await getDocs(q);
            const data = []
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setSearchData(data)
        }
        GetFirestoreData()

    }, [searchTerm]);

    React.useEffect(() => {
        setSearchTerm("");
        setInpFocus(false);
    }, [location.pathname]);


    return (
        <>
            <div onClick={() => setInpFocus(true)} className="relative z-10 w-1/3">
                <div className="relative w-full z-100">
                    <div className="absolute pl-1 rounded hover:text-gray-800 hover:bg-gray-100 text-gray-500 text-2xl bold h-full flex items-center">
                        <AiOutlineSearch />
                    </div>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className=" focus:bg-white hover:bg-gray-50 rounded pl-10 pr-5 py-2 w-full outline-none bg-gray-100"
                        type="text"
                        placeholder='Search for Products'
                    />
                </div>

                <div className={`z-50 rounded absolute top-9 left-0 w-full bg-white border border-gray-300 ${inpFocus ? "block" : "hidden"}`}>
                    {
                        searchData && searchData.length >= 1
                            ? searchData.map((data, index) => {
                                return (
                                    <Link to={`/product/${data.productId}`}>
                                        <div key={index} className="hover:bg-gray-50 hover:cursor-pointer px-2 pb-1 flex justify-between items-center">
                                            <p className="font-semibold text-gray-800">{data.title}</p>
                                            <p className="text-gray-400 text-xs">for {data.category}</p>
                                        </div>
                                    </Link>
                                )
                            })

                            : <div className="hover:bg-gray-50 px-2 py-2 flex justify-center items-center">
                                <p className="font-semibold text-gray-800">No results found. Please try changing your search term.</p>
                            </div>
                    }
                </div>
            </div>

            <div onClick={() => setInpFocus(false)} className={`${inpFocus ? " block" : "hidden"} z-0 absolute top-0 w-full h-screen`}></div>
        </>
    )
}