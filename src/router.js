import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import Index from './pages/restaurants/Index.vue';
import ContactUs from './pages/ContactUs.vue';
import Types from './pages/restaurants/Types.vue';
import Dish from './pages/restaurants/Dish.vue';
// import Cart from './pages/Cart.vue';

const router = createRouter({
history: createWebHistory(),
routes:
    [
        {
        path: '/',
        name: 'home',
        component: AppHome
        },
        {
        path: '/restaurants',
        name: 'Restaurants',
        component: Index
        },
        {
            path: '/types',
            name: 'Types',
            component: Types
        },
        {
            path: '/restaurants/:id',
            name: 'Dish',
            component: Dish
        },
        {
            path: '/contacts',
            name: 'ContactUs',
            component: ContactUs
        },
        // {
        //     path: '/cart',
        //     name: 'Cart',
        //     component: Cart
        // },
    ]
});
export { router };