import React, { Component } from 'react'
import "../css/home.css"
import Foot from "../components/footer"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"

import Add from "./add";
import Look from "./look"

export default class home extends Component {
    render() {
        return (
            <Router>
            <div className="home">
                <div className="header"></div>
                <div className="main">
                    <Switch>
                        <Route path="/add" component={Add}></Route>
                        <Route path="/look" component={Look}></Route>
                        <Redirect to="/add"></Redirect>
                    </Switch>
                </div>
                <div className="footer">
                    <Foot/>
                </div>
            </div>
            </Router>
        )
    }
}
