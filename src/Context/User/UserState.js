import React, { useState } from "react";
import UserContext from "./UserContext";
const UserState = (props) => {

    const [Loved, setLoved] = useState([]);
    const [Cart, setCart] = useState([]);

    return (
        <UserContext.Provider value={{ Loved, setLoved, Cart, setCart }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;