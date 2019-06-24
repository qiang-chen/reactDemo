import React, { Component } from 'react'

import {connect} from "react-redux"

export default class Bus extends Component {
    render() {
        return (
            <div>
                bus
                {this.props.list.slice(1).map((item,index)=>{
                    return <div key={index} onClick={()=>{
                        //点击跳转详情
                        //this.props.history.push("/detail",{downurl:999});

                        this.props.history.push("/detail?id="+99)
                        //this.props.history.push("/detail/"+8)

                    }}>{item.name&&<h4>{item.name}</h4>}</div>
                })}
            </div>
        )
    }
    componentDidMount(){
        //在这篇文件中获取异步请求后然后渲染到页面上
        console.log(this.props.list)
    }
}

const mapStateToProps=(state)=>{
    return {
        list:state.addReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {

    }
}

Bus=connect(mapStateToProps,mapDispatchToProps)(Bus)

