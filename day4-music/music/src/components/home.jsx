import React, { Component } from 'react'

import Item from "./item"

import "../css/home.css"

import Right from "./right.jsx"

export default class item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            flagMusic: true,
            num:0
        }
    }
    changeCount(id) {
        this.setState({
            count: id
        })
    }
    changeMusic(res){
        this.setState({
            flagMusic:res
        })
    }
    onShow(msg){
        this.setState({
            msg
        })
    }
    onVolume(num){
        console.log(parseFloat(num/100),"home")
        this.setState({
            num
        })
    }
    render() {
        return (
            <>
                <div className="leftBtn">
                    {this.props.bankOne.map(item => {

                        if (this.state.count === item.keyCode) {
                            item.flag = true
                        } else {
                            item.flag = false
                        }
                        return <Item flagePlay={this.props.flagePlay} {...item} key={item.id} changeCount={this.changeCount.bind(this)} onShow={this.onShow.bind(this)} num={this.state.num}></Item>
                        
                    })}
                </div>
                <div className="right">
                    <Right changeMusic={this.changeMusic.bind(this)} msg={this.state.msg} onVolume={this.onVolume.bind(this)} onMusic={this.props.onMusic} onPlays={this.props.onPlays}></Right>
                </div>
            </>

        )
    }
}
