import React, { Component } from 'react'
import "@/css/main.css";
import RouteView from "@/route/RouteView";
import {NavLink} from "react-router-dom"
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className="container">
                <header>宝宝看</header>
                <main>
                    <RouteView children={this.props.children}></RouteView>
                </main>
                <footer>
                    <span>
                        <NavLink to="/main/watch">宝宝看</NavLink>
                        </span>
                    <span>
                        
                        <NavLink to="/main/listen">宝宝听</NavLink>
                    </span>
                    <span>
                    <NavLink to="/main/my">我的</NavLink></span>
                </footer>
            </div>
        )
    }
}
