import React, { Component } from 'react';

const alertStyle={
    background:"rgba(0,0,0,.4)",
    position: "fixed",
    left:0,
    right:0,
    top:0,
    bottom:0
};
const boxStyle={
    width:"60%",
    height:"30%",
    background:"#fff",
    position: "absolute",
    left:"50%",
    top:"50%",
    transform: "translate(-50%,-50%)"
}

export default function(Item){
    return class Dialogs extends Component {
        constructor(props){
            super(props);
            this.state={
                display:"none"
            }
        }
        render() {
            return (
                <div style={{...alertStyle,display:this.state.display}}>
                    <div style={boxStyle}>
                        <Item show={this.show} close={this.close.bind(this)} {...this.props}></Item>
                    </div>
                </div>
            )
        }
        componentDidMount(){
            //创建一个与外界沟通的接口
            this.props.control&&this.props.control(this.show.bind(this),this.close.bind(this))
        }
        show(){
            this.setState({
                display:"block"
            })
        }
        close(){
            this.setState({
                display:"none"
            })
        }
    }
}
