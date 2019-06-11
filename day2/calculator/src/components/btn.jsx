import React from "react";

import "../css/btn.css"

class Btn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:["7","8","9","x","4","5","6","-","1","2","3","+","CE","0",".","÷","="]
        }
    }
    render(){
        return (
            <div className="btnBox">
                {this.state.arr.map((item,index)=>{
                   return <div className="btn" key={index} onClick={()=>{
                    // 调用父组件传过来的函数然后将每次的点击结果传给父组件
                    this.props.onresult(item)
                   }}>{item}</div>
                })}
            </div>
        )
    }
}

export default Btn;