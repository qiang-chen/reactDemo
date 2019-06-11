import React, { Component } from 'react'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"玉麟",
            age:"18",
            arrList:["嘻嘻","嘿嘿","哈哈","啦啦"],
            flag:true
          }
    }
    clickList(item){
        alert(item)
      }
    render() {
        let {flag} =this.state;
        return (
            <div>

            <div>
                {this.state.name}
            </div>
            <div>
                {this.state.age}
            </div>
            <ul>
                {this.state.arrList.map(item => {
                    return <li onClick={this.clickList.bind(this, item)}>{item}</li>
                })}
            </ul>

            <button>{flag ? "老虎" : "狮子"}</button><br />
            {
                flag ? <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1560069200&di=e8d66a0ca27d39e9f1d76093cb8d840e&src=http://pic178.nipic.com/file/20180822/27447772_203443699000_2.jpg" alt="" />
                    : <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560674066&di=98e526b94dc133762ba2ed1c68c74d79&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F23%2F20120523205235_KTHKd.thumb.700_0.jpeg" art="" />
            }

        </div>
        )
    }
}


