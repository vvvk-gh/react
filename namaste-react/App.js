import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import About from './src/components/About';
import Body from './src/components/Body';
import Contact from './src/components/Contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = () => {

    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}

//created a browser configuration
const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
//providing the routes to the RouterProvider
root.render(<RouterProvider router={appRoutes} />)
