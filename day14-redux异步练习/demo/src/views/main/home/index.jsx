import React, { Component } from 'react'

import { connect } from "react-redux"

import {Link} from "react-router-dom"
//引入网络请求文件

import { getList } from "../../../api/index"

export default class Home extends Component {
    render() {
        //console.log(this.props)
        return (
            <div>
                home
                
                <Link to={{
                    pathname:"/detail",
                    search:"?id=1",
                    state:{fromDashboard:11}
            }}>跳起来啊啊啊啊</Link>
            <button onClick={this.btnClick.bind(this)}>获取数据</button>
            </div >
        )
    }
    async list(next) {
        let data = await getList();
        //console.log(data)
        next({ type: "ADD_LIST", data: data.list });

        //顺便跳转页面、
        this.props.history.push("/main/bus")
    }
    btnClick() {
        //调用下面的异步方法
        this.props.getList(this.list.bind(this));
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: (fn) => {
            //放一个函数就是异步请求数据
            dispatch(fn)
        }
    }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)