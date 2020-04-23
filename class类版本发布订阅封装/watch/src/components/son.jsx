import React, { Component } from 'react'

//引入封装好的发布订阅方法
import Wather from "../watcher/index.js"


export default class Son extends Component {

    constructor(props){
        super(props)
        this.state={
            msg:""
        }
    }

    //调用订阅者模式接受父亲的发布
    //在生命周期中订阅把
    componentDidMount(){
        Wather.subscriber(this.fatherMsg.bind(this))
    }
    fatherMsg(msg){
        console.log(msg,"订阅到的消息")
        this.setState({
            msg
        })
    }
    render() {
        return (
            <div>
                儿子组件发送订阅接受父亲发布的消息:
                <li>{this.state.msg}</li>
            </div>
        )
    }
}
