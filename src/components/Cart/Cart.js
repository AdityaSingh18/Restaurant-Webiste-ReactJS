import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import CartItem from './CartItem';

const Cart = (props) => {

  const cartcntx = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartcntx.items.map((item) => (
        <CartItem key={item.id} id={item.id} name={item.name} amount={item.amount} price = {item.price} onAdd = {cartcntx.addItem} onRemove={cartcntx.removeItem}/>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>36.6</span> 
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
