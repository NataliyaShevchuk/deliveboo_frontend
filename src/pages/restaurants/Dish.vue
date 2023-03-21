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
  <button class="btn btn-success opacity-75 m-3">
    <a :href="'/types'" class="text-decoration-none text-white">
      Indietro
    </a>
  </button>
  <div class="container">
    <!-- <div class="row ">
      <div class="col-6">
        <img :src="this.backendUrl + '/storage/' + restaurant.cover_img" class="img-fluid rounded">
      </div>

      <div class="col-6">
        <h2 class="mt-3 orange">Piatti del Ristorante {{ restaurant.name }}</h2>
        <h4 class="mb-3">Indirizzo: {{ restaurant.address }}</h4>
        <h4 class="mb-3">Chiamaci per ordinare:
          <span class="orange fs-3">{{ restaurant.phone_number }}</span>
        </h4>
      </div>
    </div> -->
  <div class="d-flex justify-content-center">

    <div class="card border-orange box-img">
      <img :src="this.backendUrl + '/storage/' + restaurant.cover_img" class="card-img opacity-75" alt="...">
      <div class="card-img-overlay ">
        <h3 class="mt-3 orange">{{ restaurant.name }}</h3>
        <h4 class="mb-3 text-white">Indirizzo:
          <span class="orange fs-3">{{ restaurant.address }}</span>
        </h4>
        <h4 class="mb-3 text-white">Chiamaci per ordinare:
          <span class="orange fs-3">{{ restaurant.phone_number }}</span>
        </h4>
      </div>
    </div>
  </div>

    <div class="row justify-content-center g-5 my-3">
      <div class="col-sm col-md-6 col-lg-4 col-xl-4" v-for="dish in dishes" :key="dish.id">
        <div class="card" v-if="dish.show">
          <div class="container-img" v-if="dish.cover_img">
            <img :src="this.backendUrl + '/storage/' + dish.cover_img"
              class="cardine img-fluid rounded card-img-top image" alt="...">
            <div class="card-text overlay">
              <strong class="text">Prezzo: {{ dish.price + "&#8364;" }}</strong>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ dish.name }}</h5>
            <h6 class="mt-4">Descrizione:</h6>
            <p class="card-text">{{ dish.description }}</p>
            <h6 class="mt-4">Ingredienti:</h6>
            <p class="card-text">{{ dish.ingredients }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-img {
  position: relative;

}
.box-img {
  width: 700px;
  height: 500px;
}

img {
  display: block;
  width: 100%;
}


.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #ef5117ff;
  border-radius: 0.375rem;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}</style>