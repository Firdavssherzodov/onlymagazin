<template >
    <header1 />
 <search1/>
    <div class="katta">
        <div class="div  shadow-5 ">

            <RouterLink class="i" to="/"><i class="fas fa-arrow-left   "> back </i></RouterLink>

            <img :src="srt" alt="" class="">




        </div>
        <div class="ikki shadow-5">
            <p class="fa-heart1"> <i class="fas fa-heart fs-5" :class="{ active: isActive }" @click="isActive = true"></i> В
                желания</p>
            <p class="dft d-flex fs-6" > <i class="fas fa-star text-warning fs-6"></i>  1.0 ( Оценок пока нет )
            <p class=" text-Secondary " style="padding-left:15px; font-size: 15px;"> Нет заказов</p>
            </p>


            <p class="pp1 fs-4 text-dark p-3"> {{ title }}</p>

<div class="ddd3">
    <span class="s1">Доставка:</span>
    <span class="s1">Доставка:1</span>
    <span>Продавец:</span>
    <span>1 день, бесплатно</span>
</div>

            <hr>
            <h5 class="hh5">Количество:</h5>
            <p class="p2"> В наличии 42</p>
            <div class="d1 shadow-3">
                <span @click="srt1" ref="nozim" class="cursor">-</span>
                <h2>{{ count }} </h2>
                <span type="button" @click="count++">+</span>
            </div>
            <p class="p1">Цена:</p>
            <h5 class="h5">{{ price * count }} $
                <h5 class="p3">3 472 000 сум</h5>
                <h5 class="hhh5">Чилля Базар</h5>
            </h5>
<div class="did">
<h5>От 5 160 сум/мес</h5>
<p> в рассрочку</p>
<i class="fas fa-angle-right"></i>
</div>
<div class="btns">
    <button class="btn1">Добавить в корзину</button>
    <button class="btn2">Купить в 1 клик</button>
</div>
            
        </div>







    </div>
</template>

<script setup>
import search1 from '../components/Search.vue'
import header1 from '../components/Header.vue'
import { RouterLink } from 'vue-router';
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
let router = useRoute()
let parmId = router.params.id
const isActive = ref(true)
let srt = ref('')
let price = ref('')
let title = ref('')
axios.get(`https://fakestoreapi.com/products/${parmId}`)
    .then(resp1 => {
        srt.value = resp1.data.image
        price.value = resp1.data.price
        title.value = resp1.data.title

    })


const nozim = ref('')
let span = document.querySelector('.cursor')

let srt1 = () => {
    console.log(nozim._rawValue);
    count.value--
    if (count.value === 0) {
        // span.classList.add('nimadir')
        nozim._rawValue.style.visibility = 'collapse';
    }
    if (count.value > 1) {
        nozim._rawValue.style.visibility = 'visible';
    }
}






const count = ref(1)

</script>

<style scoped>
.btn1{
    width: 40vh;
    height: 8vh;   
    background-color: #7000FF;
    color: #fff;
    padding: auto;
    border-radius: 15px;
    border: solid 1.5px #7000FF;
    margin-left: 20vh;
    margin-top: 5vh;
}
.btn2{
    width: 40vh;
    height: 8vh;
    border: solid 2px #7000FF;
    color: #7000FF;
    border-radius: 15px;
    margin-left: 2vh;
    font-size: large;
    font-weight: 500;
}


.fa-angle-right{
    padding-top: 20px;
    padding-left: 30vh;
}
.did{
    width: 70vh;
    height: 7vh;
    border-radius: 10px;
    background-color:#f5f6fa;
    margin-top: 28vh;
    display: flex;
    color: black;
    margin-left: 20vh;
    
}
.did:hover{
    background-color: rgba(128, 128, 128, 0.24);
    
} 
.did p{
    padding-top: 18px;
}
.did h5{
margin: 13px;
width: 180px;
height: 35px;
padding: 0.7vh;
border-radius: 15px;
color: black;
background-color: rgb(251, 219, 37);
}
.active {
    color: red;
    cursor: pointer;
}

.nimadir {
    pointer-events: none;
}

.nimadir1 {
    pointer-events: all;
}

.cursor {
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
    top: 43vh;
    left: 19.5vh;
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

.h5 {
    position: absolute;
    top: 56vh;
    left: 20vh;
    color: black;
    font-size: 22px;
}

.hh5 {
    position: absolute;
    top: 37vh;
    left: 20vh;
}

.p1 {
    position: absolute;
    top: 51.5vh;
    left: 20vh;
    color: black;
}

.p2 {
    position: absolute;
    top: 45vh;
    left: 50vh;
    color: #00c853;

}

.p3 {
    position: absolute;
    font-size: 15px;
    top: -1px;
    left: 20vh;
    width: 100px;
    text-decoration: line-through;
    color: grey;

}

.hhh5 {
    position: absolute;
    font-size: 15px;
    top: -1px;
    left: 35vh;
    width: 110px;
    height: 25px;
    background-color: rgba(137, 43, 226, 0.758);
    color: #fff;
    padding: 3.5px;
    padding-left: 7.5px;
    border-radius: 5px;
    
}

.pp1 {
    padding-left: 20vh !important;
}

.fa-star {
    padding-left: 18vh !important;
  
}

.fa-heart1 {
    padding-left: 120vh;
    position: absolute;
    top: 4vh;
}

.dft {
padding-left: 2vh;
padding-top: 4vh;
}
.ddd3 span{
    font-size: 14px !important;
    padding-left: 10vh;

}
.ddd3 span:hover{
    color: black;
    cursor: pointer;
}
.ddd3{
    width: 50vh;
    height: 10vh; 
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  align-items: center;
  margin-left: 8vh;
}
.s1{
    padding-right:3vh !important;
}

 
















</style>

 