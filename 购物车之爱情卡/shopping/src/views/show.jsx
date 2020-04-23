import React, { Component } from 'react'

import {connect} from "react-redux"

import "@/css/detail.css"
export default class Show extends Component {
    constructor(props){
        super(props);
        this.state={
            color:null
        }
    }
    render() {
        return (
            <div className='detail'>
                <div className='detail-header'>
                    <p onClick={()=>{
                        this.props.history.go(-1)
                    }}>{'<'}</p>
                    <h3>详情</h3>
                </div>
                <div className='detail-main'>
                    {
                        this.props.list.length&&this.props.list.map((item,index)=>{
                            return <p key={index} style={{background:this.state.color}}><span>{item.title}</span><span>{item.num}</span></p>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        let color=this.props.match.params.color;
        this.setState({
            color
        })
    }

}

const mapStateToProps=(state)=>{
    return {
        list:state.buyListReducer
    }
}

Show=connect(mapStateToProps)(Show)