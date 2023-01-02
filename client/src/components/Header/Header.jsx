import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
    const catId = parseInt(useParams().id);
    const { data } = useFetch(`/categories?populate=*&[filters][id][$eq]=${catId}`);

    console.log(data)
    return (
        <div className='header'>
            {data?.map((item) => (
                    <div className="cat-img" key={item.id}>
                        <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url} alt="" />
                    </div>
                ))}
        </div>
    )
}

export default Header