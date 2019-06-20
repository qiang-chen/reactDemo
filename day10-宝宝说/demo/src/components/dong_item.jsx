import React, { Component } from 'react'
import "../css/dong_item.css"

import {withRouter} from "react-router-dom"

export default class dong_item extends Component {
    render() {
        let {name,pic,score,tracks,ind,downurl}=this.props
        return (
            <div className="dong_item" onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                //console.log(this.props.match)
                this.props.jumpDetail(downurl,this.props.match.path)
            }}>
                    <div>
                        <img src={pic} alt=""/>
                        <span>{score}分</span>
                    </div>
                    <div>
                        <p>{ind}.{name}</p>
                        <p>共{tracks}集</p>
                    </div>
            </div>
        )
    }
}

dong_item=withRouter(dong_item)