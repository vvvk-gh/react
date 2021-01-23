import React from 'react'

// With JSX
const Hello = () =>{
    // return (
    //     <div>
    //     <h1>Hello Vamsi</h1>
    //     <p>With JSX</p>
    //     </div>
    // )

    //createElement takes minimum of 3 inputs
    //first one element 
    // second options which is object containing key value pairs
    // third is the node , text node 
    return React.createElement('div' ,{className : 'classOne' , id : 'id1'} , React.createElement('h1' , null , 'Hello vamsi') , React.createElement('p' , null , 'without jsx'))
}

export default Hello;