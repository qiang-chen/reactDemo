import React, { Component } from 'react'

//引入发布订阅者模式

import Watcher from "@/Watcher/"

import "../css/item.min.css"

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="list">
                <div className="item">
                    <div className="left">
                        <img src={this.props.img} alt=""/>
                    </div>
                    <div className="right">
                        <div className="title">
                            <b>{this.props.title}</b><span onClick={this.add.bind(this,this.props)}>来一份</span>
                        </div>
                        <div className="mid">
                            <p>{this.props.content}</p>
                        </div>
                        <div className="foot">
                            ￥<b>{this.props.price}</b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    add(props){
        //给来一份添加发布者身份用来传给菜单页面
        Watcher.promulgator("add",props)
    }
}
