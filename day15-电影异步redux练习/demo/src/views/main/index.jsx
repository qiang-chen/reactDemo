import React, { Component } from 'react'

import {connect} from  "react-redux"

import {getList} from "@/api/index"

import {NavLink} from "react-router-dom"

import RouteView from "@/route/RouteView"

import "@/css/main.scss"

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <span>标题</span>
                </div>
                <div className="video">
                    <video src={this.props.url.url_1} autoPlay controls></video>
                </div>
                <div className="xian"></div>
                <div className="nav">
                    <span>
                        <NavLink to={"/main/introduce"}>介绍</NavLink>
                    </span>
                    <span>
                        <NavLink to={"/main/video"}>视频</NavLink>
                    </span>
                    <span>
                        <NavLink to={"/main/audio"}>音频</NavLink>
                    </span>
                </div>
                <div className="xian"></div>
                <div className="main">
                    <RouteView children={this.props.children}></RouteView>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //发送网络请求获取数据
        this.props.getList(getList);
        
    }
}

const mapStateToProps=(state)=>{
    return {
        list:state.reducerList,
        url:state.reducerPlay
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getList:(fn)=>{
            dispatch(fn)
        }
    }
}


Main=connect(mapStateToProps,mapDispatchToProps)(Main)