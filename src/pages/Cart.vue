<script>
import axios from "axios";



export default {
  name: "Cart",
  data() {
    return {
      backendUrl: 'http://localhost:8000',
      dishes: [],
      dishesList: []
    }
  },
  methods: {
    fetchDishesCart() {
      axios.get(this.backendUrl + "/api/dishes")
        .then((resp) => {
          this.dishesList = resp.data;

          console.log(this.dishesList);
        });
    },
    addDishToCart(dish) {
      this.dishes.push(dish);
    },
    removeDishToCart(index) {
      this.dishes.splice(index, 1);
    }
  },
  mounted() {
    this.fetchDishesCart();
  }
}
</script>

<template>
  <div>
    <h2>Carrello</h2>
    <ul>
      <li v-for="(dish, index) in dishes" :key="index">
        {{ dish.name }} - {{ dish.price }}
        <button @click="removeDishToCart(index)">Rimuovi</button>
      </li>
    </ul>
    <h2>Prodotti disponibili</h2>
    <ul>
      <li v-for="(dish, index) in dishesList" :key="index">
        {{ dish.name }} - {{ dish.price }} <button @click=" addDishToCart(dish)">Aggiungi al carrello</button>
      </li>
    </ul>
  </div>

</template>



<style></style>
