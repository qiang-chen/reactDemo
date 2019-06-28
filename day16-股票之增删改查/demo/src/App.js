import React from 'react';
import './css/App.css';

import RouteView from '@/route/RouteView';

import RouteConfig from "@/route/RouteConfig"

import {HashRouter} from "react-router-dom"

//将仓库和当前组件连接挂载起来

import {Provider} from "react-redux"

import store from "@/store/index"

function App() {
  return (
    <Provider store={store}>
        <HashRouter>
            <RouteView children={RouteConfig}>

            </RouteView>
        </HashRouter>
    </Provider>
    
  );
}

export default App;
