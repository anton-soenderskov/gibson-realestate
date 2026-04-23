import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/pages/Contact.vue'),
    },
    {
        path: '/listings',
        name: 'Listings',
        component: () => import('@/pages/Listings.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;