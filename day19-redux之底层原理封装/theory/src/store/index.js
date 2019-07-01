
import Store from  "../tool/index"

let initState={
    num:1
}

export let actions= {
    addNum(text){
        return {
            type:"ADDNUM",
            text
        }
    }
}

let reducer=(state=initState,action)=>{
    switch (action.type) {
        case "ADDNUM":{
            let num=state.num+1
            
            return {...state,...{num}}
        }
        default:

            return {...state};
    }
}

//引入我们封装的flux框架 然后将reducer传入 并且将action传入

export default new Store({
    reducer,
    state:initState
})