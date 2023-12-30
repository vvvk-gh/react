import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './src/components/Header';
import Body from './src/components/Body';

import { resList } from './src/utils/mockData';

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body resList={resList} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)
