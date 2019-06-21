import React from 'react';
import './App.css';

import Father from "./views/Fatch.jsx";



class APP extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div>
        <Father></Father>
      </div>
    )
  }
}

export default APP;
