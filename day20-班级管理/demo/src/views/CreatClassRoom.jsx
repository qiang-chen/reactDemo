import React, { Component } from 'react'

import {connect} from "react-redux"


let id=0;
export default class CreatClassRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            value:""
        }
        
    }
    render() {
        return (
            <div>
                创建班级<br/>
                <input type="text" value={this.state.value} onChange={(e)=>{
                    this.setState({
                        value:e.target.value
                    })
                }} />
                <button onClick={this.btn.bind(this)}>
                    完成创建
                </button>
            </div>
        )
    }
    btn(){
        //console.log(this.state.value)
        //先从仓库获取一下是否含有这个班级

        let index=this.props.classList.findIndex(item=>item.classRoom===this.state.value)
        if(index===-1){
            id++;
            let opj={};
            opj.id=id;
            opj.classRoom=this.state.value;
            opj.studentList=[];
            this.props.saveClassRoom(opj);
            this.props.history.push(`/classdetail/${id}`)
        }else{
            alert("该班级已经存在")
        }

    }
}

const mapStateToProps=(state)=>{
    return {
        classList:state.ClassReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        saveClassRoom:(everyClass)=>{
            dispatch({type:"CLASS",everyClass})
        }
    }
}


CreatClassRoom=connect(mapStateToProps,mapDispatchToProps)(CreatClassRoom)