<template>
    <div class="kattadiv row mt-5">
        <h2 class="h2">Sotuv Bo'limi</h2>


        <div class="div1 col-5 mt-4 shadow-5 card" v-for="srt1 in srt">


            <div class="ddiv2 ">
                <img class="card-img-top" :src="srt1.image" alt="">
                
            </div>
            <i class="fas fa-heart"></i>
            <p class="p1 card-text">{{ srt1.title }}</p>
            <p class="p2  card-title"> <i class="i1 fas fa-star"></i> 4.5 (1255 marta)</p>
         
            <p class="p3 card-text mt-3">{{ srt1.price }}$</p>
            <h6 class="p4 card-text "> {{ srt1.price }}$</h6>
            <i class="fa-solid fa-cart-plus fs-3" style="color: #626060;"></i>
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

.p1 {
    font-size: 12px;
    margin-top: 10px;
}

.p2 {
    font-size: 12px;
    padding: 10px;
    color: rgb(143, 143, 143);
    margin-top: -30px;

}

.p3 {
    font-size: 10px;
    text-decoration: line-through;


}

.p4 {
    font-size: 15px;

}

/* .fa-heart {
    position: absolute;
    left: 83%;
    z-index: 2;
    margin-top: 20px;
    font-size: 25px;
 
}
.fa-cart-plus{
    color: rgb(25, 25, 25) ;
    position: absolute  ;
    margin-top: 375px;
    border-radius: 50%;
    z-index: 2;
    background: none
}
.ddiv2 {
    text-align: center;
}

.red{
    color: red;
}

h1 {
  position: relative;
  font-size: 5rem;
} */
</style>