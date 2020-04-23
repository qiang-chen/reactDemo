import React,{Suspense} from 'react';

import './css/App.css';

import {HashRouter} from "react-router-dom"

//引入路由配置表和文件

import RouteConfig from "@/route/RouteConfig"

import RouteView from "@/route/RouteView"

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div style={{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"red"
      }}>loading</div>}>
          <RouteView children={RouteConfig}></RouteView>
      </Suspense>
    </HashRouter>
  );
}

export default App;
