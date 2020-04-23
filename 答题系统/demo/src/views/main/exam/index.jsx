import React, { Component } from 'react'

import { connect } from "react-redux"

import "@/css/exam.scss"



export default class Exam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            count: 0,
            index: 0,
            styleCount: -1,
            chooseList: [],//用户选择列表
            active:null
        }
        this.item = React.createRef()
    }
    render() {
        let examData = this.props.examList;
        //console.log(examData)
        let everyTitle = null;
        if (examData.length) {
            examData = this.props.examList[this.state.count]
            //console.log(examData,"这里是什么")
            everyTitle = examData.questions[this.state.index]
            //console.log(everyTitle)
        }
        console.log(this.props.match.params.id)
        return (
            <div>
                <h1>
                    {examData.length !== 0 && examData.title}
                </h1>
                <div className="exam">
                    <h2>第{this.state.index + 1}题</h2>
                    {everyTitle && <h4 dangerouslySetInnerHTML={{ __html: everyTitle.title }}></h4>}
                    
                    <div>{this.props.match.params.id !==0 && <input type="text" placeholder="请输入答案"/>}</div>
                    {this.props.match.params.id &&

                        <div ref={this.item}>
                            {everyTitle && everyTitle.questionChoices.map(item => {
                                return <div key={item.id} className={this.state.styleCount === item.id ? "active item" : "item"} onClick={this.btn.bind(this, item)}>
                                    <span>{item.order.toUpperCase()}</span>
                                    <span>{item.content}</span>
                                </div>
                            })}
                        </div>

                    }





                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            count: this.props.match.params.id
        })
    }
    btn(item) {
        //console.log(this.item.current,"----")
        
        //console.log(active)
        //console.log(item,"点击");
        let arr = this.state.chooseList;
        let ind = arr.findIndex(el => el.id === item.id);
        if (ind === -1) {
            arr.push(item);
        } else {
            arr[ind] = { ...item }
        }

        this.setState({
            styleCount: item.id,
            chooseList: arr
        }, () => {
            // setTimeout(() => {
            //     let index = this.state.index;
            //     index++;
            //     if (index >= this.props.examList[0].questions.length) {
            //         return
            //     }
            //     this.setState({
            //         index
            //     })
            //     //console.log(this.state.chooseList,"用户所有的选择项")
            //     //将用户选择的题存到仓库里面去
            //     this.props.saveChoose(this.state.chooseList)
            // }, 450)
            
            this.active&&this.active.removeEventListener("webkitTransitionEnd",()=>{})
            this.active=this.item.current.querySelector(".active");
            this.active&&this.active.addEventListener("webkitTransitionEnd",()=>{
                let index = this.state.index;
                index++;
                if (index >= this.props.examList[0].questions.length) {
                    return
                }
                this.setState({
                    index
                })
                //console.log(this.state.chooseList,"用户所有的选择项")
                //将用户选择的题存到仓库里面去
                this.props.saveChoose(this.state.chooseList)
            })
            console.log(this.active,"====")
        })
        //console.log(this.item.current)
        // active && active.addEventListener("webkitTransitionEnd", () => {
        //     console.log("动画结束")
        // })
    }
}

const mapStateToProps = (state) => {
    return {
        examList: state.ExamListReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveChoose: (data) => {
            dispatch({ type: "CHOOSE", data })
        }
    }
}

Exam = connect(mapStateToProps, mapDispatchToProps)(Exam)