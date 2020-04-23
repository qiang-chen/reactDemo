import React, { Component } from 'react'
import "@/css/er_item.css"
//import "../fonts/iconfont.css"
import {withRouter} from "react-router-dom"
export default class er_item extends Component {
    render() {
        let {downurl,name,artist,playcnt,pic,ind}=this.props
        return (
            <div className="er_item" onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                //console.log(this.props.match)
                this.props.jumpDetail(downurl,this.props.match.path)
            }}>
                <div>
                  <img src={pic} alt=""/>
                </div>
                <div>
                    <p>{ind}.{name}</p>
                    <p>{artist}   播放：{playcnt}</p>
                </div>
                <div>
                    <span className="iconfont icon-fenxiang4"></span>
                </div>
            </div>
        )
    }
}


er_item=withRouter(er_item)