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

const reducers=combineReducers({addReducer});

const store=createStore(reducers);
export default store;