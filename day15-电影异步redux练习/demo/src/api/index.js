
import {getListPort} from "./port"
export async function getList(next){
    let data=await fetch(getListPort).then(res=>res.json())
    //console.log(data)
    next({type:"ADD_LIst",data})
}

export async function playUrl(id,next){
    //console.log(id,"qingqiu")
    let data=await fetch(`http://api.cnfuyin.net/api/url/index?movid=2596&urlid=${id}&app=fytv&device=android&version=3.0.2`).then(res=>res.json())

    //console.log(data,"播放地址")
    next({type:"PLAY_LIST",data:data})
}