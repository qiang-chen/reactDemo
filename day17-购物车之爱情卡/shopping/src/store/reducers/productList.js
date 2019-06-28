//存放商品列表数据

const productListReducer=(state=[],action)=>{
    switch (action.type) {
        case "PRODUCT_LIST":{
            state=JSON.parse(JSON.stringify(action.data))
            return [...state]
        }
        default:
            return [...state]
    }
}
export default productListReducer