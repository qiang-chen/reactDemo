
//获取考试列表

export async function getExamList(next){
    let data=await fetch("/api/list").then(res=>res.json());
    //console.log(data)
    next({type:"EXAM_LIST",data:data.qTypeQs})
}