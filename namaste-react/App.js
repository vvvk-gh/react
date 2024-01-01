import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import About from './src/components/About';
import Body from './src/components/Body';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () => {

    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    );
}

//created a browser configuration
const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
//providing the routes to the RouterProvider
root.render(<RouterProvider router={appRoutes} />)
