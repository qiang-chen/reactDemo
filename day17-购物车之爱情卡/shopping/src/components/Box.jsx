import React, { Component } from 'react'

export default class Box extends Component {
    constructor(props){
        super(props);
        this.state={
            color:null,
            border:"null",
        }
    }
    render() {
        return (
            <div onClick={this.btnClick.bind(this)}>
                <div className="box" style={{
                    width: "4rem",
                    height: "100%",
                    border: this.state.border,
                    margin:"0 .1rem",
                    backgroundColor:this.state.color,
                    borderRadius:".2rem"
                }}></div>
            </div>

        )
    }
    static getDerivedStateFromProps(nextProps){
        return {
            color:nextProps.color,
            border:nextProps.border
        }
        
    }
    btnClick(){
        //点击事件给当前盒子加粗边框
        this.props.changeCount(this.props.id)
    }
}
