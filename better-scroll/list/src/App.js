import React from 'react';

import './App.css';

import List from "./components/list.jsx"

import AA from "./components/aa"


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
        <List></List>
        {/* <AA></AA> */}
        <footer>
          <span>首页</span>
          <span>我的</span>
          <span>登录</span>
        </footer>
      </div>
    )
  }
}

export default APP;
