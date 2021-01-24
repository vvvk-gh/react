import React from 'react';

function ChildComponent(props){
    return (
        <div>
            {/* without parameters */}
            {/* <button onClick = {props.getParent}>Click Me</button> */}

            {/* with parameters : using arrow functions */}
            <button onClick = {() => props.getParent('Child')}>Click Me</button>
        </div>
    )
}


export default ChildComponent;