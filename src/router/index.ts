import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomeView.vue";
import Top from "../pages/TopView.vue";
import Playlist from "../pages/NewView.vue";
import LoginView from "../components/Login.vue";
import IndexView from "../views/IndexView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'login',
            path: '/login',
            component: LoginView
        },
        {
            name: 'index',
            path: '/index',
            component: IndexView,
            children: [
                {
                    name: 'home',
                    path: '/home',
                    component: Home
                },

                {
                    name: 'Top',
                    path: '/Top',
                    component: Top
                },

                {
                    name: 'playlist',
                    path: '/playlist',
                    component: Playlist
                }
                     
            ]
        },
        {
            path: "/",
            redirect: 'index'
        },
       
        

    ]
})

export default router;
