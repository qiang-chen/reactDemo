import React, { Component } from 'react'

import "@/css/Item.scss"

import { Button } from "antd"

import {connect} from "react-redux"

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconLoading:false
        }
    }
    render() {
        //console.log(this.props,"item组件中的props是什么")
        return (
            <>
                <li>
                    <span>{this.props.title}</span>
                    <Button
                        type="primary"
                        icon="plus"
                        loading={this.state.iconLoading}
                        onClick={this.add.bind(this)}
                    >
                        {this.props.flag ? "添加" : "已添加"}
                    </Button>
                </li>
            </>
        )
    }
    add() {
        this.setState({
            iconLoading:true
        })
        console.log(this.props,"-----------------------------------------------------------------------")
        let arr=this.props.list;
        if(this.props.flag){
            console.log(arr,"进来几次")
            let opj={...this.props};
            delete opj.list;
            delete opj.savaObj;
            console.log(opj,"这是什么")
            opj.key=this.props.id+new Date().getTime();
            opj.flag=false;
            console.log(opj,"增加属性之后的opj是什么")
            arr.push(opj)
            console.log(arr,"添加")
            this.props.savaObj(arr)
        }
        
    }
}

const mapStateToProps=(state)=>{
    return {
        list:state.reducerFrom
    }
}

const mapDisPatchToProps=(dispatch)=>{
    return {
        savaObj:(arr)=>{
            dispatch({type:"FROM_LIST",arr})
        }
    }
}


Item=connect(mapStateToProps,mapDisPatchToProps)(Item)