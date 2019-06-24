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
                    return <h4 key={index}>{item.type}----{item.add}</h4>
                })}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        list:state.addReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        
    }
}

Look=connect(mapStateToProps,mapDispatchToProps)(Look)
