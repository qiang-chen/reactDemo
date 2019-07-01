//通用方法的封装

//封装一个读写文件的操作用来操作数据库

const fs=require("fs");


module.exports={
    readFile(pathname){
        //读文件
        return new Promise((resolve,reject)=>{
            fs.readFile(pathname,"utf8",(err,content)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(content)
                }
            })
        })
    },
    writeFile(pathname,content){
        return new Promise((resolve,reject)=>{
            fs.writeFile(pathname,JSON.stringify(content),err=>{
                if(err){
                    reject(err)
                }else{
                    resolve({
                        code:1,
                        msg:"写入成功"
                    })
                }
            })
        })
    }
}