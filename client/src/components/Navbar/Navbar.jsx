import React, { useState } from 'react';
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from '../Cart/Cart';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='navbar-header'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className="link" to='/products/1'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/products/2'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/products/3'>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to='/'>Some Generic Store</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to='/'>Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/'>About us</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/'>Contact us!</Link>
                    </div>
                    <div className="cartItem" onClick={()=>setOpen(!open)}>
                        <ShoppingCartIconOutlined/>
                        <span>0</span>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar