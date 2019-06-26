import React, { Component } from 'react'

import "@/css/Item.scss"

import {connect} from  "react-redux"

import {playUrl} from "@/api/index"

export default class Item extends Component {
    render() {
        return (
            <div className="item" onClick={this.play.bind(this,this.props.urlid)}>
                <span>{this.props.sort_title}</span>
            </div>
        )
    }
    play(id){
        console.log(id)
        this.props.getUrl(playUrl.bind(this,id))
    }
}


const mapStateToProps=(state)=>{
    return {
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getUrl:(fn)=>{
            dispatch(fn)
        }
    }
}


Item=connect(mapStateToProps,mapDispatchToProps)(Item)