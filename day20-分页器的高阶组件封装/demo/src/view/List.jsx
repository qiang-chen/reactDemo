import React, { Component } from 'react'

import Mock from "mockjs"

import Page from "../hoc/index"

let list=Mock.mock({
    "list|36":[
        {
            title:"@ctitle",
            "id|+1":1,
        }
    ]
})

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div>
                {this.props.list&&this.props.list.map(item=>{
                    return <li key={item.id}>{item.title}------{item.id}</li>
                })}
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            list:list.list
        })
    }
}

List=Page({
    data:list.list,
    sum:5,//每页显示的列表数量

})(List)