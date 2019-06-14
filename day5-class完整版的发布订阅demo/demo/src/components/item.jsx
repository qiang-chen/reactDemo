import React, { Component } from 'react'
import "../css/item.css"

import Watcher from "../watcher/index.js"

export default class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
            <div className="item">
                <span onClick={()=>{
                    //点赞的时候发布者身份 同时发布事件与id
                    Watcher.promulgator("Like",this.props.id)
                }}>点赞{this.props.num}</span>
                <span onClick={()=>{
                    //发布评论身份
                    Watcher.promulgator("comment",this.props.id)
                }}>评论</span>
                <span onClick={()=>{
                    Watcher.promulgator("transpond")
                }}>转发</span>
            </div>
        )
    }
}
