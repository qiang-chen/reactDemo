import React, { Component } from 'react'

import {connect} from "react-redux"

export default class StudentEdit extends Component {
    constructor(props){
        super(props)
        this.state={
            classRoom:"",
            studentOpj:{},
            value:""
        }
    }
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1>学生教室:<br/>
                {this.state.classRoom}</h1>
                <h3>
                    学生姓名 <br/>
                    <input type="text" value={this.state.value} onChange={(e)=>{
                        this.setState({
                           value:e.target.value
                        })
                    }}/>
                </h3>
                <button onClick={this.remove.bind(this)}>删除</button>
                <button onClick={this.edit.bind(this)}>修改</button>
            </div>
        )
    }
    remove(){
        //删除这个学生
        this.props.removeStudent(this.state.studentOpj)
        this.props.history.go(-1)
    }
    edit(){
        //编辑这个学生
        let opj=this.state.studentOpj;
        opj.user=this.state.value;
        this.props.saveEdit(opj)
        this.props.history.go(-1)
    }
    componentDidMount(){
        //接受路由带过来的学生id和班级id
        let str=this.props.location.search.slice(1);
        
        let {classId,id}=this.query(str)
        //console.log(classId,id)

        //然后获取当所有的班级根据上面所得到的的ID找出对应的学生
        if(!this.props.ClassList.length) return;
        console.log(this.props.ClassList)
      let index=this.props.ClassList.findIndex(item=>item.id*1===classId*1);
        let opj=this.props.ClassList[index].studentList.find(item=>item.id*1===id*1);
        this.setState({
            classRoom:this.props.ClassList[index].classRoom,
            studentOpj:opj,
            value:opj.user
        },()=>{
          console.log(this.state.classRoom,this.state.studentOpj,"------")  
        })

    }
    query(str){
        return str.split("&").reduce((prev,cur)=>{
            prev[cur.split("=")[0]]=cur.split("=")[1]
            return prev;
        },{})
    }
}

const mapStateToProps=(state)=>{
    return {
        ClassList:state.ClassReducer
    }
}

const mapDisPatchToProps=(dispatch)=>{
    return {
        removeStudent:(opj)=>{
            dispatch({type:"REMOVE",everyStudent:opj})
        },
        saveEdit:(opj)=>{
            dispatch({type:"EDIT",everyStudent:opj})
        }
    }
}

StudentEdit=connect(mapStateToProps,mapDisPatchToProps)(StudentEdit)