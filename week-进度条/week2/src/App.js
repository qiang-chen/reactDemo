import React from 'react';
import './App.css';

import Item from "./components/item"

class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        dir:false,//控制滑块横向还是竖向
        bar1:0,
        bar2:100
      }

    }
    render(){
      return (
        <div>
          <h1>主页数据展示{this.state.bar1}-------{this.state.bar2}</h1>
          <Item dir={this.state.dir} bar1={this.bar1.bind(this)}></Item>
        </div>
      )
    }
    bar1(msg1,msg2){
      //console.log(msg1,msg2,"主页")
      this.setState({
        bar1:msg1,
        bar2:msg2
      },()=>{
        //console.log(this.state.bar1,this.state.bar2,this,"主页")
      })
    }
}

export default App;
