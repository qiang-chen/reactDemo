import React, { Component } from 'react'

import '../css/Dialogs.css'

export default class Dialogs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let { DialogStyle, header, content, footArr } = this.props;
        return (
            <div className="alert">
                <div style={DialogStyle} className="alertBox">
                    {header && <h2>{header}</h2>}
                    <hr />
                    {content && <div>{content}</div>}
                    <hr />
                    {footArr && <div>
                        {footArr.map((item,index)=>{
                            //console.log(item)
                            return <span onClick={
                                ()=>{
                                    item.fn()
                                }
                            } key={index}>{item.btn}</span>
                        })}
                    </div>}
                </div>
            </div>

        )
    }
}
