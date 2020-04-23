import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import './detail.css'
class Detail extends Component {
    render() {
        return (
            
        );
    }
}

Detail=withRouter(Detail)
let mapStateToProps=(state)=>{
    return {
        list:state.addBuyData,
        color:state.addColor
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        
    }
}
Detail=connect(mapStateToProps,mapDispatchToProps)(Detail)
export default Detail;
