import {combineReducers,createStore,applyMiddleware} from "redux"

import thunk from "redux-thunk";


// {
//     key: '1',
//     name: '胡彦斌',
//     age: 32,
//     address: '西湖区湖底公园1号',
//   }
const reducerFrom=(state=[],action)=>{
    switch (action.type) {
        case "FROM_LIST":{
            console.log(action.arr,"仓库")
           state=JSON.parse(JSON.stringify(action.arr))
            //state=[...action.arr]
            return [...state]
        }
        default:
            return [...state]
    }
}

const reducers=combineReducers({reducerFrom})

const store=createStore(reducers,applyMiddleware(thunk))

export default store;