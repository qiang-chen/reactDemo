import React, { Component } from 'react'
import Box from '../components/Box';
import Item from '../components/Item';
import "@/css/main.scss"

//引入网络请求
import {getProductList} from "@/api/index"

import {connect} from "react-redux"

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            arr:[
                {
                    color:"red",
                    border:"solid 3px #343434",
                    id:1
                },
                {
                    color:"green",
                    border:"solid 1px",
                    id:2
                },
                {
                    color:"yellow",
                    border:"solid 1px",
                    id:3
                },
                {
                    color:"skyblue",
                    border:"solid 1px",
                    id:4
                },
                {
                    color:"mediumvioletred",
                    border:"solid 1px",
                    id:5
                }
            ],
            color:"red",
            ProductList:[]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="nav">
                    {this.state.arr.map(item=>{
                        return <Box key={item.id} {...item}  changeCount={this.changeCount.bind(this)}></Box>
                    })}
                </div>
                <div className="list">
                    <div className="listBox">
                        {this.state.ProductList.length&&this.state.ProductList.map(item=>{
                            return <Item key={item.id} {...item} saveBuyList={this.saveBuyList.bind(this)}></Item>
                        })}
                        
                    </div>
                </div>
                <div className="footer">
                    <span>总数 {this.sumNum()}</span>
                    <span>总价 {this.sumPrice()}</span>
                    <button onClick={()=>{
                        //点击购买按钮跳到购买列表
                        console.log(this.props.history)
                        this.props.history.push("/show/"+this.state.color)
                    }}>购买</button>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //发送网络请求获取商品列表数据
         this.props.getList(getProductList)
         //将仓库的数据取出来存在当前组件中
         console.log(this.props.defaultColor,"执行了几遍")
         this.setState({
            ProductList:this.props.list,
            color:this.props.defaultColor.color
         },()=>{
            this.changeCount(this.props.defaultColor.id)
         })
         
    }
    changeCount(id=1){
        let newArr=[...this.state.arr];
        let color=null;
        newArr.forEach(item=>{
            if(item.id===id){
                item.border="solid 3px #343434"
                color=item.color
            }else{
                item.border="solid 1px"
            }
        })
        this.setState({
            arr:newArr,
            color
        },()=>{
            this.props.colorStyle({color,id})
        })
    }
    saveBuyList(type,opj){
        //在点击加号的时候将列表存到仓库中去 同步
        let newArr=this.props.buyListData;
        let index=newArr.findIndex(item=>item.id===opj.id);
        if(type==="+"){
            if(index===-1){
                //console.log(opj,"-1的时候")
                let newOpj={...opj};
                newOpj.num=1
                newArr.push(newOpj)
            }else{
                newArr[index].num++;
                //console.log(newArr[index],"不是-1的时候")
            }
        }else if(type==="-"){
            //console.log("减号的时候")
            if(index!==-1){
                newArr[index].num--;
            }
        }
        
        //console.log(newArr)
        this.props.buyList(newArr)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            ProductList:nextProps.list.map(item=>{
                let index=this.props.buyListData.findIndex(el=>el.id===item.id);
                if(index!==-1){
                    item.num=this.props.buyListData[index].num
                }else{
                    item.num=0;
                }
                return item
            })
        })
        
    }
    sumNum(){
        //此函数求商品的总数
        let num=0;
        this.props.buyListData.forEach(item=>{
            num+=item.num
        })
        return num
    }
    sumPrice(){
        //求商品的总价格
        let price=0;
        this.props.buyListData.forEach(item=>{
            price+=item.num*item.price
        })
        return price;
    }
}

const mapStateToProps=(state)=>{
    return {
        list:state.productListReducer,
        buyListData:state.buyListReducer,
        defaultColor:state.colorReducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getList:(fn)=>{
            dispatch(fn)
        },
        buyList:(arr)=>{
            dispatch({type:"BUY_LIST",data:arr})
        },
        colorStyle:(color)=>{
            dispatch({type:"COLOR",color})
        }
    }
}

Main=connect(mapStateToProps,mapDispatchToProps)(Main)

