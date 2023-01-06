import React from 'react';
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {

    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () =>{
        let total=0;
        products.forEach((item)=> (total += item.quantity*item.price));
        return total.toFixed(2);
    };

    return (
        <div className="cart">
            <h1 className='cart-desc'>Your cart</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">{item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))}

            <div className="total"> 
                <span>Subtotal: </span>
                <span>${totalPrice()}</span>
            </div>
            <button>Proceed to checkout</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}

export default Cart