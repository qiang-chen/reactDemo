import React, { Component } from 'react'

import {connect} from "react-redux"

export default class CreateStudent extends Component {

    constructor(props){
        super(props);
        this.state={
            value:"",
            student:[]
        }
        this.id=0
    }
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1>创建学生</h1>
                <input type="text" value={this.state.value} onChange={(e)=>{
                    this.setState({
                        value:e.target.value
                    })
                }} />
                <br/>
                <h2>已添加学生名单</h2>
                {this.state.student.map(item=>{
                    return <li key={item.id} style={{margin:"10px"}}>{item.user}-----<b onClick={this.edit.bind(this,item)}>编辑</b> </li>
                })}
                <button onClick={this.add.bind(this)}>
                    添加学生
                </button>

                <h3 onClick={()=>{
                    this.props.history.go(-1)
                }}>
                    返回班级详情
                </h3>
            </div>
        )
    }
    edit(item){
        //学生编辑情况
        //一点编辑按钮带着学生的id和班级号的id跳到编辑页面
        this.props.history.push(`/studentedit?id=${item.id}&classId=${item.classId}`)
    }
    add(){
        let user=this.state.value;
        let {id}=this.props.match.params;
        //获取下添加页面的当前班级
        let classRoom=this.props.classList.find(item=>item.id*1===id*1)
        let opj={};
        //console.log(opj,"点击添加学生")
        let index=classRoom.studentList.findIndex(item=>item.user===user)
        if(index===-1){
            opj={
                user,
                classId:id,
                id:new Date().getTime()
            }
        }else{
            alert("该学生已在列表中")
        }
        //最终将opj存到仓库中去
        this.props.saveClassList(opj)
        this.setState({
            student:classRoom.studentList
        })
        //console.log(user,id,this.props.classList,opj,"---")
    }
    componentDidMount(){
        let {id}=this.props.match.params;
        let opj=this.props.classList.find(item=>item.id*1===id*1);
        this.setState({
            student:opj.studentList
        })
    }
}

const mapStateToProps=(state)=>{
    return {
        classList:state.ClassReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
     return {
        saveClassList:(opj)=>{
            dispatch({type:"STUDENT",everyStudent:opj})
        }
     }
}

CreateStudent=connect(mapStateToProps,mapDispatchToProps)(CreateStudent)
