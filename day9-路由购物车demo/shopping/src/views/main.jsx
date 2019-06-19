import React, { Component } from 'react'

import "../css/main.min.css"

import { NavLink } from "react-router-dom"
import RouteView from "@/route/route-view.js"

//引入发布订阅
import Watcher from "@/Watcher/"

//引入网络请求
import { addBuyList, getBuyList } from "@/api/"

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <div className="container">
                <header>WeX5外卖</header>
                <main>
                    {/* <Switch>
                        {
                            RouterConfig[0].children.map((item,index)=>{
                                return <Route key={index} path={item.path} component={item.component}></Route>
                            })
                        }
                    </Switch> */}
                    <RouteView children={this.props.children}></RouteView>
                </main>
                <footer>
                    <span><NavLink to="/main/home">菜单</NavLink></span>
                    <span><NavLink to="/main/bus">购物车{this.state.list.length ? this.state.list.length : ""}</NavLink></span>
                    <span><NavLink to="/main/menu">订单</NavLink></span>
                    <span><NavLink to="/main/my">我的</NavLink></span>
                </footer>
            </div>
        )
    }
    async componentDidMount() {

        //订阅者模式 接受来一份的请求
        Watcher.subscriber("add", async (msg) => {
            console.log(msg)
            //既然list是购买列表 那么我们应该在每次操作前给其有数据库的购买列表比对一一下
            let newList = await getBuyList();

            this.setState({
                list: newList
            }, () => {
                console.log(this.state.list, "购买列表的初始状态")
            })

            console.log(this.state.list, "购买列表的初始状态11111111111111111")
            let arr = this.state.list;
            let index = arr.findIndex(item => item.id === msg.id);

            if (index === -1) {
                arr.push(msg)
            } else {
                let num = arr[index].num;
                console.log(num, "每次点击来一份之前的数量")
                num++;
                //如果不深拷贝会报错 只读属性不能修改
                //let opj=JSON.parse(JSON.stringify(arr[index]))
                let opj = Object.assign({}, arr[index])
                opj.num = num;
                //arr[index]=JSON.parse(JSON.stringify(opj))
                arr[index] = Object.assign(opj)
                console.log(num)
                //.num++;
            }

            this.setState({
                list: arr
            }, () => {
                //console.log(this.state.list)
                //当数组发生改变后通过发布订阅将这个数组传到购物车页面然后将商品渲染出来
                //Watcher.promulgator("buyList",this.state.list)

                //否定上述思路 原因是路由的切换代表组件的销毁与创建 通过发布订阅没法实现这个功能
                //或者理由每次将购买列表发送给后台然后在新的组件中去和后台请求这个购买列表
                //之后渲染到页面上面去

                addBuyList({ data: this.state.list }).then(res => {
                    console.log(res, "主页面点来一份发送的请求")
                })
            })
        })
    }
    componentWillUnmount() {
        //在组件销毁的阶段将购买列表发送给后台吧

        //卧槽 气死我了 又将其否定 因为这个东西是一级路由 在它切换的时候不会被销毁
        // console.log("发送列表了吗")
        // addBuyList(this.state.list)
    }
}
