import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Route from './route/index';
import App from "./App.js"
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Route/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
