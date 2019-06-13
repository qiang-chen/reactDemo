import React, { Component } from 'react'

import "../css/right.css"

export default class right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ff:true,
            num:0,
            bank:false
        }
    }
    render() {
        return (
            <div>
                <div>
                    <input type="radio" name="a" checked={this.state.ff} onChange={() => {
                         this.setState({
                            ff:true
                        })
                        this.props.onPlays(true)
                    }} />开
                <input type="radio" name="a" onChange={() => {
                    this.setState({
                        ff:false
                    })
                        this.props.onPlays(false)
                    }} />关
                </div>
                <h1>{this.props.msg}</h1>
                <input type="range" value={this.state.num} min={0} max={100} onChange={(e)=>{
                    this.setState({
                        num:e.target.value
                    },()=>{
                        this.props.onVolume(this.state.num)
                    })
                    
                }}/>
                <h3>{this.state.num}音量</h3>

                <div className="bank" onClick={()=>{
                        //console.log(this.state.bank)
                        this.setState({
                            bank:!this.state.bank,
                        })
                        console.log(this.state.bank,"asdasd")
                        this.props.onMusic()
                    }}>
                        <h2 style={{margin:"89px"}}>切换音频</h2>
                        <span className={this.state.bank?'active':''}></span>
                    </div>
            </div>
        )
    }
}
