import React, { Component } from 'react'

//引入动画片组件
import Item from "@/components/dong_item"

//引入网络封装请求

import {getWatchanimationList} from "@/api/"

import "@/css/dongList.css"


export default class Animation extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div className="dongList">
                {this.state.list.map((item,index)=>{
                    item.ind=index;
                    return item.pic&&<Item {...item} key={item.id} jumpDetail={this.detail.bind(this)}></Item>
                })}
            </div>
        )
    }
    detail(url,pathname){
        //console.log(this.props.history)
        this.props.history.push("/detail",{url,type:pathname})
    }
    async componentDidMount(){
        let data=await getWatchanimationList();
        this.setState({
            list:data.list
        })
    }
}
