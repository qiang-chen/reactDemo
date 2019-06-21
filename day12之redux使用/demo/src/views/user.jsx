import React, { Component } from 'react'

//引入仓库

import store from "../store/index"

export default class User extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    //点击按钮给仓库的user添加一条数据
                    store.dispatch({type:"ADD_USER",user:{name:"李四"}})
                }}>添加用户</button>
            </div>
        )
    }
}
