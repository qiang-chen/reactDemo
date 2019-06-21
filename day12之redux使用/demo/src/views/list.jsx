import React, { Component } from 'react'

import store from "../store/index"


export default class List extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    store.dispatch({type:"LIST_ADD",list:[1,2,3]})
                }}>点击按钮添加用户列表</button>
            </div>
        )
    }
}
