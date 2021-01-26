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

Recommended Terinary operator or Short Circuit

### List Rendering: Key , items

personal note : `Refer images in your phone`

- Each list Item should have a key for better rendering

- Keys is a special attribute you need to include when creating list of elements

- Key gives the element spl idenity

- Keys helps react to idenity which have changed/added/removed.

- The above works for list of objects but for `array` list use `index` property as an key.

- But use can use the index of as a key in array if and only if
  - items in your list doesn't have an unique id
  - static list and never be reordered or filtered.

### Styling with CSS

##### inline css

`App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Inline />;
  }
}
```

`Inline.js`

```js

import React from 'react';

const heading = {
  border-bottom : '1px solid #ccc';
  font-size : 30px;
}

//use style attribute
function Inline() {
  return <h1 style = {heading}> SytleSheet </h1>;
}

export default Inline;
```

##### css modules

`appStyle.css`

```css
.error {
  color: red;
}
```

`appStyle.module.css`

```css
.success {
  color: green;
}
```

`App.js`

```js
import './appStyle.css';
import styles from './appStyle.module.css';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
         <div className="App">
      <h2 className='error'>Error in Parent</h2>
      <h2 className={styles.success}>Success in Parent</h2>
      <Inline />
      </div>
    );
  }
}
```

`Inline.js`

```js
import React from 'react';

const heading = {
  fontSize: '70px',
  color: 'blue',
};

function Inline() {
  return (
    <div>
      <h1 style={heading}>Style Sheet</h1>
      <h1 className='error'> Error in Child</h1>❌ // <h1 className={styles.success}> Success in Child </h1>
    </div>
  );
}

export default Inline;
```

appstyle.css Vs appstyle.module.css

- `appStyle.css` classes are applied to the child component also if same classNames are mentioned in the child component

- `appStyle.module.css` has only local scope and can't be passed to child components.

- Above will result in error at ❌ bcz `styles` are the reference to appStyle.modile.css and it has local scope only can be used in it's component and not in their childrens.

### Forms : Controlled Components

- The form fields which are handled by the react is called as controlled components.

- We can make an normal field a controllable fields by making 2 things
  - value linking it with state
  - onchange linking with setState

Note : `refer Form.js`

### Lifecycle Methods

- Each and every class component undergoes serveral stages in a lifecycle and we use few methods to overwrite the change in a lifecycle

- `hooks` should be used for lifecycle in functional components.

- `Phases` in Class Component Lifecycle

  - `Mounting` : when an instance of a component is being created and inserted into the DOM.

    ```bash
      //methods of mounting phase are

      constructor
      static getDerviedStateFromProps
      render
      componentDidMount
    ```

  - `Updating` : when a component is being re-rendered as a result of changes to either its props or state.

    ```bash
        //methods of updating phase are

        static getDerviedStateFromProps
        shouldComponentUpdate
        render
        getSnapshotBeforeUpdate
        componentDidUpdate
    ```

- `Unmounting` : when a component is being removed from the DOM.

  ```bash
  //methods of unmounting phase are

  componentWillUnmount
  ```

- `Error Handling` : when there is an error during rendering , in lifecycle method , or in constructor of any child component.

  ```bash
  //methods of error handling phase are

  static getDerviedStateFromError
  componentDidCatch
  ```

### Order of method invoking in `mounting` phase

```js
  constructor(prop)
        ⬇
  static getDerviedFromProps(props ,state)
        ⬇
      render()
        ⬇
    componentDidMount()
```

constructor

```js
constructor(props);
what : a special function that will get called whenever a new component is created.

uses : Intializing a state and binding event handlers

dont : never call HTTP requests in it.
super(props) :  this will call base class constructor
```

static getDerviedStateFromProps

```js
static getDerivedFromProps(props , state)

It is rarely used in lifecycle

what: mostly used when the state of the component depends on changes in the props over time.

uses : set the state,  can't use {this.state} as it is static method must return object which sets the state.

dont : never use HTTP calls.

```

render

```js
render()

what : only required method in the class component.

uses : used to read props, state and render the JSX/UI.

dont : never change state or interact with DOM or make ajax calls.
```

componentDidMount

```js
componentDidMount()

what : called only once in lifecycle

uses : invoked immediately after a component and all its children components have been rendered to the DOM and can cause side effects. Ex : you can Interact with DOM and call ajax calls
```

`LifecycleA.js`

```js
import React, { Component } from 'react';

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    console.log('LifeCycle A constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle A getDerivedFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle A Did Mount');
  }

  render() {
    console.log('Lifecycle A render');
    return <div>Lifecycle A </div>;
  }
}

export default LifecycleA;
```

`Ouput`

```console
  LifeCycle A constructor
  Lifecycle A getDerived from props
  Lifecycle A render
  Lifecycle A Did Mount
```

what will be order of if you have child component LifecycleB in LifecycleA ?

```console
  LifeCycle A constructor
  Lifecycle A getDerived from props
  Lifecycle A render
  LifeCycle B constructor
  Lifecycle B getDerived from props
  Lifecycle B render
  Lifecycle B Did Mount
  Lifecycle A Did Mount
```

### Order of method invoking in `updating` phase

```js

static getDerviedFromProps(props ,state)
        ⬇
shouldComponentUpdate()
        ⬇
      render()
        ⬇
getSnapshotBeforeUpdate()
        ⬇
componentDidUpdate()
```

### Order of method invoking in `unmounting` phase

```js
componentWillUnmount();
```

### Order of method invoking in `error handling` phase

```js
  static getDerviedFromError()
          ⬇
  componentDidCatch();
```
