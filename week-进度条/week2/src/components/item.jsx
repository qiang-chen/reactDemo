import React, { Component } from 'react'

import "../css/item.css"


export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left1: 0,
            left2: 300
        }
    }
    render() {
        return (
            <div className="cantainer">
                {this.props.dir ? <div className="bar1" ref="bar1">
                    <div className="ball1" style={{ left: this.state.left1 }} onMouseDown={(e) => {
                        e.stopPropagation()
                        let curX = e.clientX - 5 - this.refs.bar1.offsetLeft - e.target.offsetLeft;
                        this.ball1.call(this, e, curX)
                    }}>
                        <b>{parseInt(this.state.left1 / 3)}</b>
                    </div>
                    <div className="ball2" style={{ left: this.state.left2 }} onMouseDown={(e) => {
                        let curX = e.clientX - 5 - this.refs.bar1.offsetLeft - e.target.offsetLeft;
                        this.ball2.call(this, e, curX)
                    }}>
                        <b>{parseInt(this.state.left2 / 3)}</b>
                    </div>
                </div> : <div className="bar2" ref="bar2">
                        <div className="ball1" style={{ top: this.state.left1 }} onMouseDown={(e) => {
                            e.stopPropagation()
                            let curY = e.clientY - 5 - this.refs.bar2.offsetTop - e.target.offsetTop;
                            this.newball1.call(this, e, curY)
                        }}>
                            <b>{parseInt(this.state.left1 / 3)}</b>
                        </div>
                        <div className="ball2" style={{ top: this.state.left2 }} onMouseDown={(e) => {
                              let curY = e.clientY - 5 - this.refs.bar2.offsetTop - e.target.offsetTop;
                              this.newball2.call(this, e, curY)
                        }}>
                            <b>{parseInt(this.state.left2 / 3)}</b>
                        </div>
                    </div>}
            </div>
        )
    }
    newball1(e, curY) {
        document.onmousemove = (e) => {
            //console.log(e.clientX - curX - this.refs.bar1)
            this.setState({
                left1: e.clientY - curY - this.refs.bar2.offsetTop
            }, () => {
                if (this.state.left1 < 0) {
                    this.setState({
                        left1: 0
                    })
                } else if (this.state.left1 > this.state.left2 - 10) {
                    this.setState({
                        left1: this.state.left2 - 10
                    })
                }
                this.props.bar1(this.state.left1,this.state.left2)
            })
            
        }
        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null
        }
    }
    newball2(e, curY) {
        document.onmousemove = (e) => {
            this.setState({
                left2:e.clientY - curY- this.refs.bar2.offsetTop
            }, () => {
                //console.log(this.state.left2,this.state.left1)
                if (this.state.left2 <= this.state.left1 + 10) {
                    this.setState({
                        left2: this.state.left1 + 10
                    })
                } else if (this.state.left2 > 300) {
                    this.setState({
                        left2: 300
                    })
                }
                this.props.bar1(this.state.left1,this.state.left2)
            })
        }
        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null
        }
    }
    ball2(e, curX) {
        document.onmousemove = (e) => {
            this.setState({
                left2: e.clientX - curX - this.refs.bar1.offsetLeft
            }, () => {
                //console.log(this.state.left2,this.state.left1)
                if (this.state.left2 <= this.state.left1 + 10) {
                    this.setState({
                        left2: this.state.left1 + 10
                    })
                } else if (this.state.left2 > 300) {
                    this.setState({
                        left2: 300
                    })
                }
                this.props.bar1(this.state.left1,this.state.left2)
            })
        }
        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null
        }
    }
    ball1(e, curX) {
        document.onmousemove = (e) => {
            console.log(e.clientX - curX - this.refs.bar1)
            this.setState({
                left1: e.clientX - curX - this.refs.bar1.offsetLeft
            }, () => {
                if (this.state.left1 < 0) {
                    this.setState({
                        left1: 0
                    })
                } else if (this.state.left1 > this.state.left2 - 10) {
                    this.setState({
                        left1: this.state.left2 - 10
                    })
                }
                this.props.bar1(this.state.left1,this.state.left2)
            })
        }
        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null
        }
    }
}
