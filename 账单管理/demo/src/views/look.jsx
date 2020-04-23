import React, { Component } from 'react'

import {connect} from "react-redux"

export default class Look extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        console.log(this.props.list,"11111")
        return (
            <div>
                {this.props.list.length&&this.props.list.map((item,index)=>{
                    return <h4 key={index}>类型：{item.type}----金钱{item.add}</h4>
                })}
                <h1>
                    总计：-- {this.props.totle}
                </h1>
            </div>
        )
    }
    componentWillReceiveProps(){
        this.props.saveTotle(this.props)
    }
}

const mapStateToProps=(state)=>{
    let totle=0;
    state.addReducer.forEach(item=>{
        if(item.type==="收入"){
            totle+=item.add*1;
        }else{
            totle-=item.add*1;
        }
    })
    return {
        list:state.addReducer,
        totle:totle,//计算完金钱的总数后将其挂载到props上面去
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        saveTotle:(totle)=>{
            dispatch({type:"TOTLE",totle})
        }
    }
}

Look=connect(mapStateToProps,mapDispatchToProps)(Look)
