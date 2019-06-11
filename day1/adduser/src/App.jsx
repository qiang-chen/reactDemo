import React from 'react';

import Item from "./components/item.jsx"

import Mock from "mockjs"

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = Mock.mock({
      "list|5":[ {
        name: Mock.Random.cname(),
        img: Mock.Random.image(),
        'id|+1': 1
      }]
    })
  }
  render() {
    return (
      <div className="container">
        {
          this.state.list.map(item => {
            return <Item {...item} key={item.id}></Item>
          })
        }
      </div>


    );
  }
}

export default App;
