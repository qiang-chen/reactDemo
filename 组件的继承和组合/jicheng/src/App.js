import React from 'react';

import './App.css';

import Child from "./components/child.jsx"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      msg:<i>变量标签</i>
    }
  }
  render(){
    return (
      <div>
        <Child msg={this.state.msg}>
          <h1>我是子组件展示</h1>
          <p>再来一条</p>
        </Child>
      </div>
    )
  }
}

export default App;
