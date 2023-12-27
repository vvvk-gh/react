#React

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
