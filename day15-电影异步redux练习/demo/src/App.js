import React from 'react';
import './css/App.css';


import store from "./store/index"

import {Provider} from "react-redux"

import {HashRouter as Router} from "react-router-dom"

//引入路由表和路由展示文件

import RouteConfig from "@/route/RouteConfig";
import RouteView from "@/route/RouteView"

function App() {
  return (
    <Provider store={store}>
        <Router>
            <RouteView children={RouteConfig}></RouteView>
        </Router>
    </Provider>
   
  );
}

export default App;
