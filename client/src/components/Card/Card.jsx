import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss";

const Card = ({ item }) => {

    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className='card-item'>
                <div className="image">
                    {item?.attributes?.isNew && <span>New Season</span>}
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes.url} alt="" className="main-img" />
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img2?.data?.attributes.url} alt="" className="second-img" />
                </div>
                <h5 className="title">
                    {item?.attributes?.title}
                </h5>
                <div className="price">
                    <div className="old-price">${item.oldPrice || item?.attributes?.price + 20}</div>
                    <div className="new-price">${item?.attributes?.price}</div>
                </div>
            </div>
        </Link>
    )
}

export default Card