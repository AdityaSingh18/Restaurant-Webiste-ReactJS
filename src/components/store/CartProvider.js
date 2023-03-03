import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props=>{


    const [items,updateItems] = useState([])


    const addItemCartHandler = item=>{
        updateItems([...items,item])
    };

    const removeItemFromCartHandler = id => {
        
        const itemIndex = items.findIndex(item => item.id === id);
        
        
        if (itemIndex === -1) {
          return;
        }
    
        const updatedItems = [...items];
        updatedItems.splice(itemIndex, 1);
    
        
        updateItems(updatedItems);
      };
    
    const cartContext = {
        items:items,
        totalAmount:0,
        totalQty:0,
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