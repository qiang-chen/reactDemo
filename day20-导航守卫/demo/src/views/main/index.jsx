import React, { Component } from 'react'

import {NavLink} from "react-router-dom"

//引入路由显示组价

import RouteView from "@/route/RouteView"


import "@/css/main.scss"

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="mainList">
                    <RouteView children={this.props.children}></RouteView>
                </div>
                <footer>
                    <span>
                        <NavLink to="/main/home">首页</NavLink>
                    </span>
                    <span>
                        <NavLink to="/main/list">列表</NavLink>
                    </span>
                    <span>
                        <NavLink to="/main/my">我的</NavLink>
                    </span>
                </footer>
            </div>
        )
    }
}
