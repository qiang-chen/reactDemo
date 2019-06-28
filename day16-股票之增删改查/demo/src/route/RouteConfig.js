//一级路由
import Main from "../views/main";
import Add from "../views/add/"

//二级路由

import Home from "@/views/main/home/"
import Market from "@/views/main/market/"
import Optional from "@/views/main/optional/"
import Deal from "@/views/main/deal/"
import Consult from "@/views/main/consult/"
import Edit from "../views/edit";
//路由表配置文件

const RouteConfig=[
    {
        path:"/main",
        component:Main,
        children:[
            {
                path:"/main/home",
                component:Home
            },{
                path:"/main/market",
                component:Market
            },{
                path:"/main/optional",
                component:Optional
            },{
                path:"/main/deal",
                component:Deal
            },{
                path:"/main/consult",
                component:Consult
            },{
                path:"/main",
                redirect: "/main/optional"
            }
        ]
    },{
        path:"/add",
        component:Add
    },{
        path:"/edit",
        component:Edit
    },{
        path:"/",
        redirect: "/main"
    }
]

export default RouteConfig;