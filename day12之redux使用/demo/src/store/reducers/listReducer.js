
const ListReducer=(state=[],action)=>{
    switch (action.type) {
        case "LIST_ADD":{
            state=action.list?action.list:[]
            return [...state]
        }
            
           
    
        default:
          return [...state];
    }
}

export default ListReducer;