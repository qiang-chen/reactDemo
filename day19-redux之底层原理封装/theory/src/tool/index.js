
let state=Symbol("state")

//因为我们不能将this上暴露出state 不然用户可以访问到 所以这里要用到Symbol



class Flux{
    constructor(opj){
        //将接受到的这个对象挂载到这个class实例上
        //Object.assign(this,opj)
        //不能用Object.assign的原因是因为state不能暴露在这个实例上
        //防止用户的修改

        this.reducer=opj.reducer;
        this[state]=opj.state

        this.arr=[]
    }
    getState(attr){
        //这里接受到的这个attr是让用户想取哪个值
        //这个方法是暴露给仓库的一个获取仓库数据的方法
        if(attr){
            
            return this.reducer(this[state],{})[attr]
        }else{
            //加三个点的作用是让用户只读不能改
            //还有一个方法 Object.getOwnPropertyDescriptor(this.state)
            //里面某个属性设置成false就不能改了
           
            return {...this.reducer(this[state],{})}
        }
    }
    dispatch(actionType){
        //这里接受到的是一个对象
        //console.log(this.state,"封装的方法")
        //将最新的state获取出来保存起来  然后下次再调用getState方法的话就不会
        //在读取默认值了
        this[state]=this.reducer(this[state],actionType)

        //当用户修改值得时候我们每次发布一下
        this.promulgator()
        //这个发布订阅的作用是为了防止数据改变用户得不到 也就是将视图和用户连接起来
    }
    subscriber(cb){
        //订阅者   将订阅函数储存在事件队列中
        this.arr.push(cb)
    }
    promulgator(){
        //发布者 触发订阅者中的函数
        this.arr.forEach(cb=>{
            cb()
        })
    }
}

export default Flux;