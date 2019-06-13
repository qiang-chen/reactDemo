import React, { Component } from 'react'

export default class Right extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:[]
        }
        
    }
    render() {
        console.log(this.props.right,"右边子组件")
        return (
            <div>
                {this.state.arr.length&&this.state.arr.map(item=>{
                    return <h4 key={item.id}>{item.title}</h4>
                })}
            </div>
        )
    }
    static getDerivedStateFromProps(nextProps){
        return {
            arr:nextProps.right
        }
    }
}
