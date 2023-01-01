import React from 'react'
import { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

const Product = () => {

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = [
        "https://images.pexels.com/photos/10581052/pexels-photo-10581052.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/10581053/pexels-photo-10581053.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ];


    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImage(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImage(1)}/>
                </div>
                <div className="main-img">
                    <img src={images[selectedImage]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$200</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, nam vitae ipsam eaque libero illo inventore sint a. Veniam provident assumenda sit perferendis quod iure nemo, minima cumque voluptates beatae!</p>

                <div className="quantity">
                    <button onClick = {()=> setQuantity((prev) => prev===1 ? 1 : prev-1) }>-</button>
                        {quantity}
                    <button onClick = {()=> setQuantity((prev) => prev+1) }>+</button>
                </div>

                <div className="add">
                    <button><AddShoppingCartIcon /> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product