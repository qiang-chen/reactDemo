import React, { Component } from 'react'

import Cookie from "js-cookie"

import md5 from "md5"
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            user:"",
            pwd:""
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.user} onChange={(e)=>{
                    this.setState({
                        user:e.target.value.trim()
                    })
                }} placeholder="请输入用户名"/>
                <input type="password" value={this.state.pwd} onChange={(e)=>{
                    this.setState({
                        pwd:e.target.value.trim()
                    })
                }} placeholder="请输入密码"/>
                <button onClick={()=>{
                    console.log(this.state.user,this.state.pwd)
                    let str=this.state.user+this.state.pwd;
                    let token=md5(str);
                    Cookie.set("token",token)
                }}>
                    登录
                </button>
            </div>

        )
    }
}
