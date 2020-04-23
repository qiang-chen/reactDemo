import React from 'react'
import "./App.css"
import Home from "./views/home"

//引入react-redux

import {Provider} from "react-redux"
import store from './store';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (
            <div>
                <Provider store={store}>
                    <Home></Home>   
                </Provider>
                
            </div>
        )
    }
}