import React, { Component } from 'react'

import "@/css/login.css"

//引入cookie和加密的md5
import Cookies from "js-cookie";
import MD5 from "md5"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            user:"",
            pwd:""
        }
    }
    render() {
        return (
            <div>
                <header>请您登录</header>
                <div className="item">
                    <input type="text" placeholder="请您输入用户名" value={this.state.user} onChange={(e)=>{
                        this.setState({
                            user:e.target.value
                        })
                    }}/>
                </div>
                <div className="item">
                    <input type="text" placeholder="请您输入密码" value={this.state.pwd} onChange={(e)=>{
                        this.setState({
                            pwd:e.target.value
                        })
                    }}/>
                </div>
                <div className="btn">
                <button onClick={()=>{
                    //点击登录的时候将这个东西加密一波 顺带存到cookie中去
                    let str=this.state.user+this.state.pwd;
                    str=MD5(str)
                    Cookies.set('token', str, { expires: 1/24, path: '' });
                    //存完然后跳转回去
                    this.props.history.goBack()
                }}>点击登录</button>
                </div>   
            </div>
        )
    }
}
