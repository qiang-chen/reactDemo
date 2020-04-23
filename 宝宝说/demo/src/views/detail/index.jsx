import React, { Component } from 'react'

import "@/css/detail.css"

//引入cookies
import Cookies from "js-cookie";


export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }
    componentWillMount(){
        //在所有页面跳转详情的时候做一波动态拦截
        //从本地获取一下看是否有token没有的话让其调到登录页面
        if(!Cookies.get("token")){
            this.props.history.replace("/login")
        }
    }
    render() {
        return (
            <div className="videoBox">
                <h1>正在为您播放{this.state.title}...</h1>
                
                {this.props.location.state.url?<video src={this.props.location.state.url} autoPlay controls></video>:<h4>视频失效了</h4>}
                <footer onClick={() => {
                    //点击跳回到上一级
                    //console.log(this.props.history)
                    this.props.history.goBack()
                }}>
                    返回上一级
                </footer>
            </div>
        )
    }
    componentDidMount() {
        //console.log(this.props.location.state.type, "详情页打印")
        let type = this.props.location.state.type;
        switch (type) {
            case "/main/watch/song":
                this.setState({
                    title: "歌曲"
                })
                break;
            case "/main/watch/story":
                this.setState({
                    title: "故事"
                })
                break;
            case "/main/watch/animation":
                this.setState({
                    title: "动画片"
                })
                break;
            default:
                break;
        }
    }
}
