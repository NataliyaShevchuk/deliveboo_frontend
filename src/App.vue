<script>
import axios from "axios";
import { store } from "./store";
import TheHeader from './components/TheHeader.vue';
import TheMain from "./components/TheMain.vue";
import TheHomeTypes from "./pages/restaurants/Types.vue";
import TheFooter from "./components/TheFooter.vue";
import Categories from "./components/Categories.vue";
import AppHome from "./pages/AppHome.vue";
//import About from "./pages/About.vue";

// import {routerView} from "vue-router";
export default {
components: { TheHeader , TheMain , TheHomeTypes , TheFooter, Categories  },
  data() {
    return {
      store,

    }
  }
}
</script>

<template>
  <div>
    <!-- <TheHeader></TheHeader> -->
    <!-- <TheMain></TheMain> -->
    <!-- <Categories></Categories> -->
    <!--<About></About>-->
    <!-- <TheFooter></TheFooter> -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use 'styles/main.scss';
</style>
