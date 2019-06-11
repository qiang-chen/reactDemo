import React from 'react';
import './App.css';
import Mock from 'mockjs'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state=
      Mock.mock({
        "list|5":[
          {
            img:Mock.Random.image("200x125"),
            title:"@ctitle",
            price:'@integer(100,500)'
          }
        ],
        title:"互联网数据库",
        arr:["真题演练","学习中心","考试练习","我的账号"]
      })
    //console.log(this.state.list)
  }
  imgClick(img){
    alert(img)
  }
  titleClick(title){
    alert(title)
  }
  priceClick(price,index){
    let newArr=this.state.list;
    newArr[index].price+=100;
    //console.log(newArr[index])
    this.setState({
      list:[...newArr]
    })
    //console.log(this.state.list[index])
    //alert(price)
  }
  render(){
    return (
      <div className="container">
        <header>
          <div className="title">
          {this.state.title}
          </div>
            
            <div className="nav">
            <span>热门版型</span>
            <span>相关课程</span>
          </div>
        </header>
        <main>
          {this.state.list.map((item,index)=>{
            return <div className="item" key={index}>
                      <div className="left">
                        <img src={item.img} alt="" onClick={this.imgClick.bind(this,item.img)}/>
                      </div>
                      <div className="right">
                        <h4 onClick={this.titleClick.bind(this,item.title)}>{item.title}</h4>
                        <p onClick={this.priceClick.bind(this,item.price,index)}>￥{item.price}</p>
                      </div>
                  </div>
          })}
        </main>
        <footer>
          {this.state.arr.map(item=>{
            return <span key={item}>{item}</span>
          })}
          
        </footer>
      </div>
    )
  }
}

export default App;
