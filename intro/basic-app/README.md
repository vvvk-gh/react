# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Components

- The building blocks of a react application

- They describe a part of the user interface

- They may take props as an input and return JSX (HTML)

- These are of 2 types

  - Stateless Functional Components
  - Stateful Class Components

- They can be rendered in middle of some other components

- They are imported and exported via ES6 import and export

##### `Greet.js`

```jsx
const Greet = () => <h1> Hello hi </h1>;

export default Greet;
```

In the above case we can import into another with another name and use it

##### `Greet.js`

```jsx
export const Greet = () => <h1> Hello hi </h1>;
```

But if we use export like above we have to use exact name while importing in the another component.

### Class Vs Functional Componets

#### Functional

Before : v16

- Function doesn't have any state where as class have a state.

- Absense of `this`

- Mainly responsible for UI

- Solution without using state

After 16 :
They can have state , lifecycle hooks, `this` in react

#### Class

- The class can have an internal private state i.e, it can maintain some information that is private to that component.

- More feature rich
- Maintain their own private data (state)
- Complex UI logic

so both are equal now.

### JSX

- javascript xml an extenstion of javascript

- JSX tags have a tag name , attributes and children

- JSX is not necessity to write applications

- JSX makes react code simpler and elegant

- JSX transplies to pure js which is understood by the browsers.

`With jsx`

```js
const Greet = () => {
  return (
    <div className='classOne' id='id1'>
      <h1>Hello All</h1>
      <p>With JSX</p>
    </div>
  );
};
```

`Without jsx`

```js
const Greet = () => {
  return React.CreateComponent(
    'div',
    { id: 'id1', class: 'classOne' },
    React.createComponent('h1', null, 'Hello Vishwas'),
    React.createComponent('p', null, 'without jsx')
  );
};
```

React.createComponent it will take atleast 3 parameters.

1. Elementname
2. Options (object of key-values pairs )
3. Children / Text node

### Jsx Differences

- class --> classnName
- for --> htmlFor
- camelCase Syntax
  - onclick --> onClick
  - tabindex --> tabIndex

### State

- It is an object that is privatly maintained in the component

#### Props Vs State

- What
  props are passed to the component
  state is managed in the component

- Where
  props : functions parameters
  state : these are variables declared in the function body

- Mutable
  props : immutable as they are passed from parent to the child (parent own props cannot be changed by the children)
  state : these are mutabla are they are within the component so they can be changed

- Accessing
  props : `props` in functional components , `this.props` in class components
  state : `UseState` Hook in functional components , `this.state` in class components

#### setState

- If you want to update state in the component we have to use setState method
- It has 2 arguments
  1 - Object , 2 - Callback Function

- React may group mutiple setState calls into a single update for a better performance

- key points
  Always make use of setState and never modify the state directly

`DO`

```js
setState({
  message: `Updated value`,
});
```

`Don't`

```js
this.state.message = `Update value`;
```

Code has to be executed after the state has been updated? Place the code in callback function which is the second argument to the setState method.

```js
this.setState({ count: this.state.count + 1 }, () => {
  console.log(this.state.count);
});
```

When you have to update based on previous state value, pass in a function as an argument instead of regular object

`DO` : passed function as an argument

```js
this.setState((prevState) => ({
  count: prevState.count + 1,
}));
```

`Don't` : passed object as an argument

```js
this.setState({ count: this.state.count + 1 }, () => {
  console.log(this.state.count);
});
```

#### prevState

- To overcome above drawback in setState group calls we use prevState in the setState
- When prevState is used the setState function should not take an object it should take function as it first argument
- refer `Counter.js`

### Event Handlers

#### Function click Handler

`FunctionClick.js`

```js
import React from 'react';

function FunctionClick() {
  function clickHandler() {
    console.log('Button clicked');
  }

  return (
    <div>
      <button onClick={clickHandler}>Count</button>
    </div>
  );
}

export default FunctionClick;
```

#### Class click Handler

`ClassClick.js`

```js
import React, { Component } from 'react';

class ClassClick extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = () => {
    console.log(`Button Clicked`);
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default classClick;
```

`Note`

- Always use { } for handlers
- For class components : `this.handlerName`
- For functional components : `handlerName`
- Never invoke a handler just call
- Always use arrow functions in class components for handlers

```js


 //For functional component

✅ <button onClick= {clickHandler}> Click Me </button>

❌ <button onClick = {clickHandler()}> Click Me </button>

//For class component

  // use first approach for normal handler
  clickHandler (){
    this.setState({
      message : 'Change Text'
    })
  }

✅ <button onClick={() => this.clickHandler()}>Click Me</button>

//use this second approach for arrow handlers

clickHandler = () =>{
  this.setState({
    message : 'Change Text'
  })
}

✅  <button onClick={this.clickHandler}>Click Me</button>

❌ <button onClick={this.clickHandler()}>Click Me</button>
```

### Conditional Rendering

- If/else
- Element Variables
- Terenary operator
- Short Circuit opearator
