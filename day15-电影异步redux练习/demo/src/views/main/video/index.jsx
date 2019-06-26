import React, { Component } from 'react'

import Item from "@/components/Item"
import {connect} from  "react-redux"
import "@/css/audio.scss"

export default class Video extends Component {
    render() {
        return (
            <div>
                <div className="list">
                {this.props.list.urls&&this.props.list.urls.map(item=>{
                    return <Item key={item.urlid} {...item}></Item>
                })}
            </div>
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


Video=connect(mapStateToProps,mapDispatchToProps)(Video)