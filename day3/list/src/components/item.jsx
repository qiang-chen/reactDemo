import React, { Component } from 'react'

import "../css/item.scss"


export default class item extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        console.log(this.props.list,"item组件数据")
        return (
            <div className="list">
                <div className="item">
                    <div className="left">
                        <img src="" alt=""/>
                    </div>
                    <div className="right">
                       
                    </div>
                </div>
            </div>
        )
    }
}
