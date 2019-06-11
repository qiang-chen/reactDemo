import React from 'react';
import './css/App.css';
import Show from "./components/show.jsx";
import Btn from "./components/btn.jsx"
import calculate from "./script/calculate.js"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      total: null,
      next: null,
      operation: null,
    };
  }
  result(msg){
    console.log(msg)
    this.setState(calculate(this.state,msg))
    //console.log(this.state.msg1)
  }
  render(){
    return (
      <div className="container">
        <Show msg={this.state.next||this.state.total||0}></Show>
        {/* 将这个函数传给子组件然后在子组件点击是调用的 */}
        <Btn onresult={this.result.bind(this)}></Btn>
      </div>
    )
  }
}

export default App;
