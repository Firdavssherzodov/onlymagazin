<template>
    <div class="kattadiv row mt-5">
        <h2 class="h2">Sotuv Bo'limi</h2>


        <div class="div1 col-5 mt-4 shadow-5 card" v-for="srt1 in srt">


            <div class="ddiv2 ">
                <img class="card-img-top" :src="srt1.image" alt="">
            </div>  
            <div class="div3">
                <!-- <i class="fa-solid fa-cart-plus fs-3" style="color: #ff0000;" ></i> -->
                   <!-- <i class="fas fa-heart" :class="{ active: isActive }" @click="isActive = true"></i> -->
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
    background-color: rgba(57, 57, 57, 0.301);
    width: 100%;
    height:100vh !important;
    margin: -120px -1px ;
    transform: translateY(0px);
    border-radius: 7px;
    display: flex;
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
    transition: 1.1s !important;
    transform: translateY(-55px);
    transform-origin:bottom top; 
}

.p1 {
    font-size: 10px;

}

.p2 {
    font-size: 10px;
    color: rgb(143, 143, 143);

}

.p3 {
    font-size: 10px;
    text-decoration: line-through;


}

 

.fa-heart {
    position: absolute;
    left: 83%;
    z-index: 2;
    margin-top: 20px;
    font-size: 25px;

}

.fa-cart-plus {
    color: rgb(25, 25, 25);
    position: absolute;
    margin-top: 375px;
    border-radius: 50%;
    z-index: 2;
    background: none
}

.ddiv2 {
    text-align: center;
}


</style>