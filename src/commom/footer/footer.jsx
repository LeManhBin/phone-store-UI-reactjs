import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className='footer-logo'>
                        <h1>Logo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="footer-content">
                    <div className='box'>
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center </li>
                            <li>How to Buy </li>
                            <li>Track Your Order </li>
                            <li>Corporate & Bulk Purchasing </li>
                            <li>Returns & Refunds </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Da Nang, Viet Nam </li>
                            <li>Email: llemanhbin@gmail.com</li>
                            <li>Phone: 036561070</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer