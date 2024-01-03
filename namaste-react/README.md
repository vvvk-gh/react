# React

#### Building a production ready app

- linking the npm into your project using `npm init`

- Install dependencies : 2 types of dependencies

  - Dev dependency : used only at development phase.
    (npm install -D `<packagename>`)
  - Normal dependency : used at production also.
    (npm install `<packagename>`)

- Caret (^) vs tilde (~)
  version: 17.0.1
  antanomy: (major.minor.patch)

  - Caret: installs all the minor updates automatically.

  ```
      {
          "dependencies": {
              "react": "^17.0.1"
          }
      }
  ```

  - Tilde: installs all the major updates automatically.

  ```
      {
          "dependencies": {
              "react": "~17.0.1"
          }
      }
  ```

- package.json vs package-lock.json

  -package.json is basically the configuration file of your application.

  ```
  ex : ^2.8.3 (before and after update)
  ```

  package-lock.json will lock exact version of dependecies used in the project.

  ```
  ex: 2.8.3 (before)
  ex: 2.8.4 (after update)
  ex: 2.9.5 (after update)
  ```

It also check the `integrity` which is hash code to used to verify is the same version being deployed at production.

to overcome issues like my code is working at local but not in production.

- npx vs npm

npm: install the package modules.
npx: excutes the package modules.

- Why node-modules got so many package ?

when ever you install a package it might have depency of some other package and it might have depency of another package and so..on
This property is called as trasitive dependency.

#### What is a bundler ?

All the code files needs to be bundled together.

Benifits: Minified, cached, compressed and clean before sending to the production.
Ex : Webpack, Parcel.

Parcel : Benefits of using paracel.

- Dev Build
- Local server
- Hot module replacment(HMR) = replaces the content on save: cache + dist
- Compression
- File watching algorithm - written in c++
- Caching: faster builds
- Image optimazation
- Bundling
- Minification
- Consistent Hashing
- Code splitting
- Differencial bundling - helps to run smoothly in old browsers(browserslist).
- Diagnostics
- Error Handling
- HTTPS
- Tree shaking - remove unused code.
- Diffrent dev and prod bundles

Browserslist: giving the input of what all browsers it should supprt to create different builds accordingly

```
"browserslist" : {
    "last 2 versions"
}

"browserslist" : {
    "cover 93.5% in IN"
}
```

