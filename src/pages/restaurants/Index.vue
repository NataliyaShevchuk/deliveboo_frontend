<script>
import axios from "axios";



export default {
  name:"RestaurantIndex",
  data() {
    return {
    backendUrl : 'http://localhost:8000',
    restaurants: [],
    }
  },
  methods: {
    fetchRestaurants() {
      axios.get(this.backendUrl + "/api/restaurants")
        .then((resp) => {
          this.restaurants = resp.data;

          console.log(this.restaurants);
        });
    }
  },
  mounted(){
    this.fetchRestaurants();
  }
}
</script>

<template>
  <div>
    <div class="container mt-3 mb-5">
      <h1> Sezione ristoranti</h1>
      <div class="row justify-content-evenly m-4">
        <div class="col-6" v-for="restaurant in restaurants" :key="restaurants.id">
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4" v-if="restaurant.cover_img">
                <img :src="this.backendUrl + '/storage/' + restaurant.cover_img" class="img-fluid rounded-start h-100" alt="..." style="aspect-ratio: 2;">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ restaurant.name }}</h5>
                  <p class="card-text">{{ restaurant.description }}</p>
                  <p class="card-text">{{ restaurant.phone_number }}</p>
                  <p class="card-text">{{ restaurant.address }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
