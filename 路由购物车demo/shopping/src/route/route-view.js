import React, { Component } from 'react'

import { Route, Switch, Redirect } from "react-router-dom"


//将路由封装起来 然后每次调用这个RouteView使用 类似于vue中的写法

export default class RouteView extends Component {
    render() {
        return (
            <Switch>
                {this.props.children.map((item, index) => {
                    if (item.redirect) {
                        return <Redirect to={item.redirect} key={index}></Redirect>
                    } else {
                        return <Route key={index} path={item.path} render={(props) => {
                            //props是一个路由对象
                            //console.log(props)
                            return <item.component children={item.children}></item.component>
                        }}></Route>
                    }
                })}
            </Switch>
        )
    }
}
