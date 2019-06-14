class Watch{
    constructor(){
        this.arr={};
    }
    promulgator(event,...msg){
        //发布者函数
        //发布者需要接受一个参数用来传给订阅者
        this.arr[event].forEach(cb=>{
            cb(...msg)
        })
    }
    subscriber(event,cb){
        //订阅者
        //订阅者需要接受一个回调函数然后在发布者里面执行
        if(this.arr[event]){
            this.arr.push(cb)
        }else{
            this.arr[event]=[cb]
        }
        
    }
}


export default Watch;