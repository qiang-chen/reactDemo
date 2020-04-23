import {createStore,combineReducers,applyMiddleware} from "redux"

import thunk from "redux-thunk";

import {createLogger} from "redux-logger"

const ClassReducer=(state=[],action)=>{
    switch (action.type) {
        case "CLASS":{
            
            state.push(action.everyClass)
           let newState=JSON.parse(JSON.stringify(state))
            return [...newState]
        }
        case "STUDENT":{
            //console.log(action.everyStudent,"----")
            let index=state.findIndex(item=>item.id*1===action.everyStudent.classId*1)
            //console.log(index)
            if(index!==-1){
                state[index].studentList.push(action.everyStudent)
            }
            
            let addState=JSON.parse(JSON.stringify(state))
            return [...addState] 
        }
        case "REMOVE":{
            let index=state.findIndex(item=>item.id*1===action.everyStudent.classId*1)
            let ind=state[index].studentList.findIndex(item=>item.id*1===action.everyStudent.id*1);
            state[index].studentList.splice(ind,1)
            let removeState=JSON.parse(JSON.stringify(state))
            return [...removeState] 
        }
        case "EDIT":{
            let index=state.findIndex(item=>item.id*1===action.everyStudent.classId*1)
            let ind=state[index].studentList.findIndex(item=>item.id*1===action.everyStudent.id*1);
            state[index].studentList.splice(ind,1,action.everyStudent)
            let EditState=JSON.parse(JSON.stringify(state))
            return [...EditState] 
        }
        default:
            return [...state]
    }
}

const reducers=combineReducers({ClassReducer});
const logger=createLogger()

const store=createStore(reducers,applyMiddleware(thunk,logger))

export default store;