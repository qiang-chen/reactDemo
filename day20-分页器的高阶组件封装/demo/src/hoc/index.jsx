
import React from "react"
export default function (opj) {
    console.log(opj)
    let { data, sum } = opj;
    console.log(data);

    let len = Math.ceil(data.length / sum);
    let arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i + 1)
    }
    console.log(arr)

    return (Com) => {
        return class Page extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    count:0,
                    value:""
                }
            }
            render() {
                return (
                    <>
                        <Com {...this.props} list={data.slice(this.state.count*sum,(this.state.count+1)*sum)}></Com>
                        <h2><button onClick={()=>{
                            let num=this.state.count;
                            num--;
                            if(num<0){
                                return
                            }
                            this.setState({
                                count:num
                            },()=>{
                                console.log(this.state.count)
                            })
                        }}>上一条</button><div>{arr.map((item,index)=>{
                            return <span key={index} className={this.state.count===index?"active":""} onClick={()=>{
                                this.setState({
                                    count:index
                                })
                            }}>{item}</span>
                        })}</div><button onClick={()=>{
                            let num=this.state.count;
                            num++;
                            if(num>=len){
                                return
                            }
                            this.setState({
                                count:num
                            },()=>{
                                console.log(this.state.count,"下一条")
                            })
                        }}>下一条</button><b>跳转到第<input type="text" value={this.state.value} onChange={(e)=>{
                            this.setState({
                                value:e.target.value
                            })
                        }} onBlur={()=>{
                            if(this.state.value*1>=0&&this.state.value<=len){
                                console.log("进来了吗")
                                this.setState({
                                    count:this.state.value-1
                                },()=>{
                                    console.log(this.state.count,"改成几了")
                                })
                            }else{
                                alert("查找不到")
                                this.setState({
                                    count:0
                                })
                            }
                        }} />页</b></h2>
                    </>

                )
            }
        }
    }
}