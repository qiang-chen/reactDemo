//引入发布订阅的封装 然后实例化 最终抛出
//不能多次new这个函数 否则会造成他们不是一个class实例
//此文件的作用就是保证每次发布订阅都是一个实例

import Index from "./method.js"

const Watcher=new Index();

export default Watcher;