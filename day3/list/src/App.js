import React from 'react';

import './App.css';
import Axios from 'axios';
import List from "./components/list.jsx"

class APP extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }
  render(){
    return (
      <div className="container">
        <List list={this.state.list}></List>
        <footer>
          <span>首页</span>
          <span>我的</span>
          <span>登录</span>
        </footer>
      </div>
    )
  }
  componentDidMount(){
    //在DOM生成后的生命周期函数发送ajax请求
   Axios.get("http://localhost:3000/api/list").then(res=>{
     this.setState({
       list:res.data.data.list
     })
   })
  }
}

export default APP;
