//创建一个路由器 , 并暴露出去
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Top from "../pages/Top.vue";
import Playlist from "../pages/Playlist.vue";

//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
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
})

export default router