import {createRouter , createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env,BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../view/IndexView.vue')
        }
    ]
})

export default router