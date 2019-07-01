//此文件用来储存试题列表的

const ExamListReducer=(state=[],action)=>{
    switch (action.type) {
        case "EXAM_LIST":{
            state=JSON.parse(JSON.stringify(action.data))
            return [...state]
        }  
    
        default:
            return [...state]
    }
}   

export default ExamListReducer