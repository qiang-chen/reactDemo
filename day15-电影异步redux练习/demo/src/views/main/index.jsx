import React, { Component } from 'react'

import {connect} from  "react-redux"

import {getList} from "@/api/index"

import {NavLink} from "react-router-dom"

import RouteView from "@/route/RouteView"

import "@/css/main.scss"

import Header from "@/components/header"

import Show from "@/components/Show"


export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <Header></Header>
                <Show></Show>
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