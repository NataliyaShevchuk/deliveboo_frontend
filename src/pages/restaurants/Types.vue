<script>
import axios from "axios";

export default{
  name: 'Types',
  data(){
    return{
      backendUrl: "http://localhost:8000",
      types: {},
    };
  },
  methods: {
    fetchTypes() {
      axios.get(this.backendUrl + "/api/types")
      .then((resp) => {
        this.types = resp.data;
        
      });
    },
  },
  mounted() {
    this.fetchTypes();
  },
}
</script>


<template>
  <div class="container m-5">
    <div class="text-center p-5">
      <h3>Scegli quello che ti piace di più...</h3>
    </div>

    <div class="row  g-4">
      <div class="col" v-for="(type, key, index) in types" :key="type">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center">{{ key.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
