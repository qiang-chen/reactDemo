import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "../css/foot.css"
export default class footer extends Component {
    render() {
        return (
            <div className="foot">
                <NavLink to="/add" activeClassName="active">添加账单</NavLink>
                <NavLink to="/look">查看账单</NavLink>
            </div>
        )
    }
}
