//路由配置文件

//一级路由
import Main from "@/views/main.jsx"

import Detail from "@/views/detail/"

import Login from "@/views/login/"


//二级路由
import Watch from "@/views/watch/"
import Listen from "@/views/listen/"
import My from "@/views/my/"

//三级路由

import Animation from "@/views/watch/animation/"
import Song from "@/views/watch/song/"
import Story from "@/views/watch/story/"

import ListenSong from "@/views/listen/ListenSong/index.jsx"
import ListenStory from "@/views/listen/ListenStory/"

const RouteConfig=[
    {
        path:"/main",
        component:Main,
        children:[
            {
                path:"/main/watch",
                component:Watch,
                children:[
                    {
                        path:"/main/watch/animation",
                        component:Animation
                    },{
                        path:"/main/watch/song",
                        component:Song
                    },{
                        path:"/main/watch/story",
                        component:Story
                    },{
                        path:"/main/watch",
                        redirect:"/main/watch/song" 
                    }
                ]
            },{
                path:"/main/listen",
                component:Listen,
                children:[
                    {
                        path:"/main/listen/listensong",
                        component:ListenSong
                    },{
                        path:"/main/listen/listenstory",
                        component:ListenStory
                    },{
                        path:"/main/listen",
                        redirect:"/main/listen/listensong" 
                    }
                ]
            },{
                path:"/main/my",
                component:My
            }
        ]
    },
    {
        path:"/detail",
        component:Detail
    },
    {
        path:"/login",
        component:Login
    },
    //注意要把重定向放在最后面 否则访问了/后剩下就不访问了直接重定向了
    {
        path:"/",
        redirect: "/main/watch"
    }
]

export default RouteConfig;