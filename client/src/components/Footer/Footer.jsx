import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper-1 row">
                <div className="footer-item col-md-2 col-sm-6">
                    <p>Categories</p>
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
                <div className="footer-item col-md-2 col-sm-6">
                    <p>Links</p>
                    <div className="item">
                        <Link className="link">FAQs</Link>
                    </div>
                    <div className="item">
                        <Link className="link">Pages</Link>
                    </div>
                    <div className="item">
                        <Link className="link">Stores</Link>
                    </div>
                </div>
                <div className="footer-item col-md-4 col-sm-12">
                    <p>About</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, mollitia dolorum illo eveniet eaque, aliquid vel deserunt maxime temporibus accusamus numquam aperiam earum odit qui rem harum dolores! Ipsam, itaque.</span>
                </div>
                <div className="footer-item col-md-4 col-sm-12">
                    <p>Contact</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, mollitia dolorum illo eveniet eaque, aliquid vel deserunt maxime temporibus accusamus numquam aperiam earum odit qui rem harum dolores! Ipsam, itaque.</span>
                </div>
            </div>
            <div className="footer-wrapper-2 row">
                <div className="footer-down-item col-md-6 col-sm-12">
                    <p className="footer-content">This web site is directed only to U.K. consumers for products and services of Unilever United Kingdom. This web site is not directed to consumers outside of the U.K.</p>
                </div>
                <div className="footer-down-item col-md-6 col-sm-12">
                    <div className="logo"><img src={process.env.PUBLIC_URL + "/images/logo-1.png"} alt="" /></div>
                    <div className="footer-content">&copy; Copyright 2023. All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer