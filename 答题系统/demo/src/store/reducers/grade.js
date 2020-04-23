const gradeReducer=(state=0,action)=>{
    switch (action.type) {
        case "GRADE":
            state=action.num
           return state
    
        default:
            return state
    }
}

export default gradeReducer;