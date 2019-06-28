//购买列表储存地

const buyListReducer=(state=[],action)=>{
    switch (action.type) {
        case "BUY_LIST":{
            state=JSON.parse(JSON.stringify(action.data));
            return [...state]
        }
        default:
            return [...state]
    }
}

export default buyListReducer