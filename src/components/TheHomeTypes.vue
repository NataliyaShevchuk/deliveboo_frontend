
<script>
import axios from "axios";
export default {
  data() {
    return {
      backendUrl: "http://localhost:8000",
      types: [],
    };
  },
  methods: {
    fetchProjects() {
      axios.get(this.backendUrl + "/api/types").then((resp) => {
        this.types = resp.data;
      });
    },
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>
<template>
  <div class="container m-5">
    <div class="text-center p-5">
      <h3>Scegli quello che ti piace di più...</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="type in types" :key="type.id">
        <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ types.name }}</h5>
            <p class="card-text">Breve introduzione sul tipo di cucina</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>