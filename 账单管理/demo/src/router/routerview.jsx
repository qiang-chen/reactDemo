
import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
export class routerview extends Component {
    render() {
        let {routes}=this.props
        let redirectArr=routes.filter(item=>item.redirect)
        let RedirectArr=redirectArr.map((item,index)=>{
            return <Redirect key={index}
                from={item.path}
                to={item.redirect}
            />
        })
        routes=routes.filter(item=>item.component)  

        return (
            <Switch>
                {routes.map((item,index)=>{
                    return <Route path={item.path} key={index}
                        render={(props)=>{
                            return <item.component children={item.children} {...props}></item.component>
                        }}
                    ></Route>
                })}
                {RedirectArr.length!==0&&RedirectArr}
            </Switch>
        )
    }
}

export default routerview
