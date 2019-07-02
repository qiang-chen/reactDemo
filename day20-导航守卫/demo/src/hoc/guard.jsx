import React, { Component } from 'react'

import Cookie from "js-cookie"

//导航守卫高阶组件
export default function (Com){
    return class Guard extends Component {
        render() {
            return (
                <>
                   <Com></Com> 
                </>
            )
        }
        componentWillMount(){
            //守卫拦截
            console.log(this.props)
            //获取一下本地是否有值
            let token=Cookie.get("token")
            console.log(token)
            if(!token){
                this.props.history.replace("/login")
            }
        }
    }
}
