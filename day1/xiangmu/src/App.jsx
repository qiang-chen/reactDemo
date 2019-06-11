import React from 'react';
import {Home} from "./components/home.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  render() {
    return (
      <Home/>
    )
  }
}

export default App;
