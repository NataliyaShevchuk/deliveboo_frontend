<script>
import axios from "axios";

export default {
  name: "Dish",
  data() {
    return {
      backendUrl: 'http://localhost:8000',
      dishes: [],
      restaurant: {},
    };
  },
  methods: {
    fetchRestaurantDishes() {
      axios.get(this.backendUrl + "/api/restaurants/" + this.$route.params.id)
        .then((resp) => {
          this.restaurant = resp.data.restaurant;
          this.dishes = resp.data.dishes;
          console.log(this.restaurant);
          console.log(this.dishes);
        });
    },
  },
  mounted() {
    this.fetchRestaurantDishes();
  }
}
</script>


<template>
  <div class="container">
  <h2 class="mt-3">Piatti del Ristorante "{{ restaurant.name }}"</h2>

      <h4 class="margin-auto ">Indirizzo: {{ restaurant.address }}</h4>
      <h3 class="margin-auto">N° di telefono: {{restaurant.phone_number}}</h3>

    <div class="row justify-content-center g-5 my-3">
      <div class="col-sm col-md-6 col-lg-4 col-xl-4" v-for="dish in dishes" :key="dish.id">
        <div class="card" v-if="dish.show">
          <div class="" v-if="dish.cover_img">
                  <img :src="this.backendUrl + '/storage/' + dish.cover_img" class="cardine img-fluid rounded card-img-top" alt="...">
                </div>
          <div class="card-body">
            <h5 class="card-title">{{ dish.name }}</h5>
            <h6 class="mt-4">Ingredienti:</h6>
            <p class="card-text">{{ dish.description }}</p>
            <div class="card-text mb-3">{{ dish.price + "&#8364;" }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>