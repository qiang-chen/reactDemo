
//引入redux中创建仓库的方法

import {createStore,combineReducers} from "redux";


const initState={
    num:0
}



let reducer=(state=initState,action)=>{
   
    switch (action.type) {
        case "BIG":
            state=action.data
            return state;
    
        default:
            return state;
    }
}



const reducers=combineReducers({reducer})

const store=createStore(reducers);
export default store;