import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';

const Cart = (props) =>{

    const cartcntx=useContext(CartContext);
    
    const totalAmount = `$${cartcntx.totalAmount.toFixed(2)}`;
    const hasItems = cartcntx.items.length>0;
   
    const cartItemRemoveHandler = id =>{
        cartcntx.removeItem(id);
    }
    
    const cartItemAddHandler = item =>{
        cartcntx.addItem({...item, amount : 1});
    }
    
    const cartItems = (
        <ul className={classes['cart-items']}>
    {   
      cartcntx.items.map((item)=>(
        <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
        />
      )) 
     }
      </ul>
    );

    return(
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;