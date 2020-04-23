import React, { Component } from 'react'

//引入封装好的发布订阅方法
import Wather from "../watcher/index.js"

export default class Father extends Component {
    render() {
        return (
            <div>
                父亲组件点击按钮发布事件呼叫儿子

                <button onClick={()=>{
                    //调用发布者
                    Wather.promulgator("儿子吃饭了")
                }}>点击</button>

            </div>
        )
    }
}
