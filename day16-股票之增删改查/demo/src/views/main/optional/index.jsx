import React, { Component } from 'react'

import "@/css/optional.scss"

import { connect } from "react-redux"

import { Table } from "antd";


const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
    }, {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    }
];

export default class Optional extends Component {
    render() {
        console.log(this.props.list,"默认数据")
        return (
            <div className="list">
                <div className="edit">
                    <span onClick={()=>{
                        //跳到编辑页面
                        this.props.history.push("/edit")
                    }}>编辑</span>
                    <span onClick={()=>{
                        this.props.history.push("/add")
                    }}>添加</span>
                </div>
                <div className="nav">
                   {this.props.list.length&&<Table dataSource={this.props.list} columns={columns}/>}
                </div>
                <div className="content">
                    {!this.props.list.length && <div className="box" onClick={() => {
                        //console.log(this.props)
                        this.props.history.push("/add")
                    }}>
                        <p>+</p>
                        <p>暂无数据，请点击添加</p>
                    </div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.reducerFrom
    }
}

Optional = connect(mapStateToProps)(Optional)