import React, { Component } from 'react'

import {connect} from "react-redux"
import { timer } from '_rxjs@6.5.2@rxjs';
export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state={
            value:false,
            arr:[],
            listCur:[]
        }
    }
    render() {
        return (
            <div>
                <header style={{
                    width:"100%",
                    height:"1rem",
                    backgroundColor:"red",
                    color:"#fff",
                    textAlign:"center",
                    lineHeight:"1rem",
                    fontSize:".44rem"
                }} onClick={()=>{
                    this.props.history.go(-1)
                }}>
                    返回上一级
                </header>
                {this.props.list&&this.props.list.map(item=>{
                    return <div key={item.id}>
                        <label htmlFor={item.id}>
                            <input type="checkbox" value={item.id} id={item.id} onChange={(e)=>{
                            console.log(e.target.checked)
                            console.log(e.target.value)
                            console.log(item)
                            let newArr=this.state.arr;
                            if(e.target.checked){
                                newArr.push(item)
                                this.setState({
                                    arr:newArr
                                })
                            }else{
                                let index=newArr.filter(el=>el.id===item.id);
                                newArr.splice(index,1);
                                console.log(newArr,"========")
                                this.setState({
                                    arr:newArr
                                })
                            }
                        }}/> <span>{item.title}</span>
                        </label>
                    </div>
                })}

                <button style={{
                    width:"100%",
                    height:"1rem",
                    backgroundColor:"green",
                    color:"#fff",
                    border:"0",
                    textAlign:"center",
                    lineHeight:"1rem",
                    fontSize:".44rem",
                    position:"fixed",
                    bottom:0,
                    left:0
                }} onClick={()=>{
                    this.setState({
                        listCur:this.props.list
                    },()=>{
                        console.log(this.state.arr,this.state.listCur)
                        let newArr=this.state.arr;
                        let newListCur=this.state.listCur
                        newArr.forEach(el=>{
                            let index=newListCur.findIndex(item=>{
                                return el.id===item.id
                            })
                            if(index!==-1){
                                newListCur.splice(index,1)
                            }
                            
                        })
                        console.log(newListCur,"------------")
                        this.props.savaEdit(newListCur)

                    })
                    
                }}>删除<span style={{
                    marginLeft:"1rem"
                }}>{this.state.arr.length}</span></button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.reducerFrom
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        savaEdit:(arr)=>{
            dispatch({type:"FROM_LIST",arr})
        }
    }
}

Edit = connect(mapStateToProps,mapDispatchToProps)(Edit)