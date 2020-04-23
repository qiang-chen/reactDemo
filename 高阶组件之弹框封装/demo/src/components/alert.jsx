import React, { Component } from 'react'

import Dialog from "../hoc/Dialogs.jsx"


class Alert extends Component {
    render() {
        return (
            <div>
                <h1>确定删除吗</h1>
                <b onClick={()=>{
                    console.log(this.props)
                    this.props.close()
                }}>确定</b><b onClick={()=>{
                    console.log(this.props)
                    this.props.close()
                }}>取消</b>
            </div>
        )
    }
}

Alert=Dialog(Alert)

export default Alert
