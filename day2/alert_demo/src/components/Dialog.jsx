import React from "react"
import "../css/Dialog.scss"
class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            opj:{
                type:this.props.opj.type,
                title:this.props.opj.title
            }
        }
        
    }
    change(judge){
        //在点击事件里面调用父组件传过来的函数
        console.log(this.refs.myContent.value,"input值")
        this.props.onchange(judge)
    }
    render(){
        return(
            <div className="mask">
                <div className="alertBox">
                {this.state.opj.type===1&&<div>
                    <div className="title">提示</div>
                    <div className="content">
                    您确定要执行alert操作吗
                </div>
                    </div>
                    }
                {this.state.opj.type===2&&<div>
                    <div className="title">提示</div>
                    <div className="content">
                    您确定要执行confirm操作吗
                </div>
                    </div>}
                {this.state.opj.type===3&&<div>
                    <div className="title">请输入内容</div>
                    <div className="content">
                    <input type="text" placeholder="请输入内容呗" ref="myContent"/>
                </div>
                    </div>}
                <div className="footer">
                    <span onClick={this.change.bind(this,"确定")}>确定</span>
                    <span onClick={this.change.bind(this,"取消")}>取消</span>
                </div>
            </div>
            </div>
            
        )
    }
    componentWillReceiveProps(props){
        this.setState({
            opj:{...props.opj}
        })
    }
}

export default Dialog;