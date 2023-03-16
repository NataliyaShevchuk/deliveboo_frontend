<script>
import axios from "axios";
export default{
    data(){
        return{
            backendUrl : 'http://localhost:8000',
            restaurant:{}
        }
    },
    methods(){

    },
    mounted(){
            axios.get(this.backendUrl + "api/restaurants/" + this.$route.params.id)
            .then((resp) =>{
                this.restaurant = resp.data;
            })
    }
}
</script>


<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
    </div>
</template>