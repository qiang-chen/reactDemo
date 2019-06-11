import React, { Component } from 'react'

export default class newChild extends Component {
    constructor(props){
        super(props)
        this.state={
            user:null
        }
    }
    static getDerivedStateFromProps(nextProps){
        //console.log(nextProps,"打印出来了吗")
        return {
            user:nextProps.user
        }
    }
    render() {
        console.log(this.state.user,"新的生命周期的打印")
        return (
            <div>
                {this.state.user}
               <button>子组件点击new生命周期</button> 
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps,prevState,"getSnapshotBeforeUpdate")
        return null
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
}