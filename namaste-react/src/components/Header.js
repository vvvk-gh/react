import { SITE_LOGO } from "../utils/constants";

export const Header = () => {
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
                </ul>
            </div>
        </div>
    )
};

export default Header;