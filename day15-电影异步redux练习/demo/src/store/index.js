import {combineReducers,createStore,applyMiddleware} from "redux"

import thunk from "redux-thunk";//改变dispatch让其可以支持函数 并将真的dispatch储存到next这个变量中 在需要的时候调用next

const reducerList=(state={},action)=>{
    switch (action.type) {
        case "ADD_LIst":{
            state=action.data
            return {...state}
        }
        default:
            return {...state}
    }
}

const reducerPlay=(state={},action)=>{
    switch (action.type) {
        case "PLAY_LIST":{
            console.log(action.data,"播放地址")
            state=action.data
            return {...state}
        }
        default:
            return {...state}
    }
}

const reducers=combineReducers({reducerList,reducerPlay});

const store=createStore(reducers,applyMiddleware(thunk))

export default store;