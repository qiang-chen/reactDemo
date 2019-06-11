import React from 'react';
import './App.css';

import Item from "./components/item.jsx"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      flag:false,
      list:[
        {
          user:"张三",
          content:"我是张三喽"
        },{
          user:"李四",
          content:"我是李四喽"
        },{
          user:"王五",
          content:"我是王五喽"
        }
      ]
    }
  }
  commit(){
    let opj={};
    opj.content=this.refs.myContent.value;
    opj.user=this.refs.myUser.value;
    let arr=this.state.list;
    arr.push(opj)
    this.refs.myContent.value="";
    this.refs.myUser.value="";
    this.setState({
      list:arr,
      flag:false
    })
  }
  render(){
    return (
      <div className="container">
        <header>
          <span>热门评论<b className="count">{this.state.list.length}</b></span>
          <span onClick={()=>{
            this.setState({
              flag:true
            })
          }}>写评论</span>
        </header>
        <main>
          {this.state.list.map((item,index)=>{
            return <Item key={index} {...item}></Item>
          })}
         
        </main>
        <footer className={this.state.flag?"":"sh"}>
            <input type="text" placeholder="请输入用户名" ref="myUser"/>
            <input type="text" placeholder="请输入评论内容" ref="myContent"/>
            <button onClick={this.commit.bind(this)}>提交</button>
        </footer>
      </div>
    )
  }
}

export default App;
