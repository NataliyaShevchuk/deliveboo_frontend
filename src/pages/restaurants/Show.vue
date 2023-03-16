<script>
import axios from "axios";
export default{

    name:"RestaurantShow",
    data(){
        return{
            backendUrl : 'http://localhost:8000',
           restaurant: {},
        }

        
    },
    methods: {
    fetchRestaurants() {
      axios.get(this.backendUrl + "/api/restaurants/" + this.$route.params.id)
        .then((resp) => {
          this.restaurant = resp.data;

          console.log(this.restaurant);
        });
    }
  },
}
</script>

<template>
    <div class="container text-center text-warning mt-4">
      <h1>Pagina dettagli progetto {{ $route.params.id }}</h1>
      <h2>{{ restaurant.name }}</h2>
  
      <div >
        <img :src="restaurant.cover_img" class="img-fluid" />
      </div>
  
      <p class="lead">{{ restaurant.phone_number }}</p>
    </div>
  </template>
  