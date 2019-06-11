import React from 'react';
import Child from "./components/Child.jsx"
import NewChild from "./components/newChild.jsx"
import './App.css';

class App extends React.Component{
  constructor(props){
    console.log("constructor父")
    super(props);
    this.state={
      userId:1,
      user:"张三"
    }
  }
  render(){
    console.log("render父")
    return (
      <div>
        <button onClick={()=>{
          console.log("父组件点击")
          this.setState({
            userId:2
          })
        }}>父点击改变props</button>
        <Child userId={this.state.userId}></Child>
        <NewChild user={this.state.user}></NewChild>
      </div>
    )
  }
  componentWillMount(){
    console.log("componentWillMount")
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
}

export default App;
