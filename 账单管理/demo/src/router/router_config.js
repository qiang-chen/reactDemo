import Add from "../views/add"
import Look from "../views/look"

export const routes = [{
        path: "/add",
        component: Add
    },
    {
        path: "/look",
        component: Look
    },
    {
        path: "/",
        redirect: "/add"
    }
]