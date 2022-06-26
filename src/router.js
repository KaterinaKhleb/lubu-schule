import Vue from 'vue';
import Router from 'vue-router';
import School from './views/School.vue';
import Sommercamp from './views/Sommercamp.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/school',
            name: 'school',
            component: School
        },
        {
            path: '/sommercamp',
            name: 'sommercamp',
            component: Sommercamp
        },
        {
            path: '/',
            name: 'school',
            component: School
        }
    ]
});

export default router;