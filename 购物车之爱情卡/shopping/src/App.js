import React,{Suspense}  from 'react';
import './css/App.css';

import {BrowserRouter as Router} from "react-router-dom"

import RouteView from "@/route/RouteView";
import RouteConfig from "@/route/RouteConfig"

//引入仓库
import store from "@/store/index";
import {Provider} from "react-redux"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>loading</div>}>
          <RouteView children={RouteConfig}></RouteView>
        </Suspense>
        
      </Router>
    </Provider>
  );
}

export default App;
