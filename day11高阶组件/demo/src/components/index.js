import React from "react"

export function Heigh(pink){
   return (Item)=>{
   return class Heig extends React.Component{
    constructor(props){
        super(props);
        this.state={
            styleItem:{background:pink}
        }
    }
    render(){
        console.log(pink)
        return (
            <div style={this.state.styleItem}>
                 我是新增内容
                <Item></Item>
            </div>
        )
    }
}
   }
}