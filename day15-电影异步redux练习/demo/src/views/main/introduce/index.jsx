import React, { Component } from 'react'

import {connect} from  "react-redux"

export default class Introduce extends Component {
    render() {
        return (
            <div>
                {/* 此时后台返回了一片带有标签的字符串我们需要改变一下 */}
                <div dangerouslySetInnerHTML={{__html: this.props.context}} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        context:state.reducerList.content
    }
}


Introduce=connect(mapStateToProps)(Introduce)