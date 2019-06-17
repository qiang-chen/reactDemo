import React from 'react';
import './App.css';
import Watcher from "./watcher/"
import Child from "./components/Child"

import Daerzi from "./components/Daerzi"

import Yan from "./components/Yanzheng"


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      num:"h"
    };
  }
  render(){
    return (
      <div>
        <Yan num={this.state.num}></Yan>
        <button onClick={()=>{
          //发布消息
          Watcher.promulgator("daerzi","吃饭了哈哈")
        }}>点击</button>
        <Child>
          <Daerzi></Daerzi>
        </Child>
      </div>
    )
  }
}

export default App;
