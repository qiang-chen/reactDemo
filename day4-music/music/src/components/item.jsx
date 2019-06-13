import React, { Component } from 'react'

import "../css/item.css"

export default class item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null
        }
        this.refAudio = React.createRef()
    }
    componentDidMount() {
        //在dom生成的生命周期中给document添加键盘按下操作
        document.addEventListener("keydown", (e) => {
            if (e.keyCode === this.props.keyCode) {
                clearTimeout(this.state.timer)
                let audioEl = this.refAudio.current;
                if(audioEl&&this.props.flagePlay){
                    audioEl.currentTime = 0;
                    console.log(parseFloat(this.props.num/100))
                audioEl.volume=parseFloat(this.props.num/100)
                audioEl.play();
                this.props.changeCount(e.keyCode);
                this.setState({
                    timer: setTimeout(() => {
                        this.props.changeCount(0)
                    }, 80)
                })
                this.props.onShow(this.props.id)
                }
                
                
            }
        })
    }
    componentWillUnmount() {
        //在销毁阶段注销事件
        document.removeEventListener("keydown",()=>{
            
        })
        clearTimeout(this.state.timer)
    }
    render() {
        //console.log()
        return (
            <>
                <div className={this.props.flag ? "active item" : "item"} onClick={() => {
                    let audioEl = this.refAudio.current;
                    audioEl.currentTime = 0;
                    audioEl.play()
                    console.log(this.props.num/100)
                    audioEl.volume=this.props.num/100
                    this.props.changeCount(this.props.keyCode);
                    clearTimeout(this.state.timer)
                    this.setState({
                        timer: setTimeout(() => {
                            this.props.changeCount(0)
                        }, 80)
                    })
                    this.props.onShow(this.props.id)
                }}>
                    <audio src={this.props.url} ref={this.refAudio}></audio>
                    <div className="btn">{this.props.keyTrigger}</div>
                </div>
            </>
        )
    }
}
