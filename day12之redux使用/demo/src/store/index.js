
//引入redux中创建仓库的方法

import {createStore,combineReducers} from "redux";


//引入两个分reducer
import listReducer from "./reducers/listReducer.js";
import userReducer from "./reducers/userReducer.js"


// let reducer=(state,action)=>{
//     console.log(state,"------",action)
//     switch (action.type) {
//         case "BIG":
//             state=action.data
//             return state;
    
//         default:
//             return state;
//     }
// }



const reducers=combineReducers({listReducer,userReducer})

const store=createStore(reducers);
export default store;