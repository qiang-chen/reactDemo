import React, { Component } from 'react'


import PropTypes from 'prop-types';

class Yanzheng extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
                <h1>验证  --- {this.props.num}</h1>
            </div>
        )
    }
}

export default Yanzheng;

Yanzheng.propTypes={
    num:PropTypes.number
}


