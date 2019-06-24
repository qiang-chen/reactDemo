import {combineReducers,applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk"

//applyMiddleware  改造dispatch的

//thunk异步action

const addReducer=(state=[],action)=>{
    switch (action.type) {
        case "ADD_LIST":{
            console.log(action,"pppp")
            state=action.data;
            return state
        }
            
        default:
            return state;
    }
}

const reducers=combineReducers({addReducer});
const store=createStore(reducers,applyMiddleware(thunk));

export default store;