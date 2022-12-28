import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss";

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
    <div className='card-item'>
        <div className="image">
            {item.isNew && <span>New Season</span>}
            <img src={item.img1} alt="" className="main-img" />
            <img src={item.img2} alt="" className="second-img" />
        </div>
        <h5 className="title">
            {item.title}
        </h5>
        <div className="price">
            <div className="old-price">${item.oldPrice}</div>
            <div className="new-price">${item.newPrice}</div>
        </div>
    </div>
    </Link>
  )
}

export default Card