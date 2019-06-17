class Watcher{
    constructor(){
        this.arr={}
    }
    promulgator(event,msg){
        //发布者
        //作用是触发函数的
        this.arr[event]&&this.arr[event].forEach(cb=>{
            cb(msg)
        })
    }
    subscriber(event,cb){
        //订阅者 将订阅者的函数暂时储存起来然后在发布的时候调用
        if(this.arr[event]){
            this.arr[event].push(cb)
        }else{
            this.arr[event]=[cb]
        }
    }

}

export default new Watcher()