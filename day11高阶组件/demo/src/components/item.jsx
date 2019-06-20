import React, { Component } from 'react'

import {Heigh} from "./index.js"

import Tan from "../hos/Cover.jsx";

function Box(){
    return <div>
        <h2>确定删除吗</h2>
        <span>确定</span><span onClick={()=>{
            window.cover.close()
        }}>取消</span>
    </div>
}

let Wrap=Tan(Box)

export default class Item extends Component {
    render() {
        return (
            <div>
                我是一号组件
                <button onClick={()=>{
                    this.props.history.push("/detail1")
                }}>详情一</button>
                <button onClick={()=>{
                    this.props.history.push("/detail2")
                }}>详情二</button>

                <button onClick={()=>{
                    //console.log(1)
                    window.cover.show()
                    console.log(Wrap.isMounted)
                   //console.log(window.cover.show())
                }}>弹框</button>
                <Wrap></Wrap>
            </div>
        )
    }
}


Item=Heigh("pink")(Item)
