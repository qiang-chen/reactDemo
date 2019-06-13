import React, { Component } from 'react'

import "../css/left.css"

export default class Left extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:[],
            count:1
        }
        
    }
    render() {
        console.log(this.props.left,"左边子组件")
        return (
            <div>
                {this.state.arr.length&&this.state.arr.map(item=>{
                    return <h4 key={item.id} style={{height:"50px",textAlign:"center"}} onClick={this.leftClick.bind(this,item.id)} className={this.state.count===item.id?"active":""}>{item.title}</h4>
                })}
            </div>
        )
    }
    static getDerivedStateFromProps(nextProps){
        return {
            arr:nextProps.left
        }
    }
    leftClick(id){
        console.log(id)
        //再点击的时候调用父元素通过props传过来的函数
        this.props.getRightData(id)
        this.setState({
            count:id
        })

    }
}
