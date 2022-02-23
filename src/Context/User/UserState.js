import React, { useState } from "react";
import UserContext from "./UserContext";
const UserState = (props) => {

    const [Loved, setLoved] = useState([]);
    const [Cart, setCart] = useState([]);

    const UpdateQuantity = (productId, quantity) => {
        if (quantity === "Add") {
            const tempCart = Cart
            const index = Cart.findIndex(obj => obj.productId === productId);
            if (Cart[index].quantity >= 10) {
                alert("Quantity cannot be greater than 10")
            }
            else {
                tempCart[index].quantity = Cart[index].quantity + 1;
                tempCart[index].price = (Cart[index].quantity) * parseInt(tempCart[index].product.price);
                setCart([...tempCart]);
            }
        }
        else if (quantity === "Subtract") {
            const tempCart = Cart
            const index = Cart.findIndex(obj => obj.productId === productId);
            if (Cart[index].quantity <= 1) {
                alert("Quantity cannot be 0 or less")
            }
            else {
                tempCart[index].quantity = Cart[index].quantity - 1;
                tempCart[index].price = (Cart[index].quantity) * parseInt(tempCart[index].product.price);
                setCart([...tempCart]);
            }
        }
    }

    return (
        <UserContext.Provider value={{ Loved, setLoved, Cart, setCart, UpdateQuantity }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;