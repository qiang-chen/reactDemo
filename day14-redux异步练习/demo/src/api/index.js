//网络请求文件

export function getList(){
    return fetch("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then(res=>res.json())
}