import React, { Component } from 'react'

import store, { actions } from "../store/index"

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    addNumHandle() {
        console.log("点击")
        console.log(store.state.num)
        store.dispatch(actions.addNum())
        console.log(store.getState("num"))
    }
    render() {
        return (
            <div>
                <h2>子组件</h2>
                <button onClick={this.addNumHandle.bind(this)}>
                    增加数值
                </button>
            </div>
        )
    }
}
