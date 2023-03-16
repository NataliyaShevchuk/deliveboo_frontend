<script>
import axios from "axios";
import { store } from "./store";
import TheHeader from './components/TheHeader.vue';
import TheMain from "./components/TheMain.vue";
import TheHomeTypes from "./components/TheHomeTypes.vue";
import TheFooter from "./components/TheFooter.vue";
import TheAboutUs from "./components/TheAboutUs.vue";
//import About from "./pages/About.vue";

// import {routerView} from "vue-router";
export default {
components: { TheHeader , TheMain , TheHomeTypes , TheFooter , TheAboutUs},
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
    <router-view></router-view>
    <!-- <TheMain></TheMain>
 
    <TheHomeTypes></TheHomeTypes>
    <TheAboutUs></TheAboutUs> -->
    <TheFooter></TheFooter>
 
  </div>
</template>

<style lang="scss">
@use 'styles/main.scss';
</style>
