import React from 'react'

export default class Child extends React.Component {
    constructor(props) {
        console.log("constructor子")
        super(props);
        this.state = {
            user: "zs"
        }
    }
    render() {
        console.log("render子")
        return (
            <div>
                <button onClick={() => {
                    console.log("子组件点击")
                    this.setState({
                        user: "ww"
                    })
                }}>子点击改变state</button>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        let flag = true;
        switch (true) {
            case nextProps.userId === this.props.userId&&nextState.user === this.state.user:
                console.log("props",nextProps.userId,this.props.userId)
                flag = false;
                break;
            default:
                break;
        }
        console.log("shouldComponentUpdate",flag)
        return flag;
    }
    componentWillUpdate(){
        //更新之前触发
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
         //更新之后触发
        console.log("componentDidUpdate")
    }
    componentWillReceiveProps(props){
         //props发生改变
        console.log("componentWillReceiveProps",props)
    }
    componentWillUnmount(){
         //销毁触发
        console.log("componentWillUnmount")
    }
}
