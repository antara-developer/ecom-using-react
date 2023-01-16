import React from 'react';
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { reduceItem, removeItem, resetCart } from '../../redux/cartReducer';
import { Link } from "react-router-dom";

const Cart = () => {

    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    };

    console.log(products.length)

    if (products.length === 0) {
        return (
            <div className="cart">
                <h1 className='cart-desc'>Your cart</h1>
                <img src={process.env.PUBLIC_URL + "/images/shopping-bag.png"} alt="" />
                <div className="copy">
                    <p>Hey this feels light! Let's add some items</p>
                    <Link className="link copy-button" to='/products/3'><button>Go to Products Page</button></Link>
                </div>
            </div>
        )
    }
    else {
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
                        <div className="icons">
                        <RemoveCircleIcon className='remove' onClick={() => dispatch(reduceItem({
                            id: item.id,
                            quantity: item.quantity
                        }))} />
                        <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                        </div>
                    </div>
                ))}

                <div className="total">
                    <span>Subtotal: </span>
                    <span>${totalPrice()}</span>
                </div>
                <Link to='/cartpage'><button>Go to Cart</button></Link>
                <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
            </div>
        )
    }
}



export default Cart