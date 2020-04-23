import React, { Component } from 'react'

import "@/css/bus.css"

import { getBuyList ,addBuyList} from "@/api/index"

export default class Bus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            sumMoney: 0,
        }
    }
    render() {
        return (
            <div className="bus">
                <div className="busTop">
                    <div className="title">
                        <p>清单</p>
                    </div>
                    {this.state.list.map(item => {
                        return <div className="item" key={item.id}>
                            <span>{item.title}</span><b>{item.price}</b>
                            <div className="btn">
                                <b onClick={this.btnClick.bind(this, "-", item.id)}>-</b><span>{item.num}</span><b onClick={this.btnClick.bind(this, "+", item.id)}>+</b>
                            </div>
                        </div>
                    })}
                    <div className="sum">
                        合计: <b>￥<span>{this.sumPrice()}</span></b>元
                    </div>
                    <div className="ding">
                        <div className="xian"></div>
                    </div>

                </div>
                <div className="busBottom">
                    <p>联系方式</p>
                    <div className="form">
                        <div className="form-item">
                            <span>姓名</span><div className="input"><input type="text" placeholder="请输入姓名" /></div>
                        </div>
                        <div className="form-item">
                            <span>电话</span><div className="input"><input type="text" placeholder="请输入电话" /></div>
                        </div>
                        <div className="form-item">
                            <span>地址</span><div className="input"><input type="text" placeholder="请输入地址" /></div>
                        </div>
                    </div>
                    <div className="submit">
                        <span onClick={()=>{
                            this.setState({
                                list:[]
                            })
                        }}>清空购物车</span>
                        <b>下单</b>
                    </div>
                </div>
                <div className="ding">
                    <div className="xian"></div>
                </div>
            </div>

        )
    }
    async componentDidMount() {
        //发送ajax请求获取购买列表
        let data = await getBuyList();
        this.setState({
            list: data
        })
    }
    btnClick(type, id) {
        //console.log(type,id);
        let index = this.state.list.findIndex(item => item.id === id);
        let arr = this.state.list;
        if (type === "+") {
            arr[index].num++;
        } else if (type === "-") {
            arr[index].num--;
            if (arr[index].num <= 1) {
                arr[index].num = 1;
            }
        }
        this.setState({
            list: arr
        }, () => {
            addBuyList({data:this.state.list}).then(res=>{
                console.log("点击加加减减把最新数据添加完毕",res)
            })
        })
    }
    sumPrice(){
        let price=0;
        this.state.list.forEach(item=>{
            price+=item.price*item.num;
        });
        return price;
    }
    componentWillUnmount(){
        //在销毁的时候把改变后的最新数据发给后台替换后台数据

        //大写的尴尬 不能这样写 销毁的时候是要清空网络请求的 不然会发生内存泄漏的
        console.log("销毁的时候发送最新数据",this.state.list)
    }
}
