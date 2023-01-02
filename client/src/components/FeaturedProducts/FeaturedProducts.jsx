import React from 'react';
import "./FeaturedProducts.scss"
import Card from "../Card/Card";
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);


    return (
        <div className='featuredProducts'>
            <div className="top">
                <h3>{type}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, similique officia. Velit repudiandae pariatur inventore odio beatae reiciendis est ipsa quasi quas, illo, temporibus laboriosam quod corrupti ullam dicta aliquam.</p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts