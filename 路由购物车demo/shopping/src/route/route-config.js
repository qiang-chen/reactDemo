//路由配置文件

import Main from "@/views/main.jsx"
import Home from "@/views/home/index.jsx"
import Menu from "@/views/menu/index.jsx"
import Bus from "@/views/bus/index.jsx"
import My from "@/views/my/index.jsx"

const RouteConfig=[
    {
        path:"/main",
        component:Main,
        children:[
            {
                path:"/main/home",
                component:Home
            },{
                path:"/main/menu",
                component:Menu
            },{
                path:"/main/bus",
                component:Bus
            },{
                path:"/main/my",
                component:My
            }
        ]
    },{
        path:"/",
        redirect:"/main/home"
    }
]

export default RouteConfig;