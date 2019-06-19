//第三方库公用方法 先来个读写文件吧

const fs=require("fs")

module.exports={
    fileWrite(pathname,data){
        //文件的写入
        return new Promise((resolve,reject)=>{
            fs.writeFile(pathname,data,(err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve({code:1})
                }
            })
        })
    },
    fileRead(pathname){
        //读文件
        return new Promise((resolve,reject)=>{
            fs.readFile(pathname,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    }
}