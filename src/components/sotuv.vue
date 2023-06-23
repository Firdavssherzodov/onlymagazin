<template>
    <div class="kattadiv row ">
        <h2 class="h2">Sotuv Bo'limi</h2>


        <div class="div1 col-3 mt-4 shadow-5" v-for="srt1 in srt">

            <i class="far fa-heart"></i>
            <div class="ddiv2">
                <img :src="srt1.image" alt="">
            </div>
            <p class="p1">{{ srt1.title }}</p>
            <p class="p2 "> <i class="i1 fas fa-star"></i> 4.5 (1255 marta)</p>
            <!-- <span> <i class=" fas fa-cart-plus"></i> </span> -->
            <p class="p3">{{ srt1.price }}</p>
            <h6 class="p4"> {{ srt1.price }}</h6>
           
        </div>

    </div>
    
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

let srt = ref([])
axios.get('https://fakestoreapi.com/products')
    .then(resp => {
        resp.data.forEach(element => {
            srt.value.push(element)
            console.log(element);
        });

    })

</script>

<style scoped>
.kattadiv {
    width: 100%;
    height: 80em;
    margin-top: 2%;
    margin: auto !important;
}

.h2 {
    padding: 30px;
    color: black;
    font-family: 'Ubuntu', sans-serif;
}

.div1 {
    width: 40vh;
    height: 65vh;
    transition: 0.5s;
    margin: 5vh;
    border-radius: 10px;
}

.div1 img {
    width: 200px;
    height: 250px;
    border-radius: 5px;
    position: relative;
    top: 10px;
    /* left: 20px; */
    transition: 0.5s;
}

.div1 img:hover {
    transform: scale(1.02);
    
}

.p1 {
    font-size: 12px;
    padding: 10px;
    margin-top: 5px;

}

.p2 {
    font-size: 12px;
    padding: 10px;
    color: grey;
    margin-top: -30px;

}

.p3 {
    font-size: 12px;
    padding: 10px;
    text-decoration: line-through;
    position: relative;
    top: 10px;

}

.p4 {
    font-size: 15px;
    padding: 10px;
    margin-top: -24px;
}

.i1 {
    color: orange;
}

.fa-heart {
    position: absolute;
    left: 23%;
    z-index: 2;
    margin-top: 20px;
    font-size: 20px;
    color: rgb(103, 103, 103);
}

.fa-heart:hover {
    color: black;
}

.fa-heart::after {
    
}

.fa-cart-plus {
    color: rgb(25, 25, 25);
    position: absolute;
    left: 48vh;
    margin-top: 28px;
    font-size: 24px;
    border-radius: 50%;

}

.fa-cart-plus:hover {
    transform: scale(1.02);
    color: black;
}

.ddiv2 {
    text-align: center;
}</style>