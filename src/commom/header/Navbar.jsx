import React, { useState } from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <header className="header">
                <div className="container">
                    {/* <div className="categorie">
                        <h4>
                            <span><i class="fa-solid fa-store"></i></span>
                            Categories 
                            <i class="fa-solid fa-chevron-down"></i>
                        </h4>
                    </div> */}

                    <div className="navlink">
                        <ul className={MobileMenu? "nav-links-MobileMenu" : "nav-links"} onClick = {() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product'>Product</Link>
                            </li>
                            <li>
                                <Link to='/service'>Service</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>

                        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu? <i class="fa-solid fa-xmark close-btn"></i> : <i class="fa-solid fa-bars open-btn"></i> 
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar