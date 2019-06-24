import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            <div>
                detail
            </div>
        )
    }
    componentDidMount(){
        //详情页接受数据
        console.log(this.props,"detail页面打印")
    }
}
