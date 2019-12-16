import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";

/**
 * to start running this project install Node.js on your device.
 * @version 10.16.3
 * @see [Node.js](https://nodejs.org/en/) for installation
 */
const history = createBrowserHistory();

//ReactDOM.render(What do I want to render, where do I want to render it#ID);
ReactDOM.render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
