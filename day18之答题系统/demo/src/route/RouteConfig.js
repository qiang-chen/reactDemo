import React from "react"

const Main=React.lazy(()=>import("@/views/main/"));

const Detail=React.lazy(()=>import("@/views/detail/"))

const Result=React.lazy(()=>import("@/views/result/"))

const Exam=React.lazy(()=>import("@/views/main/exam/"))

const Home=React.lazy(()=>import("@/views/main/home/"))

const RouteConfig=[
    {
        path:"/main",
        component:Main,
        children:[
            {
                path:"/main/home",
                component:Home
            },
            {
                path:"/main/exam/:id",
                component:Exam
            },{
                path:"/main",
                redirect:"/main/home"
            }
        ]
    },{
        path:"/detail",
        component:Detail
    },{
        path:"/result",
        component:Result
    },{
        path:"/",
        redirect: "/main"
    }
]

export default RouteConfig;