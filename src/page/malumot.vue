<template >
    <header1 />
    <div class="katta">
        <div class="div  shadow-5 ">

            <RouterLink class="i" to="/"><i class="fas fa-arrow-left"> back </i></RouterLink>

            <img :src="srt" alt="" class="">

            


        </div>
        <div class="ikki shadow-5">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam provident saepe, unde vero dolorem ad soluta facere itaque distinctio pariatur. Cumque dolore odio ipsa, praesentium quis magnam cum ducimus?</p>

 

<hr>
<h5 class="hh5">Количество:</h5>
<p class="p2">В наличии 42</p>
             <div class="d1 shadow-3">
                <span @click="srt1" ref="nozim" class="cursor">-</span>
                <h2>{{ count }} </h2>
                <span type="button" @click="count++">+</span>
            </div>
            <p class="p1">Цена:</p>
            <h5 class="h5">{{ price*count }} $
                <h5 class="p3">3 472 000 сум</h5>
                <h5 class="hhh5">Чилля Базар</h5>
</h5>
        </div>







    </div>
</template>

<script setup>
 
import header1 from '../components/Header.vue'
import { RouterLink } from 'vue-router';
import axios from 'axios'
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
let router = useRoute()
let parmId = router.params.id
const isActive = ref(true)
let srt = ref('')
let price = ref('')
axios.get(`https://fakestoreapi.com/products/${parmId}`)
    .then(resp1 => {
        srt.value = resp1.data.image
        price.value = resp1.data.price
        console.log(resp1);
 
    })


const nozim = ref('')
        let span = document.querySelector('.cursor')

let srt1 = ()=>{
    console.log(nozim._rawValue);
    count.value--
   if (count.value === 0) {
    // span.classList.add('nimadir')
    nozim._rawValue.style.visibility = 'collapse';
   }
    if(count.value > 1){
    nozim._rawValue.style.visibility = 'visible';
   }
}






const count = ref(1)

</script>

<style scoped>
.nimadir {
    pointer-events: none;
}
.nimadir1 {
   pointer-events: all;
}
 .cursor{
    cursor: pointer;
 }

.ikki {
    width: 69%;
    height: 80vh;
    margin-left: 60vh;
    margin-top: -85vh;
    border-radius: 15px;
    position: relative;
}


img {
    width: 35vh;
    height: 55vh;
    margin-top: 10vh;
}

.div {
    width: 50vh;
    height: 80vh;
    text-align: center;
    margin: 5vh;
    border-radius: 15px;    
}

.d1 {
    width: 25vh;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    border: solid gray 1px transparent;
    position: absolute;
    top: 55vh;
    left: 20vh;
    border: solid grey 1.5px;
    
     
}
 

.i {
    margin-top: 25px;
    margin-left: -5vh;
    color: gray;
    position: absolute;
}

.i:hover {
    color: black;
    transition: 1s;
}

h6 {
    font-size: 13px !important;
    padding: 20px;
}

span {
    font-size: 30px !important;
}
.h5{
    position: absolute;
    top: 70vh;
    left: 20vh;  
}
.hh5{
    position: absolute;
    top: 50vh;
    left: 20vh;  
}
.p1{
    position: absolute;
    top:66vh;
    left:20vh;
    color: black;
}
.p2{
    position: absolute;
    top:57vh;
    left:50vh;
    color: rgb(139, 232, 0);
}
.p3{
    position: absolute;
    font-size: 15px;
    top: -1px;
    left:20vh;
    width: 100px;
    text-decoration: line-through;
    color: grey;
   
}
.hhh5{
    position: absolute;
    font-size: 15px;
    top: -1px;
    left:35vh;
    width: 110px;
    height: 25px;
    background-color: blueviolet;
    color: #fff;
    padding: 3px;
}
</style>

 