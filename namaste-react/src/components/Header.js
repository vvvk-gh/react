import { SITE_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [userLoginState, setUserLoginState] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img src={SITE_LOGO} alt="site logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link className="nav-item" to="/">Homepage</Link></li>
                    <li><Link className="nav-item" to="/about">About us</Link></li>
                    <li><Link className="nav-item" to="/contact">Contact us</Link></li>
                    <li><Link className="nav-item" to="/cart">Cart</Link></li>
                    <button className="login-btn" onClick={() => {
                        userLoginState === 'Login' ? setUserLoginState('Logout') : setUserLoginState('Login');
                    }}>{userLoginState}</button>
                </ul>
            </div>
        </div >
    )
};

export default Header;