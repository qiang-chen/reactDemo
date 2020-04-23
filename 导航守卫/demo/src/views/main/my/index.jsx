import React, { Component } from 'react'

//引入导航守卫高阶组件
import Guard from "@/hoc/guard"

export default class My extends Component {
    render() {
        return (
            <>
                <header>
                    我的头部展示
                </header>
                <main>
                    wo
                </main>
            </>
        )
    }
}

My=Guard(My)
