import React, { Component } from 'react'


//引入仓库

import store from "../store/index"


export default class SmallChild extends Component {
    render() {
        return (
            <div>
                小儿子
                <button onClick={()=>{
                    store.dispatch({type:"BIG",data:"大哥好呀"})
                }
                }>发送</button>

                <h1>
                    <button style={{width:"80px",height:"60px"}}>-</button><br/>
                <button style={{width:"80px",height:"60px"}}>+</button>
                </h1>
                
            </div>
        )
    }
}
