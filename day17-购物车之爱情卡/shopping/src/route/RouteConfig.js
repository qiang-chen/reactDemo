// import Main from "../views/main";
// import Show from "../views/show";
import React from "react";

let Main=React.lazy(()=>import("../views/main"))

let Show=React.lazy(()=>import("../views/show"))

//路由表配置

const RouteConfig=[
    {
        path:"/main",
        component:Main
    },{
        path:"/show/:color",
        component:Show
    },{
        path:"/",
        redirect:"/main"
    }
]

export default RouteConfig