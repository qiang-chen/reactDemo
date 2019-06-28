import Mock from "mockjs"

let list=Mock.mock({
    "list|10":[
        {
            "title":"@ctitle",
            "id|+1":1,
            "flag":true
        }
    ]
});

export default function resultArr(str){
    //console.log(list.list.filter(item=>item.title.includes(str)),"赛选结果")
    return list.list.filter(item=>item.title.includes(str))
}