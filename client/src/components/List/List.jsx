import React from 'react'
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch"

const List = ({ subCats, maxPrice, sort, catId }) => {

    let reqURL = `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item =>
        `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}`;

    reqURL += sort !== '' ? `&sort=price:${sort}` : '';
    const { data, meta, loading, error } = useFetch(reqURL);

    console.log(meta?.pagination?.total)

    if (meta?.pagination?.total === 0) {
        return (
            <div className="list-1">
                <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/images/shopping-cart.png"} alt="" />
                </div>
                <div className="content">
                <p>Sorry, we currently don't have products in this category. Check back later!</p>
                </div>
            </div>
        )
    }

    else {

        return (
            <div className="list">
                {error
                    ? "Something went wrong!" : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        )

    }

}

export default List