import React, { Component } from 'react'

import { Switch, Route, Redirect } from "react-router-dom"


export default class RouteView extends Component {
    render() {
        return (
            <Switch>
                {this.props.children.map((item,index) => {
                    if(item.redirect){
                        return <Redirect key={index} to={item.redirect} from={item.path}></Redirect>
                    }else{
                        return <Route key={index} path={item.path} render={(props)=>{
                            return <item.component {...props} children={item.children}></item.component>
                        }}></Route>
                    }
                })}
            </Switch>

        )
    }
}
