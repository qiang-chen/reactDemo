import React from 'react';
import './css/App.css';

import {BrowserRouter as Router} from "react-router-dom"

import RouteConfig from "@/route/route-config"

//引入路由 封装好的路由显示组件

import RouteView from "@/route/route-view.js"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render(){
    return (
      <div className="app">
        <Router>
          <RouteView children={RouteConfig}></RouteView>
        </Router>
      </div>
    )
  }
}

export default App;
