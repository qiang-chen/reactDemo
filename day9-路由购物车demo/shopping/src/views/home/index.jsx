import React, { Component } from 'react'

//引入网络请求文件在这里发送网络请求
import { getList, getBuyList } from "@/api/index"

//引入封装好的列表组件
import Item from "@/components/item.jsx"


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <>
                {this.state.list.map(item => {
                    return <Item key={item.id} {...item}></Item>
                })}
            </>
        )
    }
    async componentDidMount() {
        //发送网络请求 获取商品列表
        let data = await getList();
        let buyList = await getBuyList();
        this.setState({
            list: data.list.map(item => {
                //此时我们不能将所有的num值置为1
                //需要与购买列表的数据进行比对一下
                //然后根据购买列表的数据来决定num的最终结果
                //此时需要获取数据的购买列表然后与arr的数据num进行比较然后将arr中num先变成购买列表中的num
                //不然的话每次添加新的商品的时候购买的数量都会变成1之前加减操作的那些操作都不管用了


                // console.log(buyList,"在点击来一份的时候数据库里面的商品列表")
                let buyListIndex = buyList.findIndex(el => el.id === item.id);
                if (buyListIndex !== -1) {
                    //证明购买列表中有这一项数据
                    let nn = buyList[buyListIndex].num;
                    item.num = nn;
                    console.log(item)
                } else {
                    console.log(item.id,"进来几次")
                    item.num = 1;
                }
                return item
            })
        }, () => {
            console.log(this.state.list, "home页面")
        })
    }
}
