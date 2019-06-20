import React, { Component } from 'react'

import {getListenStory} from "@/api/index"

//引入宝宝听组件

import Item from "@/components/listen_Item"

export default class ListenSong extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div>
                {this.state.list.map((item,index)=>{
                    item.ind=index;
                    return item.artist&&<Item {...item} key={item.id}></Item>
                })}
            </div>
        )
    }
   async  componentDidMount(){
        //网络请求数据
        let data=await getListenStory();
        //console.log(data)
        this.setState({
            list:data.list
        })
    }
}
