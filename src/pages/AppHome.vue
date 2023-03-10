<script>

import axios from "axios";
export default{
    name: "AppHome", 
    data(){
        return{
            backendUrl : 'http://localhost:8001',
        }
    }
}
</script>


<template>
    <div class="d-flex align-items-center">
        <h1>Homepage</h1>
        <button class="btn btn-success m-3 ">
            <router-link :to='{ name: "restaurant-check" }' class="text-decoration-none text-white">Aggiungi un ristorante</router-link>
        </button>
        <button class="btn btn-primary m-3 ">
            <router-link :to='{ name: "dish-check" }' class="text-decoration-none text-white">Aggiungi un piatto al tuo menu</router-link>
        </button>
        <button class="btn btn-primary m-3 ">
            <router-link :to='{ name: "user-registration" }' class="text-decoration-none text-white">Registrati</router-link>
        </button>
    </div>
</template>