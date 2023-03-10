<script>
import axios from "axios";
import { store } from "./store";
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader },
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
  </div>
</template>

<style lang="scss">
@use 'styles/main.scss';
</style>
