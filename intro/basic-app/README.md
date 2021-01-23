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
