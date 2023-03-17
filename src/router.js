import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import Index from './pages/restaurants/Index.vue';
import Show from './pages/restaurants/Show.vue';
// import DishCheck from './pages/admin/DishCheck.vue';
// import RestaurantCheck from './pages/admin/RestaurantCheck.vue';
// import UserRegistration from './pages/admin/UserRegistration.vue';
import Dishes from './components/Dishes.vue';
import ContactUs from './pages/ContactUs.vue';
import Types from './pages/restaurants/Types.vue';
import Cart from './pages/Cart.vue';

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
            path: '/restaurants/restaurant',
            name: 'RestaurantShow',
            component: Show
        },
        {
            path: '/types',
            name: 'Types',
            component: Types
        },
        {
            path: '/dishes',
            name: 'Dishes',
            component: Dishes
        },
        {
            path: '/',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },

    ]
});
export { router };