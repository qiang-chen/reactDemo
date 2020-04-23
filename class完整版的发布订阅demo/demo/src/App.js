import React from 'react';
import './App.css';

import List from "./components/list.jsx"

import Watcher from "./watcher/index.js"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      arr:[{
        title:"我是一号",
        id:1
      },{
        title:"我是二号",
        id:2
      },{
        title:"我是三号",
        id:3
      }],
      msg:""
    }
  }
  componentDidMount(){
    Watcher.subscriber("list",(msg)=>{
      this.setState({
        msg
      })
    })
  }
  render(){
    return (
      <div className="App">
        <h1>转发给：{this.state.msg}</h1>
        <List arr={this.state.arr}></List>
      </div>
    );
  }
}

export default App;
