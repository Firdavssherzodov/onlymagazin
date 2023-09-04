

<script setup>
import nav2 from '../Header.vue'
 






const getNAME = JSON.parse(localStorage.getItem('malumot'))

 

 





</script>



<template>
  <nav2 />

  <router-link to="/">
    <h3 class="pl-15 pt-10"> back</h3>
  </router-link>

  <div class="box">

    <div class="diva row" v-for="srt2 in getNAME">



      <div class="card shadow-6 col-5">

        <img class="card-img" :src="srt2.img" />

        <div class="card-body mt-4">
          <h5 class="card-title">{{ srt2.price }} $</h5>
          <p class="card-text">{{ srt2.title }}</p>


          
          <a href="#!" class="btn btn-primary ">clearance</a>

          <a href="#!" class="btn btn-danger ml-3 ">delete</a>
        </div>
      </div>

    </div>



  </div>
</template>

 

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
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
  height: auto;
  margin: 1vh;

}

.card-img {
  width: 45%;
  height: 40%;
  margin-left: 7.5vh;
  margin-top: 3vh;
}
</style>