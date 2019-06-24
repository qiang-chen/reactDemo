//仓库配置

import {createStore,combineReducers} from "redux";

const addReducer=(state=[],action)=>{
    switch (action.type) {
        case "ADD_LIST":{
            state.push(action.opj);
            return state;
        }
    
        default:
           return state
    }
}

const totalReaducer=(state=0,action)=>{
    //账单的一个总计处理
    //重点注意 这里不允许处理业务逻辑 也就是store的getState方法不能调用 所有的业务逻辑都放在外面
    //这里面只做数据的计算
    switch (action.type) {
        case "TOTAL":{
            state=action.totle;
            console.log(state)
            return state
        }
    
        default:
            return state
    }
}




const reducers=combineReducers({addReducer,totalReaducer});

const store=createStore(reducers);
export default store;