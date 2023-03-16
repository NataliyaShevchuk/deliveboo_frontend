<script>

import axios from "axios";
export default{
    name: "AppHome", 
    data(){
        return{
            backendUrl : 'http://localhost:8000',
        }
    }
}
</script>


<template>
     <h1>Homepage</h1>
    <!-- <div class="d-flex align-items-center">
        <h1>Homepage</h1>
        <button class="btn btn-success m-3 ">
            <router-link :to='{ name: "restaurants", params: "restaurant" }' class="text-decoration-none text-white">Aggiungi un ristorante</router-link>
        </button>
        <button class="btn btn-primary m-3 ">
            <router-link :to='{ name: "dishes", params: ":id" }' class="text-decoration-none text-white">Aggiungi un piatto al tuo menu</router-link>
        </button>
        <button class="btn btn-primary m-3 ">
            <router-link :to='{ name: "register" }' class="text-decoration-none text-white">Registrati</router-link>
        </button>
        <button class="btn btn-primary m-3 ">
            <router-link :to='{ name: "Restaurants" }' class="text-decoration-none text-white">All Restaurants</router-link>
        </button>
        <button class="btn btn-primary m-3 ">
            <router-link :to='{ name: "dishes.index" }' class="text-decoration-none text-white">All Dishes</router-link>
        </button>
        <button class="btn btn-primary m-3 ">
            <router-link :to='{ name: "ContactUs" }' class="text-decoration-none text-white">All Dishes</router-link>
        </button>
    </div> -->
</template>