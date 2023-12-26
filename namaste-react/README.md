#Namaste React

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

Why node-modules got so many package ?

- when ever you install a package it might have depency of some other package and it might have depency of another package and so..on
  This property is called as trasitive dependency.

##### What is a bundler ?

All the code files needs to be bundled together.

Benifits: Minified, cached, compressed and clean before sending to the production.
Ex : Webpack, Parcel.

Parcel : Benefits of using paracel.

- Dev Build
- Local server
- HMR = Hot module replacement (replaces the content on save)
- Compression
- File watching Algorithm - written in c++
- Caching: faster builds
- Image optimazation
- Bundling
- Minification
- Consistent Hashing
- Code splitting
- Differencial bundling - helps to run smoothly in old and different versions of the browser.
- Diagnostics
- Error Handling
- HTTPS
