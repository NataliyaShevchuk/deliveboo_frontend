<script>

import axios from "axios";
import Categories from "../components/Categories.vue";
import TheMain from "../components/TheMain.vue";
import TheJumbo from "../components/TheJumbo.vue";
import TheAboutUs from "../components/TheAboutUs.vue";


export default{
    components: { Categories, TheMain, TheJumbo, TheAboutUs},
    name: "AppHome", 
    data(){
        return{
            backendUrl : 'http://localhost:8000',
        }
    }
}
</script>


<template>

    <TheJumbo></TheJumbo>
    <Categories></Categories>
    <TheMain></TheMain>
    <TheAboutUs></TheAboutUs>

</template>