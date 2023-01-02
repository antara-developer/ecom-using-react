import React from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import "./Slider.scss";

const Slider = () => {

    return (
        <div className='slider'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={process.env.PUBLIC_URL + "/images/banner-img-1.png"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={process.env.PUBLIC_URL + "/images/banner-img-2.png"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000" >
                        <img src={process.env.PUBLIC_URL + "/images/banner-img-3.png"} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="control-icons">
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className='leftIcon'><ChevronLeftOutlinedIcon /></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className='rightIcon'><ChevronRightOutlinedIcon /></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
               
            </div>

        </div>
    )
}

export default Slider