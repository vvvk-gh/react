import React from 'react';

function Person(props){
    let {perAttr} = props; //destructuring
    return <h1>Hi all my name is {perAttr.name} and i'm {perAttr.age} yrs old and I'm a {perAttr.occupation}</h1>
}

export default Person;