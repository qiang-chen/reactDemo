//仓库主文件

import {createStore,applyMiddleware,combineReducers} from "redux"

import thunk from "redux-thunk";

import {createLogger} from "redux-logger";

//所有的试题
import ExamListReducer from "./reducers/examList"

//单选试题
import ChooseReducer from "./reducers/choose"

import gradeReducer from "./reducers/grade"

const reducers=combineReducers({ExamListReducer,ChooseReducer,gradeReducer});


const logger=createLogger()

const store=createStore(reducers,applyMiddleware(thunk,logger))

export default store;