import React from 'react';
import ReactDOM from 'react-dom/client';

//Building a app like Swiggy

/** 
 * Homepage
    - Logo
    - Nav-items

 * Body
    - Search
    - Restuarent container
        -Restuarent card
            - Img
            - Cusines
            - ratings
            - delivery time

* Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="site logo" className="logo" />
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
}

// destruction of props
const RestuarentCard = ({ cuisine, resName }) => {
    console.log(props);
    return (
        <div className='res-card'>
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"
                alt="restaurent logo"
                className='res-logo'
            />
            <div className="res-details">
                <div className="res-name">
                    <h3>{resName}</h3>
                </div>
                {/* destrcuting the props */}
                <h5>{cuisine}</h5>
                <h4>4.4 stars</h4>
                <h5>38 mins</h5>
            </div>
        </div>)
}

const Body = () => {
    return (<div className="body">
        <div className="res-container">
            <RestuarentCard resName='KFC' cuisine='Zinger Meal, Biriyani-Box, Bucket-Chicken' />
            <RestuarentCard resName='McD' cuisine='French Fries, Happy Meal, Preuiem Burger' />
        </div >
    </div>)
}

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)
