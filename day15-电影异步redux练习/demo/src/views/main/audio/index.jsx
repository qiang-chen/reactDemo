import React, { Component } from 'react'
import {connect} from  "react-redux"


import Item from "@/components/Item"

import "@/css/audio.scss"

export default class Audio extends Component {
    render() {
       console.log(this.props.list)
        //this.props.list  获取到的是一个对象
        return (
            <div className="list">
                {this.props.list.urls&&this.props.list.urls.map(item=>{
                    return <Item key={item.urlid} {...item}></Item>
                })}
            </div>
        )
    }
   
}

const mapStateToProps=(state)=>{
    return {
        list:state.reducerList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getList:(fn)=>{
            dispatch(fn)
        }
    }
}


Audio=connect(mapStateToProps,mapDispatchToProps)(Audio)