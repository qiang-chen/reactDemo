import React from 'react';
import './App.css';

import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Home from './views/main/home';
import Bus from './views/main/bus';

import {Provider} from "react-redux"

import store from "./store/index"
import Detail from './views/detail/index.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div>
        <Provider store={store}>
             <Router>
                <Switch>
                   {/* <Route path="/detail/:id" component={Detail} exact></Route> */}
                   <Route path="/detail" component={Detail} exact></Route>
                    <Route path="/main/home" component={Home} exact></Route>
                    <Route path="/main/bus" component={Bus} exact></Route>
                    
                    {/* <Redirect from="/" to="/main/home"></Redirect> */}
                </Switch>
            </Router>
        </Provider>
          
      </div>
    )
  }
}

export default App;
