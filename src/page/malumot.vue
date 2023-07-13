<template >
 
    <div class="div  shadow-5 ">
    <RouterLink class="i" to="/"><i class="fas fa-arrow-left"  >  back  </i></RouterLink> 

        <img :src="srt" alt="" class="">
 
  <h6 class="fs-6">Lorem ipsum dolor sit amet c  eveniet necessitatibus <br>
     laboriosam quas corrupti edit, iste <br> molestiae facilis blanditiis q di explicabo.</h6>

       <div class="d1 shadow-3"> 
        <button type="button" @click="count--" class="btn btn-outline-danger" data-mdb-ripple-color="dark">Dalete </button>
        <h2>-{{ count }} +</h2>
        <button type="button" @click="count++"  class="btn btn-outline-success" data-mdb-ripple-color="dark">b u y</button>
       </div>
 
    </div>
</template>

<script setup>
 
import { RouterLink } from 'vue-router';
import axios from 'axios'
 
let isActive = ref(false)
import { useRoute } from 'vue-router'
let router = useRoute()
let parmId = router.params.id

let srt = ref('')
axios.get(`https://fakestoreapi.com/products/${parmId}`)
    .then(resp1 => {
   srt.value =resp1.data.image
    


    })




    import { ref } from 'vue'
defineProps({
  msg: String,
})
const count = ref(0)

</script>

<style scoped>
 


img {
    width: 30vh;
    height: 35vh;
    margin-top: 10vh;
}

.div{
width: 80vh;
height: 80vh;
text-align: center;
margin: auto;
border-radius: 15px;
position: relative;
}
 
.d1{
    width: 50vh;
    height: 8vh; 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 15vh;
    margin-top: 10vh;
    border-radius: 15px;
}
.i{
 margin-top:30px;
 margin-left: -20vh;
 color:gray;
 position: absolute;
}
.i:hover{
    color: black;
    transition: 1s;
}
h6{
    font-size: 15px !important;
    padding: 20px;
}
</style>

 