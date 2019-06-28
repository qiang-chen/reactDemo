import React, { Component } from 'react'

import "@/css/add.scss"

import { Input } from "antd"

import resultArr from "@/util/filterData"

import Item from "@/components/Item"

import {connect} from "react-redux"

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            arr: []
        }
    }
    render() {
        return (
            <div className="add">
                <header>
                    <span onClick={()=>{
                        this.props.history.go(-1)
                    }}>
                        返回上一级
                    </span>
                    <span>
                        添加页面
                    </span>
                </header>
                <div className="from">
                    <Input allowClear value={this.state.value} onChange={(e) => {
                        this.setState({
                            value: e.target.value
                        }, () => {
                            let newArr=resultArr(this.state.value)
                            this.props.list.forEach(item=>{
                                let index=newArr.findIndex(el=>el.id===item.id);
                                if(index!==-1){
                                    console.log(newArr,"里面是什么")
                                    newArr[index].flag=item.flag
                                }
                            })
                            this.setState({
                                arr:newArr
                            })
                            //this.props.savaEdit(resultArr(this.state.value))
                        })

                    }}></Input>
                </div>
                <ul className="list" id="ul">
                    {this.state.arr.map(item => {
                        //console.log(item,"00")
                        return <Item key={item.id} {...item}></Item>
                    })}

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.reducerFrom
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         savaEdit:(arr)=>{
//             dispatch({type:"FROM_LIST",arr})
//         }
//     }
// }

Add = connect(mapStateToProps)(Add)
