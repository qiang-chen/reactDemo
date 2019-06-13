//网络请求封装方法

export function getLeftData(){
    return fetch("/api/left",{}).then(res=>res.json())
}

export function getRightData(id){
    return fetch("/api/right/"+id).then(res=>res.json())
}