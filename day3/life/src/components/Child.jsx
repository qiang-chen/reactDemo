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
                flag = false
                break;
            // case nextState.user === this.state.user:
            //     console.log("state",nextState.user,this.state.user)
            //     flag = false;
            //     break;
            default:
                break;
        }
        console.log("shouldComponentUpdate",flag)
        return flag;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillReceiveProps(props){
        console.log("componentWillReceiveProps",props)
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}
