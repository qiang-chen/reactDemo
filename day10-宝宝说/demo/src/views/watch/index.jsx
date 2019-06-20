import React, { Component } from 'react'
import "@/css/watch.css";

import { NavLink } from "react-router-dom"

import RouteView from "@/route/RouteView"

export default class Watch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="watch">
                <div className="nav">
                    <span>
                        <NavLink to="/main/watch/song">儿歌</NavLink>
                    </span>
                    <span><NavLink to="/main/watch/story">故事</NavLink></span>
                    <span><NavLink to="/main/watch/animation">动画片</NavLink></span>
                </div>
                <div className="list">
                    <RouteView children={this.props.children}></RouteView>
                </div>
            </div>

        )
    }
}
