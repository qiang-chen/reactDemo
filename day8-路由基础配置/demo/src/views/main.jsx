import React, { Component } from 'react'

import { Link, BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"

import RouterConfig from "@/route/"




export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Router>
                <div>
                    显示页面
                    <Switch>
                        {/* 只能放route和重定向 */}
                        {RouterConfig.map((item, index) => {
                            console.log(item)
                            return <Route path={item.path} component={item.component} key={index}></Route>
                        })}
                    <Redirect from="/" to="/home"></Redirect>
                    </Switch>
                </div>
                {/*重定向  */}
                <Link to="/tap1">tap1</Link>
                <Link to="/tap2">tap2</Link>
                <Link to="/tap3">tap3</Link>
            </Router>

        )
    }
}
