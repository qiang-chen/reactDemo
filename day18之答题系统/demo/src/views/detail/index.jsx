import React, { Component } from 'react'

import { connect } from "react-redux"

import "@/css/detail.scss"

export default class Detail extends Component {
    render() {
        console.log(Object.values(this.props.examList));
        let num=0;
        return (
            <div className="detail">
                用户作答情况
                {this.props.examList.map((item,index) => {
                   
                    return <div key={index}>
                        <h2>{item.title}</h2>
                        {item.questions.map((el,iii)=>{
                            let ind=this.props.userList.findIndex(i=>i.questionId===el.id);
                            num++;
                            if(ind===-1){
                                return <span key={el.id}>{num}--没做</span>
                            }else{
                                return <span key={el.id} style={{color:"red"}}>{num}--做了</span>
                            }
                        })}
                    </div>
                })}
                <hr />
                <h1><button onClick={()=>{
                    //点击的时候跳到结果显示页面
                    this.props.history.push("/result")
                }}>
                    提交查看结果
                </button></h1>
                
            </div>
        )
    }
    componentDidMount() {

    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.ChooseReducer,//将用户的答题情况从仓库中取出来
        examList: state.ExamListReducer//将所有的试题取出来
    }
}

Detail = connect(mapStateToProps)(Detail)
