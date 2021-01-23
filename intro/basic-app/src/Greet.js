import React from 'react';

//functional Components

//traditional Approach
// function Greet(){
//     return <h1>Hello from the Vamsi</h1>
// }

//recommended Approach ES6 functions
//const Greet = () => <h1>Hello Hi this is Vamsi</h1>

//with props - helps to generate dyanamic content

const Greet = (props) =>{
    console.log(props);
    return <h1>Hello {props.name} a.k.a {props.heroName}</h1>
}
export default Greet;