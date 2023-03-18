<script>
import axios from "axios";

export default {
  name: 'Types',
  data() {
    return {
      backendUrl: "http://localhost:8000",
      types: [],
      restaurants: [],
      filteredRestaurants: [],
      filters: [],
      filterType: []
    };
  },
  methods: {
    fetchTypes() {
      axios.get(this.backendUrl + "/api/types")
        .then((resp) => {
          this.types = resp.data.response;
        });
    },
    onFiltered($type) {
      axios.get("http://127.0.0.1:8000/api/restaurants/types/" + $type)
        .then((resp) => {
          this.filteredRestaurants.push(resp.data.restaurants);
        });
    },
    filterTypePush($type) {
      if (this.filterType.length === this.types.length) {
        this.filterType = [];
        this.filteredRestaurants = [];

      }

      if (!this.filterType.includes($type)) {
        this.filterType.push($type);
        this.filteredRestaurants = [];
        this.filterType.forEach(element => {

          axios.get("http://127.0.0.1:8000/api/restaurants/types/" + element)
            .then((resp) => {
              resp.data.restaurants.forEach(restaurant => {
                if (this.filteredRestaurants.some(r => r.id === restaurant.id)) {
                  return;
                } else {
                  this.filteredRestaurants.push(restaurant);
                }
              });
            });
        });
      } else {
        this.filterType.splice(this.filterType.indexOf($type), 1);
        this.filteredRestaurants = [];
        this.filterType.forEach(element => {

          axios.get("http://127.0.0.1:8000/api/restaurants/types/" + element)
            .then((resp) => {
              resp.data.restaurants.forEach(restaurant => {
                if (this.filteredRestaurants.some(r => r.id === restaurant.id)) {
                  return;

                } else {
                  this.filteredRestaurants.push(restaurant);
                }
              });
            });
        });
      }
    },
    getAllRestaurants() {
      axios.get("http://127.0.0.1:8000/api/restaurants").then((resp) => {
        this.filterType = [];
        this.filteredRestaurants = [];
        this.filteredRestaurants = resp.data.restaurants;
        if (this.filterType.length === this.types.length) {

        } else {

          this.types.forEach((type) => {
            this.filterType.push(type.id);
          });
        }
      });
    },
    search() {
      setTimeout(() => {
        if (this.filters.length === 0) {
          this.filteredRestaurants = this.restaurants;
        } else {
          this.filteredRestaurants = [];
          this.restaurants.forEach((restaurant) => {
            this.filters.forEach((filtro) => {
              restaurant.types.forEach((type_id) => {
                if (
                  filtro == type_id.pivot.type_id &&
                  !this.filteredRestaurants.some(
                    (filteredRestaurant) =>
                      filteredRestaurant.id === restaurant.id
                  )
                ) {
                  this.filteredRestaurants.push(restaurant);
                }
              });
            });
          });
        }
      }, 100);
    }
  },
  mounted() {
    this.fetchTypes();
  }
}


</script>


<template>
  <div class="container m-5">
    <div class="text-center p-5">
      <h3>Scegli quello che ti piace di più...</h3>
    </div>
    <div class="">
      <div class="container bg-container">
        <div class="gap-4">
          <div class="list-group-item" v-for="type in types">
          
            <label class="d-flex">
              <input :class="{ '' : this.filterType.includes(type.id) }" :key="type.id"
              class="form-check-input" type="checkbox" @click="filterTypePush(type.id)">
              <h5 class="mx-2">{{ type.name }}</h5>
            </label>

          </div>
        </div>

      </div>
    </div>

    <h1 v-if="filterType.length != 0" class="mb-5">Scegli il Ristorante:</h1>
    <div class="container-fluid d-flex justify-content-center">
      <div class="row g-4">
        <div class="col-5 m-3" v-for="restaurant in filteredRestaurants" :key="restaurant.id">
          <div class="card h-100" style="">
            <img v-if="restaurant.cover_img" class="card-img-top"
              :src="this.backendUrl+ '/storage/' + restaurant.cover_img" alt=""/>
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.name }}</h5>
              <h6 class="mt-5">Categorie:</h6>
              <div class="card-title" v-for="type_id in restaurant.types" :key="type_id.id">{{ type_id.name }}</div>
              <h6 class="mt-5">Indirizzo:</h6>
              <p class="card-text">{{ restaurant.address }}</p>
              <a :href="'/dishes/' + restaurant.id" class="btn btn-light mt-4">Menù</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

