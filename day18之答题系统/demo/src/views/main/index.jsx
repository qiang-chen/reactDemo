import React, { Component } from 'react'

import RouteView from "@/route/RouteView"

import {NavLink} from "react-router-dom"

import {connect} from "react-redux"

//引入api网络请求
import {getExamList} from "@/api/"

import "@/css/main.scss"

export default class Main extends Component {
    render() {
        //console.log(this.props.children)
        return (
            <div className="container">
                <header>
                    <span></span><span>真题模考</span>
                </header>
                <main>
                    <RouteView children={this.props.children}></RouteView>
                </main>
                <footer>
                    <span>
                        收藏
                        </span>
                    <span>
                        <NavLink to="/detail">
                            答题卡
                        </NavLink>
                    </span>
                    <span>时间</span>
                </footer>
            </div>
        )
    }
    componentDidMount(){
        //在主页面将所有的数据存到仓库中去
        this.props.saveExamList(getExamList)
    }
}


const mapStateToProps=(state)=>{
    return {
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        saveExamList:(fn)=>{  //存所有试题
            dispatch(fn)
        }
    }
}

Main=connect(mapStateToProps,mapDispatchToProps)(Main)