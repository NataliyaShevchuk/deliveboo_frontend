<script>
import axios from "axios";
import { store } from "./store";
import TheHeader from './components/TheHeader.vue';
import TheMain from "./components/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";

//import About from "./pages/About.vue";

// import {routerView} from "vue-router";
export default {
components: { TheHeader , TheMain , TheFooter },
  data() {
    return {
      store,

    }
  }
}
</script>

<template>
  <div>
    <TheHeader></TheHeader>

    <router-view class="h-100"></router-view>

    <TheFooter></TheFooter>
    
  </div>
</template>

<style lang="scss">
@use 'styles/main.scss';


</style>
