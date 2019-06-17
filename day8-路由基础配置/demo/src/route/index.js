//import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import Home from "../views/home.jsx"

// import React from "react"

import List from "@/views/list"
import Tap1 from "../views/tap/Tap1.jsx";
import Tap2 from "../views/tap/Tap2.jsx";
import Tap3 from "../views/tap/Tap3.jsx";


// class Index extends React.Component{
//     render(){
//         return (
//             <Router>
//                 <Switch>
//                     <Route path="/" component={Home} exact />
//                     <Route path="/list" component={List}/>
//                     <Route path="/tap1" component={Tap1}/>
//                     <Route path="/tap2" component={Tap2}/>
//                     <Route path="/tap3" component={Tap3}/>
//                 </Switch>
                
//             </Router>
//         )
//     }
// }


// export default Index

const routes=[
    {
        path:"/home",
        component:Home
    },
    {
        path:"/list",
        component:List
    },
    {
        path:"/tap1",
        component:Tap1
    },
    {
        path:"/tap2",
        component:Tap2
    },
    {
        path:"/tap3",
        component:Tap3
    }
]


export default routes;