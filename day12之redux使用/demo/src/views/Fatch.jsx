import React, { Component } from 'react'

//引入仓库
import store from "../store/index"


//引入两个子组件
import BigChild from "./bigChild.jsx";
import SmallChild from "./smallChild.jsx"


//引入添加用户组件
import User from "./user.jsx"

//引入添加列表

import List from "./list.jsx"


export default class Fatch extends Component {
    state={
        user:"",
        list:[]
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <BigChild></BigChild>
                <SmallChild></SmallChild>
                <User></User>
                <List></List>
                展示添加的姓名{this.state.user.userReducer&&this.state.user.userReducer.name}<br/>

                展示添加的列表{this.state.list.listReducer&&this.state.list.listReducer}
            </div>
        )
    }
    componentDidMount(){
        //订阅一下添加用户reducer然后渲染到这个页面上
        store.subscribe(()=>{
            this.setState({
                user:store.getState(),
                list:store.getState()
            })
        })
    }
}
