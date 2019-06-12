import React, { Component } from 'react'

import "../css/list.scss"

import Item from "./item"

export default class list extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className="main">
                <header>
                    首页渲染
                </header>
                <Item list={this.props.list}></Item>
            </div>
        )
    }
}
