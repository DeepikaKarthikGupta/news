import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import App from './App';
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// const rootElement = document.getElementById("root");
// ReactDOM.hydrate(
//   <BrowserRouter>
//   <Provider store={store}>
//     <App />
//   </Provider></BrowserRouter>,
//   rootElement
// );

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider></BrowserRouter>,
  rootElement
);
