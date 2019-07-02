//路由表配置文件

//引入组件懒加载

import React from "react"

//一级路由
const Main=React.lazy(()=>import("@/views/main/"))

const Login=React.lazy(()=>import("@/views/login/"))
//二级路由
const Home=React.lazy(()=>import("@/views/main/home/"))

const List=React.lazy(()=>import("@/views/main/list/"))

const My=React.lazy(()=>import("@/views/main/my/"))

const RouteConfig=[
    {
        path:"/main",
        component:Main,
        children:[
            {
                path:"/main/home",
                component:Home
            },{
                path:"/main/list",
                component:List
            },{
                path:"/main/my",
                component:My
            },{
                path:"/main",
                redirect: "/main/home"
            }
        ]
    },{
        path:"/login",
        component:Login
    },{
        path:"/",
        redirect: "/main"
    }
]

export default RouteConfig;