import React, { Component } from 'react'

import {connect} from "react-redux"

export default class ClassDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            opj:{},
            student:[]
        }
    }
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1>
                    班级展示:<br/>{this.state.opj&&this.state.opj.classRoom}
                </h1>
                <button style={{color:"red"}} onClick={this.add.bind(this)}> 
                    添加学生
                </button>
                <h2>班级学生展示情况</h2>
                {this.state.student.length!==0&&this.state.student.map(item=>{
                     return <li key={item.id} style={{margin:"10px"}}>{item.user}</li>
                })}
            </div>
        )
    }
    componentDidMount(){
        let {id}=this.props.match.params;
        //console.log(id,this.props.opj,"000000000000000000000")
        if(!this.props.opj) return;
        let opj=this.props.opj.find(item=>item.id*1===id*1);
        this.setState({
            opj,
            student:opj.studentList
        })

    }
    add(){
        //console.log(this.props.opj)
        this.props.history.push("/createstudent/"+this.state.opj.id)
    }
}

const mapStateToProps=(state)=>{
    return {
        opj:state.ClassReducer
    }
}

ClassDetail=connect(mapStateToProps)(ClassDetail)