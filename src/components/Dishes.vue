<script>
import axios from "axios";


export default {
    name: "DishesIndex",
    data() {
    return {
    backendUrl : 'http://localhost:8000',
    dishes: [],
    }
  },
  methods: {
    fetchDishes() {
      axios.get(this.backendUrl + "/api/dishes")
        .then((resp) => {
          this.dishes = resp.data;

          console.log(this.dishes);
        });
    }
  },
  mounted(){
    this.fetchDishes();
  }
}
</script>

<template>
  <div>
    <h1> sezione piatti</h1>
    <div class="row justify-content-evenly m-4">
      <div class="col-6" v-for="dish in dishes" :key="dish.id">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4" v-if="dish.cover_img">
              <img :src="this.backendUrl + '/storage/' + dish.cover_img" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ dish.name }}</h5>
                <p class="card-text">{{ dish.description }}</p>
                <p class="card-text">{{ dish.ingredients }}</p>
                <p class="card-text">{{ dish.price }}</p>
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
