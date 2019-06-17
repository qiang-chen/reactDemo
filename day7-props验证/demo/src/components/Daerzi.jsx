import React, { Component } from 'react'

import Watcher from "../watcher/"


export default class Daerzi extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        Watcher.subscriber("daerzi",(msg)=>{
            console.log(msg)
            Watcher.promulgator("child","老爸叫我们吃饭")
        })
    }
    render() {
        return (
            <div>
                大儿子
            </div>
        )
    }
}
