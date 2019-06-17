import React, { Component } from 'react'

import Watcher from "../watcher/"



export default class Child extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        Watcher.subscriber("child",(msg)=>{
            console.log(msg)
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
                儿子组件
                <h3>
                    动态组件 ：{this.props.children}
                </h3>
            </div>
        )
    }
}
