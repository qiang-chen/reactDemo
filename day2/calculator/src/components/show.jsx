import React, { Component } from 'react'
import "../css/show.css"


export default class Show extends Component {
    constructor(props){
        super(props);
        this.state={
            jia:"+",
            jian:"-",
            cheng:"*",
            chu:"/"
        }
    }
    render() {
        return (
            <div className="show">
                {this.props.msg}
            </div>
        )
    }
}
