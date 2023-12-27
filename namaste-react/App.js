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

const RestuarentCard = () => {
    return (
        <div className='res-card'>
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"
                alt="restaurent logo"
                className='res-logo'
            />
            <div className="res-details">
                <div className="res-name">
                    <h3>Pancakes 99</h3>
                </div>
                <h4>Breakfast, Tiffins, Desserts</h4>
                <h4>4.4 stars</h4>
                <h5>38 mins</h5>
            </div>
        </div>)
}

const Body = () => {
    return (<div className="body">
        <div className="res-container">
            <RestuarentCard />
            <RestuarentCard />
            <RestuarentCard />
            <RestuarentCard />
            <RestuarentCard />
            <RestuarentCard />
            <RestuarentCard />
            <RestuarentCard />
            <RestuarentCard />
            <RestuarentCard />
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
