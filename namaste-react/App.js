import React from 'react';
import ReactDOM from 'react-dom/client';

// React element ==> object  ==render()==> HTML Element   

const heading = React.createElement('h1', { id: 'heading', }, 'This is a heading');
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(heading);

// JSX - HTML-like, XML-like syntax to write easy react.

const jsxHeading = <h1>This is a heading thru JSX !</h1>;
console.log(jsxHeading);

// jsxHeading and heading prints the same object they both are same

// output 
root.render(jsxHeading);
