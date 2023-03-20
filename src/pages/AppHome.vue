<script>

import axios from "axios";
import Categories from "../components/Categories.vue";
import TheMain from "../components/TheMain.vue";
import TheJumbo from "../components/TheJumbo.vue";


export default{
    components: { Categories, TheMain, TheJumbo},
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

</template>