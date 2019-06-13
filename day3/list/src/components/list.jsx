import React, { Component } from 'react'

import "../css/list.scss"

import Item from "./item"
import Axios from 'axios';
import BScroll from 'better-scroll'

export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            BScroll: null,
            dowm: "松手刷新更多内容",
            page: 0,
            limit: 10
        }
    }
    render() {
        return (
            <div className="main">
                <header>
                    <span onClick={() => {

                    }}>首页渲染</span>
                </header>
                <div className="list" ref="list" down={this.state.down}>
                    <Item list={this.state.list}></Item>
                </div>

            </div>
        )
    }
    componentDidMount() {
        //在DOM生成后的生命周期函数发送ajax请求
        let { page, limit } = this.state;
        Axios.get(`http://localhost:3000/api/list?page=${page}&limit=${limit}`).then(res => {
            console.log(res.data.data, "aaa")
            this.setState({
                list: res.data.data,
                BScroll: new BScroll(this.refs.list, {
                    pullDownRefresh: {
                        //下拉到一百的位置才会触发
                        threshold: 100,
                        //然后松手后返回50的位置
                        stop: 30,
                    }
                })
            })
        }).catch((err) => {
            console.log(err, "err")
        })
    }
    componentDidUpdate() {
        //数据跟新完并生成了真实的DOM
        this.state.BScroll.on('scroll',(e)=>{
            // console.log(e)
        })
        this.state.BScroll.on("pullingDown", () => {
            console.log("下拉刷新")
            this.state.page+=1;
            this.setState({
                
            })
            console.log(this.state.page,"qqqqqqqqqqqqqq")
            Axios.get(`http://localhost:3000/api/list?page=${this.state.page}&limit=${this.state.limit}`).then(res => {
                    //console.log(res.data.data)
                    // res.data.data.forEach(item => {
                    //     this.state.list.unshift(item)
                    // })
                    
                    this.state.BScroll.finishPullDown();
                    this.state.list=res.data.data.concat(this.state.list)
                    this.setState({

                    })
                    this.state.BScroll.refresh()
                    console.log(this.state.list, "刷新好的数据")
                })

        })
    }
}
