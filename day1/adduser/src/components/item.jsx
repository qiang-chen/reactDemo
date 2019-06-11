
// eslint-disable-next-line no-unused-vars
import React,{Component} from "react";

import "../item.css"

export default class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:true
        }
        console.log(this.props)
    }
    render(){
        let {flag}=this.state;
        return (
            <div>
                <div className="item">
                    <div className="left">
                        <img src={this.props.img} alt=""/>
                        <span>{this.props.name}</span>
                    </div>
                    <div className="right">
                        
                        <span className={flag?"":"active"} onClick={()=>{
                            this.setState({
                                flag:!flag
                            })
                        }}>{flag?"添加":"已添加"}</span>
                    </div>
                </div>
            </div>
        )
    }
}