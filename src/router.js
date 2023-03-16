import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import RestaurantsIndex from './pages/restaurants/Index.vue';
import RestaurantShow from './pages/restaurants/Show.vue';
import DishCheck from './pages/admin/DishCheck.vue';
import RestaurantCheck from './pages/admin/RestaurantCheck.vue';
import UserRegistration from './pages/admin/UserRegistration.vue';
import DishesIndex from './components/Dishes.vue';
import ContactUs from './pages/ContactUs.vue';
import Cart from './pages/Cart.vue';

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
component: RestaurantsIndex
},
{
    path: '/restaurants/restaurant',
    name: 'restaurant.show',
    component: RestaurantShow
},
{
    path: '/dishes',
    name: 'dishes.index',
    component: DishesIndex
},
 {
//     path: '/dishes',
//     name: 'dishes',
//     component: DishCheck
// },
// {
//     path: '/restaurants',
//     name: 'restaurants',
//     component: RestaurantCheck
// },
// {
   path: '/register',
     name: 'register',
//     component: UserRegistration
 },
{
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
},

{
    path: '/Cart',
    name: 'Cart',
    component: Cart
},
]
});
export { router };