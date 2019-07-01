import React, { Component } from 'react'

import {connect} from "react-redux"


import "@/css/home.scss"

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render() {
        return (
            <div>
                {this.props.examList.map((item,index)=>{
                    return  <h2 key={index} className={index===this.state.count?"active":""} onClick={()=>{
                        this.setState({
                            count:index
                        })
                    }}>{item.title}</h2>
                })}
                <button onClick={()=>{
                    //在点击按钮的时候将选择的类型存到对应的仓库中去
                    //先根据上面的count选择出来对应的值
                    let {count}=this.state;
                    this.props.history.push("/main/exam/"+count)
                    
                }}>点击按钮登录</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        examList:state.ExamListReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        saveExamList:(fn)=>{  //存所有试题
            dispatch(fn)
        },
        saveRadioList:(data)=>{  //存单选试题
            dispatch({type:"RADIO",data})
        }
    }
}

Home=connect(mapStateToProps,mapDispatchToProps)(Home)