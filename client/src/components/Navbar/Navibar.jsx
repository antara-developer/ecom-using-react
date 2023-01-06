import React, { useState , useRef, useEffect } from 'react';
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navibar = () => {

    const [open, setOpen] = useState(false);
    const products = useSelector((state) => state.cart.products);

    let clickHandler = () => {
        if(open){
            setOpen(false);
        }
    }



    

    return (
        <div className='navbar-header'>

            {/* <div className="center">
                    <Link className="link" to='/'>
                        <img src={process.env.PUBLIC_URL + "/images/logo-2.png"} alt="" />
                    </Link>
                </div>
                <div className="left">
                    <div className="item">
                        <Link className="link" to='/products/1'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/products/2'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/products/3'>All Products</Link>
                    </div>
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
                    <div className="cartItem" onClick={() => setOpen(!open)}>
                        <ShoppingCartIconOutlined className='cart-icon' />
                        <span>{products.length}</span>
                    </div>
                </div> */}



            <Navbar variant="dark" expand="lg" className="wrapper">
                <Container className="container-item" onClick={clickHandler}>
                    <Link className="link logo" to='/'>
                        <img src={process.env.PUBLIC_URL + "/images/logo-2.png"} alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-container">
                            <div className="item">
                                <Link className="link" to='/products/1'>Men</Link>
                            </div>
                            <div className="item">
                                <Link className="link" to='/products/2'>Women</Link>
                            </div>
                            <div className="item">
                                <Link className="link" to='/products/3'>All Products</Link>
                            </div>
                            <div className="item">
                                <Link className="link" to='/'>Contact us!</Link>
                            </div>
                        </Nav>
                        <div className="cartItem" onClick={() => setOpen(!open)}>
                            <p>Cart</p> <ShoppingCartIconOutlined className='cart-icon' />
                            <span>{products.length}</span>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {open && <Cart />}
        </div>
    )
}

export default Navibar