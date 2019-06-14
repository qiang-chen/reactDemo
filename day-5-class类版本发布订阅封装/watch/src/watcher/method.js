class Watch{
    constructor(){
        this.callback=null;
    }
    promulgator(msg){
        //发布者函数
        //发布者需要接受一个参数用来传给订阅者
        this.callback(msg)
    }
    subscriber(cb){
        //订阅者
        //订阅者需要接受一个回调函数然后在发布者里面执行
        this.callback=cb;
    }
}


export default Watch;