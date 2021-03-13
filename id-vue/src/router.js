import Vue from "vue"
import VueRouter from "vue-router"

import BlendyMode from "@/components/BlendyMode";
import Parallex from "@/components/Parallex";
// import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter)

const Home = { template : "<div>Home</div>"}

const router = new VueRouter({
    mode:"history",
    routes:[
        {path: "/blendMode", component:BlendyMode },
        {path: "/parallex", component:Parallex },
        {path:"/", component:Home}
    ]
})

export default router;