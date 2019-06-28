import React, { Component } from 'react'

import Head from "@/components/Head.jsx"

import { NavLink} from "react-router-dom"

//引入路由表和配置文件
import RouteView from '@/route/RouteView';

import "@/css/main.scss"

export default class Main extends Component {
    render() {
        return (
                <div className="container">
                    <Head></Head>
                    <main>
                        <RouteView children={this.props.children}></RouteView>
                    </main>
                    <footer id="footer">
                        <span>
                            <NavLink to="/main/home">
                                首页
                        </NavLink>
                        </span>
                        <span>
                            <NavLink to="/main/market">
                                行情
                        </NavLink>
                        </span>
                        <span>
                            <NavLink to="/main/optional">
                                自选
                        </NavLink>
                        </span>
                        <span>
                            <NavLink to="/main/deal">
                                交易
                        </NavLink>
                        </span>
                        <span>
                            <NavLink to="/main/consult">
                                咨询
                        </NavLink>
                        </span>
                    </footer>
                </div>
        )
    }
}
