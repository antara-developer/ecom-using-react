import React from 'react';
import "./Products.scss"

const Products = () => {
  return (
    <div className='products'>
        <div className="left">
            <div className="filter-item">
                <h2>Product Categories</h2>
                <div className="input-item">
                    <input type="checkbox" id="1" value={1} />
                    <label htmlFor="1">Shoes</label>
                </div>
                <div className="input-item">
                    <input type="checkbox" id="2" value={2} />
                    <label htmlFor="2">Skirt</label>
                </div>
                <div className="input-item">
                    <input type="checkbox" id="3" value={3} />
                    <label htmlFor="3">Dress</label>
                </div>
            </div>
            <div className="filter-item">
                <h2>Filter by price</h2>
            </div>
            <div className="filter-item">
                <h2>Sort by</h2>
            </div>
        </div>
        <div className="right">
        </div>
    </div>
  )
}

export default Products