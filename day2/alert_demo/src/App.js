import React from 'react';
import Dialog from "./components/Dialog.jsx"


import './App.css';
import "./index.scss"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        arr:[{
          type:1,
          title:"打开alert提示框"
        },{
          type:2,
          title:"打开confirm提示框"
        },{
          type:3,
          title:"打开prompt提示框"
        }],
        opj:{
          type:null,
          title:null,
        }
    }
  }
  change(judge){
    console.log(judge)
    this.setState({
      opj:{type:null,title:null}
    })
  }
  render(){
    return (
      <div className="container">
          {this.state.arr.map((item,index)=>{
            return <button key={index} onClick={()=>{
              this.setState({
                opj:{...item}
              })
            }}>{item.title}</button>
          })}
          {this.state.opj.type?<Dialog opj={this.state.opj} onchange={this.change.bind(this)}></Dialog>:""}
      </div>
    )
  }
}

export default App;
