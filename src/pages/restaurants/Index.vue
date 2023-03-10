<script>
import axios from "axios";



export default {
  data() {
    return {
    backendUrl : 'http://localhost:8001',
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
    <div class="row justify-content-evenly m-4">
      <div class="col-6" v-for="restaurant in restaurants" :key="restaurants.id">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4" v-if="restaurant.cover_img">
              <img :src="this.backendUrl + '/storage/' + restaurant.cover_img" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ restaurant.name }}</h5>
                <p class="card-text">{{ restaurant.description }}</p>
                <p class="card-text">{{ restaurant.phone_number }}</p>
                <p class="card-text">{{ restaurant.address }}</p>
                <p class="card-text"><small class="text-muted">{{ restaurant.vat }}</small></p>
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
