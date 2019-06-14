import React, { Component } from 'react'

//引入洗手间和厨房
import Kitchen from "./kitchen.jsx";
import Washroom from "./washroom.jsx"


export default class home extends Component {
    render() {
        return (
            <div>
                <b>厨房：</b><Kitchen></Kitchen>
                <hr/>
                <b>洗手间：</b><Washroom></Washroom>
            </div>
        )
    }
}
