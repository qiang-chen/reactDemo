import React, { Component } from 'react'

export default class aa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: ["喜羊羊", "懒洋洋", "灰太狼", "红太狼"],
            value: "",
            list:[]
        }
    }
    render() {
        return (
            <div >
                <h1>
                    <input type="text" value={this.state.value} onChange={(e) => {
                        // let value =e.target.value
                        this.setState({
                            value:e.target.value,
                        })
                            console.log(e.target)
                        this.state.list=this.state.arr.filter(item=>{
                            return item.indexOf(e.target.value)!==-1
                        })
                        // ,()=>{
                           
                        //     this.setState({
                        //         arr:this.state.arr.filter(item=>{
                        //             console.log(item,value,item.includes(this.state.value))
                        //             return item.includes(this.state.value)
                        //         })
                        //     })
                        // })
                        // this.setState(() => {
                        //     this.setState({
                        //         value:value,
                        //         arr: this.state.arr.filter(item => {
                        //             console.log(item, value, item.includes(this.state.value))
                        //             return item.includes(this.state.value)
                        //         })
                        //     })
                        // })

                    }} />
                    {this.state.name}
                </h1>
                {this.state.list.map((item, index) => {
                    return <h2 key={index}>{item}</h2>
                })}
            </div>
        )
    }
}
