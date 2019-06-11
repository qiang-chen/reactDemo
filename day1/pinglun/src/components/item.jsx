import React from "react";

import "../item.css"

export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flag:true,
        }
    }
    render(){
        return (
         <div className="item">
             <div className="left">
                 <p></p>
             </div>
             <div className="mid">
                 <h4>{this.props.user}</h4>
                 <p>{this.props.content}</p>
             </div>
             <div className="right">
             <span className={this.state.flag?"":"active"} onClick={()=>{
                 this.setState({
                     flag:!this.state.flag,
                 })
             }}>赞</span>
             </div>
         </div>
        )
    }
}