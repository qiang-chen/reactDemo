import React, { Component } from 'react'

export default class child extends Component {
    constructor(props){
        super(props);
        this.state={
      
        }
    }
    render() {
        return (
            <div className="zi">
                {this.props.children}
                <h4>
                    {this.props.msg}
                </h4>
            </div>
        )
    }
}
