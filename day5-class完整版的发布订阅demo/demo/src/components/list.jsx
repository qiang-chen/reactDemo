import React, { Component } from 'react'

import Item from "./item.jsx"

import Watcher from "../watcher/index.js"

import "../css/list.css"

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            newList: [],
            count:0,
            value:"",
            comment:{},
            flag:false,
            alertFlag:false,
            alertArr:["小姨子","大嫂子","小妹妹"]
        }
    }
    // static getDerivedStateFromProps(nextProps) {
    //     //console.log(nextProps)
    //     console.log("静态方法执行了几遍")
    //     return {
    //         list: nextProps.arr.map(item => {
    //             item.num = 0;
    //             return item
    //         })
    //     }
    // }

    componentWillMount(){
        this.setState({
            list: this.props.arr.map(item => {
                item.num = 0;
                return item
            })
        })
    }

    componentDidMount() {
        this.setState({
            newList: this.state.list
        },()=>{
            console.log("执行吗")
        })

        //订阅者 控制弹框的显示隐藏
        Watcher.subscriber("transpond",()=>{
            this.setState({
                alertFlag:true
            })
        })
        

        //订阅者接受订阅功能 点赞订阅
        Watcher.subscriber("Like",(id)=>{
            let arr=this.state.newList;
            //console.log(arr,"arr")
            this.setState({
                newList: arr.map(item=>{
                    if(item.id===id){
                        item.num++
                    }
                    console.log(item)
                    return item
                })
            },()=>{
                console.log(this.state.newList)
            })
            console.log(this.state.newList,"下面")
        });

        //评论订阅
        Watcher.subscriber("comment",(id)=>{
            this.setState({
                count:id
            })
        })
    }
    render() {
        return (
            <div className="list">
                {this.state.newList.length?this.state.newList.map(item => {
                    return <div key={item.id}>
                        <h1>{item.title}</h1>
                        <img src="/favicon.ico" alt="" />
                        <Item id={item.id} num={item.num}></Item>
                        {this.state.count===item.id&&<div><input type="text" value={this.value} onChange={(e)=>{
                            this.setState({
                                value:e.target.value
                            })
                        }}/> <button onClick={()=>{
                            if(this.state.comment[item.id]){
                                this.setState(()=>{
                                    this.state.comment[item.id].push(this.state.value)
                                })
                            }else{
                                //不存在
                                this.setState(()=>{
                                    this.state.comment[item.id]=[this.state.value]
                                })
                            }

                            this.setState({
                                flag:true,
                                value:""
                            })
                        }}>提交</button></div>}
                        <ul>
                            {this.state.flag&&this.state.count===item.id&&this.state.comment[item.id]&&this.state.comment[item.id].map(el=>{
                                return <li key={el}>{el}</li>
                            })}
                        </ul>
                    </div>
                }):""}
                {
                    this.state.alertFlag&&<div>
                    <div className="alert">
                        
                        </div>
                    <div className="box">
                            <ol>
                                {this.state.alertArr.map((item,index)=>{
                                    return <li key={index} onClick={()=>{
                                        //控制弹框消失
                                        this.setState({
                                            alertFlag:false
                                        })
                                        //发布者 让点击内容显示在顶部
                                        Watcher.promulgator("list",item)
                                    }}>{item}</li>
                                })}
                                
                            </ol>
                        </div>
                    </div>
                }
                
            </div>
        )
    }
    componentDidUpdate(){
        // if(this.state.comment[this.state.count]){
        //     console.log(this.state.comment[this.state.count])
        //     this.setState({
        //         flag:false
        //     })
        // }
    }
}
