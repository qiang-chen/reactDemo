//发布订阅的封装
class Watcher{
    constructor(){
        this.arr={}
    }
    promulgator(event,msg){
        //发布者事件
        //发布者发布函数用来传参
        this.arr[event]&&this.arr[event].forEach(cb=>{
            cb(msg)
        })
    }
    subscriber(event,cb){
        //订阅者
        //订阅者将函数储存起来
        if(this.arr[event]){
            //存在
            this.arr[event].push(cb)
        }else{
            this.arr[event]=[cb]
        }
    }
} 


export default new Watcher()