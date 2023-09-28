import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import IndexProject from './pages/IndexProject.vue';
import ShowProject from './pages/ShowProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/index',
            name: 'IndexProject',
            component: IndexProject
        },
        {
            path: '/show',
            name: 'showProject',
            component: ShowProject
        },
        
    ]
});

export { router};