import React, { Component } from 'react'

import {connect} from "react-redux"

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state={
            type:"",
            add:""
        }
    }
    render() {
        return (
            <div>
                <p>账单明细：
                    <select value={this.state.type} onChange={(e)=>{
                        console.log(e.target.selectedIndex.innerText)
                        this.setState({
                            type:e.target.value
                        })
                    }}>
                    <option value="请选择">请选择</option>
                    <option value="收入">收入</option>
                    <option value="支出">支出</option>
                    <option value="奖金">奖金</option>
                    <option value="纳税">纳税</option>
                </select></p>
                <p>填入费用：<input type="text" value={this.state.add} onChange={(e)=>{
                    
                    this.setState({
                        add:e.target.value
                    })
                }}/>(元)</p>
                <p>填入时间：<input type="date"/></p>
                <p>账单类型：
                    <select>
                    <option value="">请选择</option>
                    <option value="">个人</option>
                    <option value="">公司</option>
                </select></p>
                <p>
                    备注：
                </p>
                <textarea name="" id="" cols="50" rows="5"></textarea>
                <p><button>取消</button><button onClick={()=>{
                    this.props.saveToStore({type:this.state.type,add:this.state.add})
                }}>保存</button></p>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        saveToStore:(opj)=>{
            dispatch({type:"ADD_LIST",opj})
        }
    }
}

Add=connect(mapStateToProps,mapDispatchToProps)(Add)
