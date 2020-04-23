//路由展示文件

import { Switch, Route, Redirect } from "react-router-dom";

import React from "react"

class RouteView extends React.Component {
    render() {
        return (
            <Switch>
                {this.props.children.map((item, index) => {
                    if(item.redirect){
                        return <Redirect to={item.redirect} key={index}></Redirect>
                    }else{
                        return <Route path={item.path} key={index} render={(props)=>{
                            return <item.component {...props} children={item.children}></item.component>
                        }}></Route>
                    }
                })}
            </Switch>

        )
    }
}
export default RouteView;