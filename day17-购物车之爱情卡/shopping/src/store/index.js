import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from "redux-thunk";
import {createLogger} from "redux-logger"


//引入商品列表reducer
import productListReducer from "./reducers/productList";
//引入购买列表
import buyListReducer from "./reducers/buyList"

import colorReducer from "./reducers/color"

const reducers=combineReducers({productListReducer,buyListReducer,colorReducer});



//挂载日志

const logger=createLogger()

const store=createStore(reducers,applyMiddleware(thunk,logger))

export default store;