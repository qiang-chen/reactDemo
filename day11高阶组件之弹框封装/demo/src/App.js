import React from 'react';
import './App.css';

import Alert from "./components/alert.jsx"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:null,
      close:null
    }
  }
  render(){
    return (
      <div>
        <button onClick={()=>{
          console.log(this.props)
          this.state.show()
        }}>点击</button>
        <Alert control={(show,close)=>{
            this.setState({
              show
            })
        }}></Alert>
      </div>
    )
  }
}

export default App;
