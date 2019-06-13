import React from 'react';
import './App.css';

import Left from "./components/left"
import Right from "./components/Right"

//引入网络请求
import {getLeftData,getRightData} from "./api/index"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      id:1,
      right:[],
      left:[]
    }
  }
  render(){
   return (<div className="container">
            <div className="left">
              <Left left={this.state.left} getRightData={this.getRightData.bind(this)}></Left>
            </div>
            <div className="right">
              <Right right={this.state.right}></Right>
            </div>
            </div>)
  }
  async componentDidMount(){
    let data=await getLeftData();
    await this.getRightData(this.state.id);
    this.setState({
     left:data
   })
   console.log(this.state.left,this.state.right)
  }
  async getRightData(id){
    let rightData=await getRightData(id)
    this.setState({
      right:rightData,
    })
  } 
}

export default App;
