import classes from './CartItem.module.css';
import CartContext from '../store/cart-context';
import { useContext } from 'react';

const CartItem = (props) => {
  

  const cartCtx = useContext(CartContext)
  console.log(cartCtx)
  const price = 0;

  const onRemove = () => cartCtx.removeItem(props.id)
  const onAdd = ()=> cartCtx.addItem(props.id)

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x 1 {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
