import React, { Component } from 'react'

//引入儿歌封装的组件

import Item from "@/components/er_item"

//引入网络请求文件

import {getWatchSongList} from "@/api/"

import "@/css/watchsong.css"

export default class Song extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div className="songlist">
                {this.state.list.map((item,index)=>{
                    item.ind=index;
                    return item.pic&&<Item key={item.id} {...item} jumpDetail={this.detail.bind(this)}></Item>
                })}
                
            </div>
        )
    }
    detail(url,pathname){
        //console.log(this.props.history)
        this.props.history.push("/detail",{url,type:pathname})
    }
    async componentDidMount(){
        //在儿歌的生命周期中请求数据
        let data=await getWatchSongList();
        //console.log(data)
        this.setState({
            list:data.list
        })
    }
}
