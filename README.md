# Southern Cross Project
This project focuses on showcasing Daniel's full-stack development skillset by creating a full-stack web application which searches for a specific member based on search parameters.

## Technology Stack
- **LowDB** (JSON Database)
- **Node & Express** (Backend)
- **React** (Frontend)

## Features
- Search for a member based on their member card number and/or their policy number
- Supports smaller sized devices such as tablets and iPads

## Installation and how to use
The project can be obtained by either downloading directly via this GitHub repo or cloned by running the following command:

`git clone https://github.com/YungiKim1999/Souther-Cross-Assignment`

It is required that [node](https://nodejs.org/en/) is installed before running the following commands.

#### Firstly, we want to navigate into the backend folder to perform a clean install of our dependencies and start it up.

```
$ cd SouthernXProj/
$ cd backend/
$ npm ci
added XXX packages in Xs
$ npm start
```

#### We should expect this message in whatever terminal is being used:

```
[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./index.js`
Server currently listening to http://localhost:8080
```

#### Next we will do the same in the frontend folder

```
$ cd frontend/
$ npm ci
added XXX packages in Xs
$ npm start
```

#### And we expect this message:

```
Compiled successfully!

You can now view kimchi-stonks-app in the browser.

  http://localhost:3000

Note that the development build is not optimized. 
To create a production build, use npm run build. 
```

## Backend Testing

Navigate into the backend folder `src/backend` and run the following command:

`npm test`