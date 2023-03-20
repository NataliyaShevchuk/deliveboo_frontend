<script>
import axios from "axios";


export default {
name: "Restaurants",
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
  <h1 class="text-center m-3 text-color ">Fatti ispirare dai nostri numerosi ristoranti</h1>
    <div class="col-md-12">
      <div class="row justify-content-center m-4 g-3">
        <div class="col-sm-4 col-md-4 col-lg-4" v-for="restaurant in restaurants" :key="restaurants.id">
            <div class="card mb-3 h-100">
              <div class="row g-0">
                <div class="" v-if="restaurant.cover_img">
                  <img :src="this.backendUrl + '/storage/' + restaurant.cover_img" class="cardine img-fluid rounded card-img-top" alt="...">
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">{{ restaurant.name }}</h5>
                    <p class="card-text">{{ restaurant.description }}</p>
                    <p class="card-text">{{ restaurant.phone_number }}</p>
                    <p class="card-text">{{ restaurant.address }}</p>
                    <a :href="'/restaurants/' + restaurant.id " class="text-decoration-none"><p class="card-text"><small class="text-muted">Dai un'occhiata alla nostra selezione</small></p></a> 
                    <h5 class="card-title">{{ restaurant.type_id }}</h5>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>


</template>

<style>
.text-color{
  color: #ef5117ff
}

.cardine {
  height: 250px;
  max-width: 100%;
  position: center;
  object-fit: cover;
  box-shadow: 5px 5px 30px -10px #000000;
  border:#ef5117ff solid 3px;
}
</style>
