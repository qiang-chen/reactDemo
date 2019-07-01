import React, { Component } from 'react'

import { connect } from "react-redux"

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grade: 0
        }
        this.grade = 0;
    }
    render() {
        let num = 0;
        let flag = 0
        return (
            <div style={{ fontSize: ".34rem" }}>
                分数展示<h1>{this.state.grade}</h1>
                <hr />
                {this.props.examList.map((item, index) => {
                    flag++;
                    return <div key={index}>
                        <h2>{item.title}</h2>
                        {item.questions.map((el, iii) => {
                            let ind = this.props.userList.findIndex(i => i.questionId === el.id);
                            num++;
                            if (ind === -1) {
                                return <span key={el.id}>{num}--错误</span>
                            } else {
                                console.log(this.props.userList[ind].order.toUpperCase(), el.answer, "====")
                                if (this.props.userList[ind].order.toUpperCase() === el.answer) {
                                    if (flag === 1) {
                                        this.grade += 2;
                                       
                                        console.log(this.grade, "此时是几分了")
                                    } else if (flag === 2) {
                                        this.grade += 1;
                                        
                                    } else if (flag === 3) {
                                        this.grade += 5;
                                        
                                    } else if (flag === 4) {
                                        this.grade += 10;
                                        
                                    }
                                    return <span key={el.id} style={{ color: "red" }}>{num}--正确</span>

                                } else {
                                    return <span key={el.id}>{num}--错误</span>
                                }

                            }
                        })}
                    </div>
                })}
            </div>
        )
    }
    componentDidMount(){
        console.log("瓜子啊")
        this.setState({
            grade:this.grade
        })
    }
    componentDidUpdate(){
        console.log(this.grade,"gengxin")
        
    }
}

        const mapStateToProps = (state) => {
            return {
                userList: state.ChooseReducer,//将用户的答题情况从仓库中取出来
                examList: state.ExamListReducer,//将所有的试题取出来，
                showgrade: state.gradeReducer
            }
        }

        const mapDispatchToProps = (dispatch) => {
            return {
                saveGrade: (num) => {
                    dispatch({ type: "GRADE", num })
                }
            }
        }

        Result = connect(mapStateToProps, mapDispatchToProps)(Result)