import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Shows from "../views/Shows/Shows.vue";
import Menu from "../views/Menu/Menu.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/shows",
        name: "Shows",
        component: Shows,
    },
    {
        path: "/menu",
        name: "Menu",
        component: Menu,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;