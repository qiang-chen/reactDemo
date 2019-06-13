import React, { Component } from 'react'

import "../css/item.scss"


export default class item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: null
        }
    }
    static getDerivedStateFromProps(nextProps) {
        return {
            list: nextProps.list
        }
    }
    render() {
        // console.log(this.state.list)
        //console.log(this.props.list, "item组件数据")
        return (
            <div className="listContent">
                {this.state.list&&this.state.list.map((item) => {
                    //console.log(item.id)
                    return <div className="item" key={item.id}>
                        <div className="left">
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="right">
                            <h2>{item.title}</h2>
                            <h3>{item.name}</h3>
                            <h6>{item.price}</h6>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
