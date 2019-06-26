import Main from "../views/main/";

import Introduce from "@/views/main/introduce/"

import Audio from "@/views/main/audio/"

import Video from "@/views/main/video/"
//路由配置文件

const RouteConfig=[
    {
        path:"/main",
        component:Main,
        children:[
            {
                path:"/main/introduce",
                component:Introduce
            },{
                path:"/main/video",
                component:Video
            },{
                path:"/main/audio",
                component:Audio
            },{
                path:"/main",
                redirect: "/main/audio"
            }
        ]
    },{
        path:"/",
        redirect: "/main"
    }
]

export default RouteConfig;