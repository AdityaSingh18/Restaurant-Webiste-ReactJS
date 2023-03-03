import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props=>{


    const [items,updateItems] = useState([])


    const addItemCartHandler = item=>{
        updateItems([...items,item])
    };

    const removeItemFromCartHandler = id =>{}

    const cartContext = {
        items:items,
        totalAmount:0,
        addItem:addItemCartHandler,
        removeItem:removeItemFromCartHandler
    }
    console.log(cartContext.items)
    return(

        <CartContext.Provider value={cartContext}>
           {props.children} 
        </CartContext.Provider>
    )
}

export default CartProvider;