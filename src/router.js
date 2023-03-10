import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import Index from './pages/restaurants/Index.vue';
import Show from './pages/restaurants/Show.vue';
import DishCheck from './pages/admin/DishCheck.vue';
import RestaurantCheck from './pages/admin/RestaurantCheck.vue';
import UserRegistration from './pages/admin/UserRegistration.vue';


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
    path: '/restaurant/:id',
    name: 'restaurant.show',
    component: Show
},
{
    path: '/dish-check',
    name: 'dish-check',
    component: DishCheck
},
{
    path: '/restaurant-check',
    name: 'restaurant-check',
    component: RestaurantCheck
},
{
    path: '/user-registration',
    name: 'user-registration',
    component: UserRegistration
},
]
});
export { router };