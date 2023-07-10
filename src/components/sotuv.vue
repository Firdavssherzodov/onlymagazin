<template>
    <div class="kattadiv row mt-5">
        <h2 class="h2">Sotuv Bo'limi</h2>


        <div class="div1 col-5 mt-4 shadow-5 card" v-for="srt1 in srt">


            <div class="ddiv2 ">
                <img class="card-img-top" :src="srt1.image" alt="">
            </div>  
            <div class="div3"> 
                    <i class="fas fa-cart-arrow-down fs-5 i1"></i>
                     <i class="far  fa-copy fs-5 i2"></i>
                     <i class="fas fa-heart fs-5 i3" :class="{ active: isActive }" @click="isActive = true"></i> 
                     <!-- <p class="p2 card-title">{{ srt1.title }}</p> -->
            </div>
                 
                    <p class="p3 card-title mt-3 text-center">{{ srt1.price }}$</p>
                    <h6 class="p4 card-title text-center fs-4 text-black"> {{ srt1.price }}$</h6>
             
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
let isActive = ref(false)
let srt = ref([])
axios.get('https://fakestoreapi.com/products')
    .then(resp => {
        resp.data.forEach(element => {
            srt.value.push(element)

        });

    })



</script>


<style scoped>
.active {
    color: red;
}
.div3{
    opacity: 0;
    background-color: rgba(15, 158, 214, 0.252);
    width: 100%;
    height:100vh !important;
    margin: -120px -1px ;
    transform: translateY(0px);
    border-radius: 7px;
    display: flex;
    justify-content:space-evenly;
   padding-top: 25vh;
   color: rgba(0, 0, 0, 0.903);
}
.i1:hover {
    transform: scale(1.1);
    transition: 0.6s;
    cursor: pointer;
    color: grey;
}
.i2:hover {
    transform: scale(1.1);
    transition: 0.6s;
    cursor: pointer;
    color: grey;
}
.i3:hover {
    transform: scale(1.1);
    transition: 0.6s;
    cursor: pointer;
    color: grey;
}
.kattadiv {
    width: 100%;
    height: 80em;
}

.h2 {

    padding-left: 10vh;
    color: black;
    font-family: 'Ubuntu', sans-serif;
}

.div1 {
    width: 40vh;
    height: 40vh;
    transition: 0.5s;
    margin: 5vh;
    border-radius: 10px;
    
}

.div1 img {
    width: 100px;
    height: 140px;
    border-radius: 5px;
    position: relative;
    transition: 0.5s;
    margin: 20px;
 
}


.div1:hover .div3{
  opacity: 10;
    transition: 0.8s !important;
    transform: translateY(-55px) !important;
    transform-origin:bottom top; 
}

.p1 {
    font-size: 10px;
align-items: center;
}

.p2 {
    font-size: 10px;
    color: rgb(7, 7, 7);

}

.p3 {
    font-size: 10px;
    text-decoration: line-through;
 

}
.ddiv2 {
    text-align: center;

}

@media screen and (max-width: 400px) {
    .kattadiv{
        width: 100%;
        height: auto;
        margin: 10px;
    }
  
    .div1{
width: 20vh;
height: 26vh;
    }
    .div3{
        width: 100%;
        height: 10vh !important;
    }
    .div1:hover .div3{
  opacity: 10;
    transition: 0.8s !important;
    transform: translateY(-35px) !important;
    transform-origin:bottom top; 
}
    
    .div1 img{
width: 50px;
height: 70px;
    }

.i1{
    font-size:10px !important;
}
.i2{
    font-size:10px !important;
}
.i3{
    font-size:10px !important;
}




}

</style>