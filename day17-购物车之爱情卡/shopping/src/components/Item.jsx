import React, { Component } from 'react'

import "@/css/item.scss"

export default class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
            <div className="item">
                <h2>{this.props.title}</h2>
                <h4>{this.props.price}</h4>
                <div>{this.props.num?<span onClick={this.btn.bind(this,"-")}>-</span>:""}<span onClick={this.btn.bind(this,"+")}>+</span></div>
                {this.props.num?<p>{this.props.num}</p>:""}
            </div>
        )
    }
    btn(type){
        console.log(type)
        this.props.saveBuyList(type,this.props)
    }
}