read more at [browserslist](https://github.com/browserslist/browserslist#query-composition)

- normal build vs production build

  - npx parcel index.html
  - npx parcel build index.html (prod)

Note : When using parcel we have to remove the `main` field at `package.json` file

- Replace commands with scripts at `package.json` file

```
"scripts" : {
    "start": parcel index.html
    "build": parecel build index.html
    "test" : jest
}
```

going forward in the project you can uses these scripts instead of npx commands

example :

```
npm run start || npm start (only shortcut which works for start)
npm run build
```

- React Element vs JSX

```js
// React element ==> object ==render()==> HTML Element
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'This is a heading'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(heading);
```

```JSX
// JSX - HTML-like, XML-like syntax to write easy react.
const jsxHeading = <h1>This is a heading thru JSX !</h1>;
console.log(jsxHeading);
```

both outputs the same object but JSX is an easy syntax to write, read and understand.

- How JSX converts the code browser understanable

  - Any JSX expression throws an error at dev tools of the browsers.
  - The Web bundler manages to transpile the code via barbel before it reaches js engine and makes it understandable to the browser.
    > Babel transpliation :
    > JSX ==> Barbel transplies to React.createElement ==> ReactElement-JS object ==> HTMLElement(render)

- All the attributes in the JSX should be in camcel case

  ```JSX
  const heading = <h1 className="root" tabIndex="5">This is heading !</h1>
  ```

### Building a food delivery app (Anatomy)

- Homepage

  - Logo
  - Nav-items

- Body

  - Search
  - Restuarent container
    -Restuarent card
    - Img
    - Cusines
    - ratings
    - delivery time

- Footer
  - Copyright
  - Links
  - Address
  - Contact

> Tool Suggestion :
> Api copied from the network call of swiggy
> Easily copied into our code via `json viewer Pro `extension

- Component Composition : The concept of placing a existing component into the other component

- Props : It's the shortcut for properties. we use props when you want to dynamically send some data to the component

```jsx
  <RestaurentCard resName='KFC' cuisine ='Zinger Meal, Biriyani-Box, Bucket-Chicken'/>
  <RestaurentCard resName='McD' cuisine ='French Fries, Happy Meal, Preuiem Burger'/>
```

- What is Config Driven UI ?
  Controlling the UI using the data (config) and the config comes from backend.

  > Delhi has different carousel.
  > Hyderabad has a different carousel.
  > So based the api configuration or data the UI will be changed.

- Production level API's call
  To know how entripise level backend data will look like and how is it structured and passed into the frontend
  We can look into the network tabs of swiggy and zomato and try to copy the request response data.
  Json Viewer pro chrome extension will help us understand in tree and graph flow how the data is structured.

- Why its important to send the unique keys while iterating?
  To avoid re-rendering of the components as react doesnt know which card is new.
  It gives a huge performance penalty.
  If we give id/key for the component in the iteration and if some new restaurent is added so reacts understands the one only new one needs to be rendered and not all the existing ones can remain same.

```jsx
<div className='res-container'>
  {resList.map(restuarent => <RestuarentCard key={restuarent.info.id} resDetails={restuarent} />;)}
</div>
```

- Can we use index as the key in the iteration ?

  - Even though logically its correct react officials or the dev document don't recommend doing it.
    > Notes : Let me explain, a key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.
    > [More here](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)

- Export Types

  - Default Export/Import

  ```js
      export default <component>
      import component  from "./filepath"
  ```

  We can export only one default for the the file.

- Named Export/Import

  ```JSX
    export const <component>
    import {component } from "./filepath"
  ```

  Supports multiple exports from the file.

#### React Hooks

(Normal JS utility functions)

- useState() - Superpowerful state variables in react
  Whenever a state variable updates/changes react re-renders the component.
  But even the whole component renders its will only update the elements those need to be updated via diff alogirthm.

  ##### Reconcliation Cycle upon state variable change.

  - How react works behind the scences once the value of an state variable is modified ?

  - Re-conciliation Algorithm is also known as React-Fiber

    ![Img](./src/media/reconciliationAlgoritm.svg)

    detailed explaination on [Adclite](https://github.com/acdlite/react-fiber-architecture)

  - Monolith vs Micro-service

    ![img2](./src/media/MonolithvsMicroService.svg)

  - Two ways to send data from backend to the UI.

    1. onload site ---> make an API call ---(fetched data wait for 500ms)---> Render UI.

    2. As soon as the page load ---> quickly render ---> make an API ----> re-render UI.

    recommended the 2nd approach for any app development as it got better User experience.

- useEffect Hook :

  - This is used when you have to do/update/modify something at content after rendering the component
  - we have to write logic inside useEffect callback.

    ```jsx
    useEffect(() => {
      console.log('UseEffect Called');
    }, []);
    ```

    The useEffect function will has 2 arguments

    - callback function : this function is called after component renders

    - dependency array : generally every time the component is rendered the useEffect is called but we can change this behaviour using depency array

    - No dependency array

      ```jsx
      useEffect(() => {
        console.log('UseEffect Called');
      });
      ```

      this will execute everytime the compontent is rendered.

    - Empty dependency array will load the useEffect only once that on a intial load.

      ```jsx
      useEffect(() => {
        console.log('UseEffect Called');
      }, []);
      ```

    - Dependency array got some variable then it will only render when the variable is updated.

      ```jsx
      useEffect(() => {
        console.log('UseEffect Called');
      }, [btnName]);
      ```

      So everytime btnName updates, the useEffect is called.
      UseEffect() get called on intial load in all 3 cases.

- Shimmer UI : It represents the page actual UI, so users will understand how quickly the web or mobile app will load.

#### React Routes

- We need to create browserConfiguration
- Define which path leads to which component/element

```jsx
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
```

- Once above browser configuration is made, we need to provide our configration to render it in the application.
- This possible using `RouterProvdier` component

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
//This will render based on url change.
```

- Handling unexpected routes
  for example if an user tried `<url>/12331212` that route that exist in your application
  That can also will be handled in browserconfing like below

  ```jsx
  import { createBrowserRouter, RouterProvider } from 'react-dom-router';

  const appRoutes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />
      errorElement: <Error /> //This compnent will render when the user enters wrong path.
    }
  ])
  ```

  `useRouteError` Hook will gives the deeper details of the error.

  ```jsx
  //Error.js
  import { useRouteError } from 'react-router-dom';
  const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
      <div>
        <h3>oops Something went wrong !!</h3>
        /*what went wrong*/
        {err.code} {err.statusText}
      </div>
    );
  };

  export default Error;
  ```

  children routes and outlet

  ```jsx
  import { createBrowserRouter, RouterProvider, Outlet } from 'rect-router-dom';

  const AppLayout = () => {
    return (
      <div className="app">
      <Header />
      <Outlet />
      </div>
    )
  }
  const appRoutes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Body />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  const root = reactDOM.createRoot(document.getElementById('root'));
  root.render(<ReactProvider router={appRoutes}>);
  ```

React Hook life cycle (class)

```jsx
import React from 'react';
class LifeCycle extends from React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("The parent constructror");
  };

