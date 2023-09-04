
<template>
  <nav2 />

  <router-link to="/">
    <h3 class="pl-15 pt-10"> back</h3>
  </router-link>
  <div class="box row" >
    <div class="diva row " v-for="data in localData">
      <div class="card shadow-6 col-5">
        <img class="card-img" :src="data.img" />
        <div class="card-body mt-4">
          <h5 class="card-title">{{ data.price }} $</h5>
          <p class="card-text">{{ data.title }}</p>
          <a href="#!" class="btn btn-primary ">clearance</a>
          <a href="#!" class="btn btn-danger ml-3 " @click="delete">delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import nav2 from '../Header.vue'
// import { ref } from "vue";

const localData =  JSON.parse(localStorage.product)
console.log("storage",localData)


 
</script>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap wrap-reverse;
  
}

.card::selection {
  display: none;
}

.card {
  margin-left: 20vh !important;
  width: 30vh;
  height: 40vh;

}

.diva {
  width: 20%;
  height: 100%;
   

}

.card-img {
  width: 45%;
  height: 40%;
  margin-left: 7.5vh;
  margin-top: 3vh;
}
</style>