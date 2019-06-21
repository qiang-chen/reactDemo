//用户名管理reducer

const userReducer=(state="张三",action)=>{
    switch (action.type) {
        case "ADD_USER":{
            state=action.user?action.user:{};
            return {...state}
        }
        default:
            return {...state};
    }
}

export default userReducer;