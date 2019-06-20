import React, { Component } from 'react'
import "@/css/listen_er.css"
export default class listen_Item extends Component {
    render() {
        let {ind,artist,name,playcnt}=this.props
        return (
            <div className="ite">
                <div>{ind}</div>
                <div>
                    <p>{name}</p>
                    <p>{artist} 播放量：{playcnt}</p>
                </div>
            </div>
        )
    }
}
