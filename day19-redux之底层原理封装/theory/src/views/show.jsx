import React, { Component } from 'react'

//在这里引入我们的仓库进行数据的展示

import store,{actions} from "../store/index";
import Child from './Child';

//actions 是用来改变reducer的

console.log(store)

export default class Show extends Component {
    constructor(props){
        super(props);
        //console.log(store.getState("num"))//这个就是获取的
        this.state={
            num:null
        }
    }
    render() {
        return (
            <div>
                展示页面
                <h1>仓库数据<br />{this.state.num}</h1>
                <Child></Child>
            </div>
        )
    }
    componentDidMount(){
        store.subscriber(()=>{
            this.setState({
                num:store.getState("num")
            })
        })
    }
}
