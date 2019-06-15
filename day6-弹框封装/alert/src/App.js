import React from 'react';

import './App.css';

import Dialogs from "./components/Dialogs.jsx"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      flag:false,
      dialog:{ 
        DialogStyle:{width:"400px",height:"400px"},
        header:"我是头部",
        content:"我是中间内容",
        footArr:[{
          btn:<button>确定</button>,
          fn:function(msg){
            console.log(this,"确定")
            this.setState({
              flag:false
            })
          }.bind(this)
        },{
          btn:<button>取消</button>,
          fn:function(){
            this.setState({
              flag:false
            })
          }.bind(this)
        },]
      }
    }
  }
  render(){
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            flag:true
          })
        }}>点击</button>
        {this.state.flag&&<Dialogs {...this.state.dialog}></Dialogs>}
      </div>
    )
  }
}

export default App;
