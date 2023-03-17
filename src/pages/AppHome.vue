<script>

import axios from "axios";
import Categories from "../components/Categories.vue";
import TheMain from "../components/TheMain.vue";


export default{
    components: { Categories, TheMain },
    name: "AppHome", 
    data(){
        return{
            backendUrl : 'http://localhost:8000',
        }
    }
}
</script>


<template>
    
    <TheMain></TheMain>
    <Categories></Categories>

</template>