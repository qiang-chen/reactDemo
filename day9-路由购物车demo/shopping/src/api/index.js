//网络接口封装文件

//获取列表页面商品数据
export function getList(){
    return fetch("/api/list").then(res=>res.json())
}

//向后台发送用户的购买列表数据

export function addBuyList(data){
    return fetch("/api/buyList",{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res=>res.json())
}

//向后台发送请求获取购买列表的 在购物车页面中

export function getBuyList(){
    return fetch("/api/getBuyList").then(res=>res.json())
}