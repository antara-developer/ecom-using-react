import React from 'react';
import "./CartPage.scss";
import { useDispatch, useSelector } from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RedeemIcon from '@mui/icons-material/Redeem';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { reduceItem, removeItem, resetCart,  addItem } from '../../redux/cartReducer';
import { Link } from "react-router-dom";

const CartPage = () => {

    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    };

    const conFee = () => {
        return ((0.05) * totalPrice());
    }

    const subTotal = () => {

        let tot = 0, x = 0, y = 0;
        x = parseInt(conFee());
        y = parseInt(totalPrice());

        tot = x + y;

        return (tot);
    }
    console.log(products.length)
    console.log(products.quantity);

    if (products.length === 0) {
        return (
            <div className="cart-page">
                <h1 className='cartpage-desc'>Your cart</h1>
                <img src={process.env.PUBLIC_URL + "/images/shopping-bag.png"} alt="" />
                <div className="copy-2">
                    <p>Hey this feels light! Let's add some items</p>
                    <Link className="link copy-button-2" to='/products/3'><button>Go to Products Page</button></Link>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="cart-page-product">
                <h3 className='cart-page-desc'>Your cart</h3>
                <div className="for-flex row">
                    <div className="left col-md-6">
                        {products?.map(item => (
                            <div className="item" key={item.id}>
                                <CloseIcon className="close-icon" onClick={() => dispatch(removeItem(item.id))}/>
                                <Link className="link desc-contain" to={`/product/${item.id}`}><img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" /></Link>
                                <div className="for-flex">
                                <Link className="link desc-contain" to={`/product/${item.id}`}><div className="details">
                                        <h1>{item.title}</h1>
                                        <p>{item.desc?.substring(0, 100)}</p>
                                        <div className="price">{item.quantity} x ${item.price}</div>
                                    </div></Link>
                                    <div className="icons">
                                        {(item.quantity===1) ? <RemoveCircleIcon className='disabled' onClick={() => dispatch(reduceItem({
                                            id: item.id,
                                            quantity: item.quantity
                                        }))} /> : <RemoveCircleIcon className='remove' onClick={() => dispatch(reduceItem({
                                            id: item.id,
                                            quantity: item.quantity
                                        }))} />}
                                        <AddCircleIcon className='add' onClick={() => dispatch(addItem({
                                            id: item.id,
                                            quantity: item.quantity
                                        }))} />
                                        {/* <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))} /> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
                    </div>

                    <div className="total col-md-6">
                        <div className="total-container">
                            <h4>COUPONS</h4>
                            <p><span><LocalOfferIcon className="cart-icon" /> Apply Coupons</span>
                                <button className="apply">Apply</button></p>
                            <hr />
                            <h4>GIFTING & PERSONALISATION</h4>
                            <div className="gift-coupon">
                                <span>
                                    <RedeemIcon />
                                    <div className="gift-content">
                                        <h6>Gifting a loved one?</h6>
                                        <p>Gift wrap and send a personalized message. Only for $3.</p>
                                    </div>
                                    <ChevronRightOutlinedIcon />
                                </span>
                            </div>
                            <hr />
                            {(products.length===1) ? <><h4>PRICE DETAILS ({products.length} item)</h4></> : <><h4>PRICE DETAILS ({products.length} items)</h4></>}
                            
                            <p className='to-flex'><span className='cart-checkout-desc'>Total: </span>
                                <span>${totalPrice()}</span></p>
                            <p className='to-flex'><span className='cart-checkout-desc'>Convenience Fee: </span>
                                <span>${conFee()}</span></p>
                            <hr />
                            <p className='to-flex'><span className='cart-checkout-desc'>Subtotal: </span>
                                <span>${subTotal()}</span></p>
                            <button className="ptc">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default CartPage