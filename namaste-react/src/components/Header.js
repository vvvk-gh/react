import { SITE_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [userLoginState, setUserLoginState] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img src={SITE_LOGO} alt="site logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Homepage</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        userLoginState === 'Login' ? setUserLoginState('Logout') : setUserLoginState('Login');
                    }}>{userLoginState}</button>
                </ul>
            </div>
        </div >
    )
};

export default Header;