<template>
    <div class="kattadiv row mt-5">
        <h2 class="h2">Sotuv Bo'limi</h2>


        <div class="div1 col-5 mt-4 shadow-5 card" v-for="srt1 in srt">
            <i class="fas fa-heart fs-6 ii3" :class="{ active: isActive }" @click="isActive = true"></i>

            <div class="ddiv2 "> 
                <img class="card-img-top" :src="srt1.image" alt="">
            </div>  
            <div class="div3"> 
                <div class="d1"><i class=" i1 fas fa-cart-arrow-down fs-5 "></i></div>
                  <div class="d2"> <i class="far fa-copy fs-5 i2"></i></div>
                     <div class="d3"><i class="fas fa-heart fs-5 i3" :class="{ active: isActive }" @click="isActive = true"></i> </div>
            </div>
         
            <p class="p3 card-title mt-3 text-center fs-7">{{ srt1.price }}$</p>
            <h6 class="p4 card-title text-center fs-5"> {{ srt1.price }}$</h6>

         
       
            
 

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
.ii3{
    position: absolute;
    margin-top: 10px;
    margin-left: 70%;
    display: none;
}

.active {
    color: red;
}
.div3{
    opacity: 0;
    background-color: rgba(57, 57, 57, 0.301);
    width: 100%;
    height:100vh !important;
    margin: -120px -1px ;
    transform: translateY(0px);
    border-radius: 7px;
    display: flex;
    justify-content:space-evenly;
    padding-top: 25vh;
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
    width: 25vh;
    height: 40vh;
    transition: 0.5s;
    margin: 4vh;
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
.v1{
    width: 100%;
    height: 30vh !important;
    border: solid red;
    margin-bottom: 2vh  ;
    display: flex;
    justify-content: space-around;
}
 .btn{
    font-size: 10px;
    width: 10vh;
    height: 4vh;
 }

.div1:hover .div3{
    opacity: 10;
    transition: 1.2s !important;
    transform: translateY(-55px) !important;
    transform-origin:bottom top; 
}

.p3 {
    font-size: 10px;
    text-decoration: line-through; 
    color: black;
}
.p4{
    color: black;
}
 .ddiv2 {
    text-align: center;
} 
.d1{
    width: 5vh;
    height: 4.5vh;
    padding: 1vh;
   
    border-radius: 50%;
}
.d2{
    width: 5vh;
    height: 4.5vh;
    padding: 1vh;
    border-radius: 50%;
}
.d3{
    width: 5vh;
    height: 4.5vh;
    padding: 1vh;
    border-radius: 50%;
}
.d1:hover{
transform: rotate(360deg);
transition: 1.5s;
background: rgb(4, 255, 71);
}
.d2:hover{
transform: rotate(360deg);
transition: 1.5s;
background: rgb(4, 255, 71);
}
.d3:hover{
transform: rotate(360deg);
transition: 1.5s;
background: rgb(4, 255, 71);
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
    .div1 img {
    width: 50px;
    height: 70px;
    border-radius: 5px;
    position: relative;
    transition: 0.5s;
    margin: 20px;
}
    .div3{
        width: 100%;
        height: 10vh;

    }
    .div1:hover .div3{
  opacity: 10;
    transition: 0.8s !important;
    transform: translateY(-35px) !important;
    transform-origin:bottom top; 
    transform: skewY(20deg);
}
 .p3{ 
 
    font-size: 10px !important;
    padding-top: -20px;
 }
 .p4{
    font-size: 15px !important;
 padding-top: -20px;
 }
 .d1{
    display: none;
}
.d2{
    display: none;
}
.d3{
    display: none;
}
.div3{
    display: none;
}
 .ii3{
    display: block;
 }
 
 
 
 
}
</style>