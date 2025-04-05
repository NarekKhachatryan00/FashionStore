import { React, useState } from "react";
import { Link } from "react-router-dom";
import './style/navbar.css';
function Navbar() {
    const [active, setActive] = useState('nav_menu');
    const navToggle = () => {
        active === 'nav_menu'
            ? setActive('nav_menu nav_active') 
            : setActive('nav_menu');
    }

    return (
        <div>
            <nav className="nav">
                <h2>Alora</h2>
                <div className="nav_input">
                    <input type="search" placeholder="Search..."></input>
                </div>
                <ul className={active}>
                    <li className="nav_item"><Link to="/shop">Shop</Link></li>
                    <li className="nav_item"><Link to="/about">About</Link></li>
                    <li className="nav_item"><Link to="/register">Account</Link></li>
                </ul>
                <div onClick={navToggle} className="nav_toggler">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;