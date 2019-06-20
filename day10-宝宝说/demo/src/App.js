import React from 'react';
import './css/App.css';

import RouteConfig from "@/route/RouteConfig.js"

import RouteView from "@/route/RouteView.js"

import {BrowserRouter as Router} from "react-router-dom"

class App extends React.Component{
    render(){
      return (
        <Router>
            <RouteView children={RouteConfig}></RouteView>
        </Router>
      )
    }
}

export default App;
