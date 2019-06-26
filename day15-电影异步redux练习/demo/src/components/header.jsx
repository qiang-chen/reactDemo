import React, { Component } from 'react'

import {connect} from "react-redux"


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <span>{this.props.title.title}</span>
          </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        title:state.reducerPlay
    }
}

Header=connect(mapStateToProps)(Header)
