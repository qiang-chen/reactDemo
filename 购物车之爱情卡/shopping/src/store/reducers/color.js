const colorReducer=(state={},action)=>{
    switch (action.type) {
        case "COLOR":{
            state={...action.color}
            return {...state}
        }
        default:
            return {...state}
    }
}
export default colorReducer