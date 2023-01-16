import React from 'react'
import { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import Star from '../../components/Star/Star';

const Product = () => {

    const id = useParams().id;
    const [selectedImage, setSelectedImage] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    return (
        <div className='product'>
            {error ? "Something has gone wrong!" : loading ? "loading" : 
            <div className="row">
            <div className="left col-md-6">
                <div className="images">
                    <img id="img" src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>setSelectedImage("img")}/>
                    <img id="img" src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=>setSelectedImage("img2")}/>
                </div>
                <div className="main-img">
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImage].data?.attributes?.url} alt="" />
                </div>
            </div>
            <div className="right col-md-6">
                <div className="for-mobile-left">
                <h1>{data?.attributes?.title}</h1>
                <span className="price">${data?.attributes?.price}</span>
                <p className='rating'><span>{data?.attributes?.rating} </span><Star stars={data?.attributes?.rating}/></p>
                <p>{data?.attributes?.desc}</p>
                </div>

                <div className="for-mobile-right">
                <div className="quantity">
                    <button onClick = {()=> setQuantity((prev) => prev===1 ? 1 : prev-1) }>-</button>
                        {quantity}
                    <button onClick = {()=> setQuantity((prev) => prev+1) }>+</button>
                </div>

                <div className="add" onClick={()=>dispatch(addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity
                }))}>
                    <button><AddShoppingCartIcon className='add-icon'/><span>Add to Cart</span></button>
                </div>
                </div>
            </div>
            </div>}
        </div>
    )
}

export default Product