import React from 'react';
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className='categories-container'>
            <div className="top">
                <h3>Categories</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, similique officia. Velit repudiandae pariatur inventore odio beatae reiciendis est ipsa quasi quas, illo, temporibus laboriosam quod corrupti ullam dicta aliquam.</p>
            </div>
            <div className="categories">
                <div className="column">
                    <div className="rows">
                        <img src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600&h=750&dpr=2" alt="" />
                        <Link className="link" to='/products/2'>
                            <button>Women</button>
                        </Link>
                    </div>
                    <div className="rows">
                        <img src="https://images.pexels.com/photos/6764032/pexels-photo-6764032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <Link className="link" to='/products/1'>
                            <button>Men</button>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="rows">
                        <img src="https://images.pexels.com/photos/1996969/pexels-photo-1996969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <Link className="link" to='/products/3'>
                            <button>Sale</button>
                        </Link>
                    </div>
                </div>
                <div className="column column-2">
                    <div className="rows">
                        <div className="column">
                            <div className="rows">
                                <img src="https://images.pexels.com/photos/10581052/pexels-photo-10581052.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <Link className="link" to='/products/4'>
                                    <button>Featured</button>
                                </Link>
                            </div>
                        </div>
                        <div className="column">
                            <div className="rows">
                                <img src="https://images.pexels.com/photos/3689148/pexels-photo-3689148.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <Link className="link" to='/products/5'>
                                    <button>Trending</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="rows">
                        <img src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <Link className="link" to='/products/6'>
                            <button>Accessories</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories