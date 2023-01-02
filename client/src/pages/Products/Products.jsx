import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import "./Products.scss";
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header/Header';

const Products = () => {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState("asc");
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(
            isChecked
                ? [...selectedSubCats, value]
                : selectedSubCats.filter((item) => item !== value)
        );
    };

    console.log(selectedSubCats)
    return (
        <div className='products'>
            {error ? "Something went wrong!" : loading ? "loading" :
                <>
                    <div className="left">
                        <div className="filter-item">
                            <h2>Product Categories</h2>
                            {data?.map((item) => (
                                <div className="input-item" key={item.id} onChange={handleChange}>
                                    <input
                                        type="checkbox"
                                        id={item.id}
                                        value={item.id}
                                    />
                                    <label htmlFor={item.id}>{item.attributes.title}</label>
                                </div>
                            ))}
                        </div>
                        <div className="filter-item">
                            <h2>Filter by price</h2>
                            <div className="input-item">
                                <span>0</span>
                                <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                                <span>{maxPrice}</span>
                            </div>
                        </div>
                        <div className="filter-item">
                            <h2>Sort by</h2>
                            <div className="input-item">
                                <input type="radio" id='asc' value='asc' name='price' onChange={(e) => setSort("asc")} />
                                <label htmlFor="asc">Price (Low to High)</label>
                            </div>
                            <div className="input-item">
                                <input type="radio" id='desc' value='desc' name='price' onChange={(e) => setSort("desc")} />
                                <label htmlFor="desc">Price (High to Low)</label>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="cat-img">
                            <Header />
                        </div>

                        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
                    </div>
                </>}
        </div>
    )
}

export default Products