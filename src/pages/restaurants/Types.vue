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
  <button class="btn btn-success opacity-75 m-3">
    <a :href="'/'" class="text-decoration-none text-white">
      Indietro
    </a>
  </button>
  <div class="container mt-5">
    <div class="bg-img mb-3">
      <h3 class="text-center p-5 payoff">Scegli quello che ti piace di più...</h3>

      <div class="">
        <div class="container bg-container">
          <div class="gap-3 d-flex flex-row flex-wrap justify-content-evenly">
            <div class="" v-for="type in types">

              <button class="btn bg-light-orange">
                <label class="d-flex">
                  <input :class="{ '': this.filterType.includes(type.id) }" :key="type.id"
                    class="form-check-input " type="checkbox" @click="filterTypePush(type.id)">
                  <h5 class="px-1 mb-0">{{ type.name }}</h5>
                </label>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <h1 v-if="filterType.length != 0" class="my-5 orange">Dai un'cchiata al tuo risultato:</h1>
    <div class="row px-0">
      <div class="card mb-3 mx-2 border-orange" style="max-width: 540px;" v-for="restaurant in filteredRestaurants" :key="restaurant.id">
        <div class="row g-0 p-0 justify-content-center">
          <div class="col-md-5 p-0" >
            <img :src="this.backendUrl+ '/storage/' + restaurant.cover_img" class="img-fluid rounded" alt="..."
              v-if="restaurant.cover_img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title fs-2 orange">{{ restaurant.name }}</h5>
              <h6 class="mt-3">Categorie:</h6>
                  <span class="badge rounded-pill text-bg-success me-1" v-for="type_id in restaurant.types" :key="type_id.id"> {{ type_id.name + " "}}  </span>
                  <h6 class="mt-3">Indirizzo:</h6>
                  <p class="card-text">{{ restaurant.address }}</p>
                  <a :href="'/restaurants/' + restaurant.id "
                  class="text-decoration-none bg-light-orange p-1 w-50"><small>Menu</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.reduced {
  // max-width: 30vw;
  max-height: 20vw;
}

.bg-light-orange {
  background-color: #ef5117ff;
  color: white;
  border-radius: 8px;
  padding: 0, 5rem;
}

.bg-img {
  background-image: url('/cibo/cow-burger.jpg');
  background-position: bottom;
  background-size: cover;
  aspect-ratio: 3/1;
  color: #318411ff;
  position: relative;
  box-shadow: 15px 15px;
  border: 1px solid #ef5117ff;
}

.payoff {
  font-family: 'Bungee', cursive;
  color: white;
  text-shadow: #ef5117ff 1px 1px 2px;
}

img{
  display: block;
  width: 100%;
  overflow: auto;
  height: 100%;
  object-fit: fill;
}
</style>

