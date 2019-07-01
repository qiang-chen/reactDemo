import React from 'react';

import './App.css';

import {HashRouter,Switch,Route,Redirect} from "react-router-dom"
import ClassDetail from './views/ClassDetail';
import ClassEdit from './views/ClassEdit';
import CreatClassRoom from './views/CreatClassRoom';
import CreateStudent from './views/CreateStudent';
import StudentEdit from './views/StudentEdit';

import {Provider} from "react-redux"

import store from "./store/index"


function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <Switch>
          <Route path="/classdetail/:id" component={ClassDetail}></Route>
          <Route path="/classedit" component={ClassEdit}></Route>
          <Route path="/createclassroom" component={CreatClassRoom}></Route>
          <Route path="/createstudent/:id" component={CreateStudent}></Route>
          <Route path="/studentedit" component={StudentEdit}></Route>
          <Redirect from="/" to="/createclassroom">

          </Redirect>
      </Switch>
      </Provider>
      
    </HashRouter>
    
  );
}

export default App;
