//获取商品列表数据

export async function getProductList(next){
    let data=await fetch("/api/list").then(res=>res.json());

       //将商品顺手存到仓库中去
    next({type:"PRODUCT_LIST",data})
}