//This will execute after the compilation of compontent attached to the screen.
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("The parent Render");
    return (<h1>This is a Life cycle Component<h2>)
  }
}
```

> The order of execution of logs
> parent constructor.
> parent render.
> parent component did mount.

if this a has child

```jsx
//parent.js
import React from 'react';
class LifeCycle extends from React.Component {
  constructor(props) {
   //super(props)
   //state
    console.log("The parent constructror");
  };

//This will execute after the compilation of compontent attached to the screen.
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("The parent Render");
    return (
      <div>
        <h1>This is a Life cycle Component<h2>
        <FirstChild>
      </div>
      )
  }
}
```

```jsx
//child
import {Component} from 'react';
class FirstChild extends from React {
  constructor(props) {
   //super(props)
   //state
    console.log("First constructror");
  };

//This will execute after the compilation of compontent attached to the screen.
  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    console.log("Child Render");
    return (
      <div>
        <h1>This is a Life cycle Component<h2>
        <FirstChild>
      </div>
      )
  }
}
```

life cycle whenthe parent and child.

> 1.parent constructor
> 2.parent render
> 3.First child constructor
> 4.First child render
> 5.First Child DidComponent Mount
> 6.Parent DidComponent Mount

what if its got 2 child

```jsx
//parent.js
import React from 'react';
class LifeCycle extends from React.Component {
  constructor(props) {
   //super(props)
   //state
    console.log("The parent constructror");
  };

//This will execute after the compilation of compontent attached to the screen.
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("The parent Render");
    return (
      <div>
        <h1>This is a Life cycle Component<h2>
        <FirstChild>
        <SecondChild>
      </div>
      )
  }
}
```

Wrong Sequence (people assume)

> The order of sequence for life cycle methods :
> 1.Parent constructor
> 2.Parent render
> 3.FirstChild constructor
> 4.FirstChild render
> 5.FirstChild DidComponent Mount
> 6.secondChild constructor 7.
> 8.secondChild DidComponentMount
> 9.Parent DidComponent Mount

Right seqence (this is how it works)

> The order of sequence for life cycle methods :
> 1.Parent constructor
> 2.Parent render
> 3.FirstChild constructor
> 4.FirstChild render
> 5.secondChild constructor
> 6.secondChild render
> 7.secondChild DidComponentMount
> 8.FirstChild DidComponent Mount
> 9.Parent DidComponent Mount

But how ?
The react has 2 phases

> render phase = constructor + render
> Commit phase = react will update the dom + componentdid mount

so thats the reason why the above example got that batched execution of construtor and renders and later Did Component mount.

[For more details](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
