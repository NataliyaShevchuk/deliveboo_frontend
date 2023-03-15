import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import Index from './pages/restaurants/Index.vue';
import Show from './pages/restaurants/Show.vue';
import DishCheck from './pages/admin/DishCheck.vue';
import RestaurantCheck from './pages/admin/RestaurantCheck.vue';
import UserRegistration from './pages/admin/UserRegistration.vue';
import Dishes from './components/Dishes.vue';
import ContactUs from './pages/ContactUs.vue';
import TheHomeTypes from './components/TheHomeTypes.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/restaurants',
name: 'restaurants.index',
component: Index
},
{
    path: '/restaurants/restaurant',
    name: 'restaurant.show',
    component: Show
},
{
    path: '/dishes',
    name: 'dishes.index',
    component: Dishes
},
{
    path: '/types',
    name: 'types',
    component: TheHomeTypes
},
{
    path: '/',
    name: 'ContactUs',
    component: ContactUs
},
]
});
export { router };