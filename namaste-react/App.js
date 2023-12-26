import React from 'react';
import ReactDOM from 'react-dom/client';

//React Component
//Always Start with a capital Letter

//React Functional component : A function that returns a JSX 

//component composition
const Title = () => (<h1>This is a Title of the chapter</h1>);

const HeadingComponent = () => (
    <div className="container">
        <Title />
        <h2>This is sub heading component</h2>
    </div>

);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);