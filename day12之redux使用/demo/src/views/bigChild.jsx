import React, { Component } from 'react'

//引入仓库

import store from "../store/index";



export default class BigChild extends Component {
    state = {
        hello: ""

    };
    render() {
        return (
            <div>
                大儿子
            </div>
        )
    }
    componentDidMount(){
        //接受二弟消息
        store.subscribe(()=>{
            console.log(store.getState(),"大哥组件")
            this.setState({
                hello: store.getState()
            })
        })
    }
}
