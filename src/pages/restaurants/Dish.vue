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
        fetchDish(){
            axios
            .get(this.backendUrl + '/api/dishes/')
            .then((resp) => {
                    this.restaurant = resp.data.restaurant;
                    this.dishes = resp.data.dish;
                    console.log(this.dishes);
                })
        }
    },
    mounted() {
        
    }       
}
</script>


<template>
    <div class="container">
        <h2>Dettagli {{ $route.params.id }}</h2>
      <div class="" v-for="rest in restaurant">
        <h2 class="margin-auto text-orange mt-5">{{ rest.name }}</h2>
        <h4 class="margin-auto text-orange">{{ rest.description }}</h4>
        <!-- <h3 class="margin-auto">{{rest.vat}}</h3> -->
      </div>
      <div class="row justify-content-center g-5 m-5">
          <div class="col-sm col-md-6 col-lg-4 col-xl-4" v-for="dish in dishes"  :key="dish.id">
            <div class="card bg-orange " v-if="dish.visible">
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