import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Sommercamp from './views/Sommercamp.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/sommercamp',
            name: 'sommercamp',
            component: Sommercamp
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
});

export default router;