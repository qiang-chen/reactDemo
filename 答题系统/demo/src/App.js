import React,{Suspense} from 'react';
import './App.css';

import {HashRouter} from "react-router-dom"

import RouteView from "@/route/RouteView"

import RouteConfig from "@/route/RouteConfig"

import {Provider} from "react-redux"

//引入仓库

import store from "@/store/"

function App() {
  return (
    <HashRouter>
        <Suspense fallback={<div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"red"}}>loading...</div>}>
          <Provider store={store}>
              <RouteView children={RouteConfig}>
              </RouteView>
          </Provider>
            
        </Suspense>
    </HashRouter>
    
  );
}

export default App;
