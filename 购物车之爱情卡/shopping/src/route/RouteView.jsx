import React, { Component } from 'react'

import {Switch,Route,Redirect} from "react-router-dom"

export default class RouteView extends Component {
    render() {
        return (
            <Switch>
                {this.props.children.map((item,index)=>{
                    if(item.redirect){
                        return <Redirect from={item.path} to={item.redirect} key={index}></Redirect>
                    }else{
                        return <Route path={item.path} key={index} render={(props)=>{
                            return <item.component {...props}></item.component>
                        }}></Route>
                    }
                })}
            </Switch>
        )
    }
}
