import React, { Component } from 'react'

import "@/css/listen.css"

import RouteView from "@/route/RouteView";

import { NavLink } from "react-router-dom"

export default class Listen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="listen">
                <div className="nav">
                    <span>
                        <NavLink to="/main/listen/listensong">儿歌</NavLink>
                    </span>
                    <span><NavLink to="/main/listen/listenstory">故事</NavLink></span>
                </div>
                <div className="list">
                    <RouteView children={this.props.children}></RouteView>
                </div>
            </div>
        )
    }
}
