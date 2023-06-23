 <template>
  <div>
    <!-- <nav1/>
    <Search/>
    <carusel/> -->
    <router-view></router-view>
    <sotuv/>
  </div>
 </template>
 
 <script setup>
 import nav1 from "./components/Header.vue"
 import Search from "./components/Search.vue"
 import carusel from "./components/carusel.vue"
//  import sotuv from "./components/sotuv.vue"
 </script>
 
 <style scoped>
 
 </style>