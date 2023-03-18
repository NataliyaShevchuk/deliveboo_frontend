<script>
import axios from "axios";


export default {
  name: "Dishes",
  data() {
    return {
      backendUrl: 'http://localhost:8000',
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
  mounted() {
    this.fetchDishes();
  }
}
</script>

<template>
  <div class="mx-5">
    <h1 class="mt-2"> Sezione piatti</h1>
    <div class="row justify-content-evenly m-4">
      <div class="col-lg-6 col-md-4 col-sm-6 col-xs-12" v-for="dish in dishes" :key="dish.id">
        <div class="card dish-card mb-3">
          <div class="row g-0 d-flex justify-content-center">
            <div class="col-6" v-if="dish.cover_img">
                <img :src="this.backendUrl + '/storage/' + dish.cover_img" class="img-fluid rounded d-block w-100" alt="...">
            </div>
            <div class="col-md-12">
              <div class="card-body">
                <h5 class="card-title font-seizer">{{ dish.name }}</h5>
                <p class="card-text font-seizer">{{ dish.description }}</p>
                <p class="card-tex font-seizer">{{ dish.ingredients }}</p>
                <p class="card-text font-seizer">{{ dish.price }}&#8364;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.font-seizer {
  font-size: medium;
}





</style>
