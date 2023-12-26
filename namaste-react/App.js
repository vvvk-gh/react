import React from 'react';
import ReactDOM from 'react-dom/client';

//React Component
//Always Start with a capital Letter

//React Functional component : A function that returns a JSX 

const HeadingComponent = () => {
    return <h1>This is heading component</h1>;
}

const HeadingSingleLineComponent = () => <h1>This is heading JSX component</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingSingleLineComponent />);