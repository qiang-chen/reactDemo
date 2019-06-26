import React, { Component } from 'react'
import {connect} from "react-redux"

import {withRouter} from "react-router-dom"

export default class Show extends Component {
    render() {
        console.log(this.props.url,"////////////////////////////")
        return (
            <div className="video">
                   {this.props.location.pathname==="/main/video"?<video src={this.props.url.url_1} autoPlay controls></video>:<audio src={this.props.url.url_5} autoPlay controls></audio>} 
           </div>
        )
    }
    shouldComponentUpdate(nextProps){
        return true
    }
}


const mapStateToProps=(state)=>{
    return {
        url:state.reducerPlay
    }
}

Show=connect(mapStateToProps)(withRouter(Show))
