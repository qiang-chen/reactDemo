//储存所有的单选

const ChooseReducer=(state=[],action)=>{
    switch (action.type) {
        case "CHOOSE":{
            state=JSON.parse(JSON.stringify(action.data))
            return [...state]
        }
        default:
            return [...state]
    }
}

export default ChooseReducer