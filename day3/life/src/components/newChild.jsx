import React, { Component } from 'react'

export default class newChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }
    // static getDerivedStateFromProps(nextProps){
    //     //console.log(nextProps,"打印出来了吗")
    //     return {
    //         user:nextProps.user
    //     }
    // }
    static getDerivedStateFromProps(nextProps) {
      
        return {
            user:nextProps.user
        }
    }
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.user===this.props.user){
    //         this.setState({
    //             flag:false
    //         })
    //     }else{
    //         this.setState({
    //             flag:true
    //         })
    //     }
    // }
    render() {
        console.log(this.state.user, "新的生命周期的打印",this.state.flag)
        return (
            <div>
                {this.state.user}
                <button>子组件点击new生命周期</button><br />
                <h3 style={{backgroundColor:"red",color:"#fff"}}>{this.state.flag ? "更新了。。。。" : ""}</h3>
                
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            return true
        } else {
            return false;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot)
        if (snapshot) {
            this.setState({
                flag: snapshot
            })
        }

    }
}