<!-- <script>
import axios from "axios";

export default{
    name: "Show",
    data() {
    return {
        backendUrl: "http://localhost:8000",
        restaurant: {},
    };
},
mounted() {
    axios
        .get(this.backendUrl + "/api/restaurants/" + this.$route.params.id)

        .then((resp) => {
        this.restaurant = resp.data;
        })
        .catch((er) => {
        // in caso di errore non ha senso che l'utente rimanga qui
        // faccio un redirect su posts.index
        this.$router.push({ name: "Restaurants" });
        });
    },
};
</script>

<template>
  <div class="container">
    <h1>Pagina dettagli post {{ $route.params.id }}</h1>
    <h2>{{ restaurant.name}}</h2>

    <div v-if="restaurant.cover_img">
      <img
        :src="backendUrl + '/storage/' + restaurant.cover_img"
        alt=""
        class="img-fluid"
      />
    </div>

    <p class="lead">{{ restaurant.address }}</p>
  </div>
</template> -->


<script>
import axios from "axios";

export default {
name: "RestaurantShow",
  data() {
    return {
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
  mounted(){
    this.fetchRestaurants();
  }
}
</script>

<template>
  <div class="container">
    <h1>Pagina dettagli post {{ $route.params.id }}</h1>
    <h2>{{ restaurant.name}}</h2>

    <div v-if="restaurant.cover_img">
      <img
        :src="backendUrl + '/storage/' + restaurant.cover_img"
        alt=""
        class="img-fluid"
      />
    </div>

    <p class="lead">{{ restaurant.address }}</p>
  </div>
</template>