<template >
    <header1 />
    <div class="katta">
        <div class="div  shadow-5 ">

            <RouterLink class="i" to="/"><i class="fas fa-arrow-left"> back </i></RouterLink>

            <img :src="srt" alt="" class="">

            <h6 class="fs-6">Lorem ipsum dolor sit amet c eveniet necessitatibus <br>
                laboriosam quas corrupti edit, iste <br> molestiae facilis blanditiis q di explicabo.</h6>


        </div>
        <div class="ikki shadow-5">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam provident saepe, unde vero dolorem ad soluta facere itaque distinctio pariatur. Cumque dolore odio ipsa, praesentium quis magnam cum ducimus?</p>

 

<hr>
<h5 class="hh5">salom lom1</h5>
<p class="p2">salomlar 11</p>
             <div class="d1 shadow-3">
                <span @click="count--">-</span>
                <h2>{{ count }} </h2>
                <span type="button" @click="count++">+</span>
            </div>
            <p class="p1">So'ma :</p>
            <h5 class="h5">12.000$</h5>
        </div>







    </div>
</template>

<script setup>
 
import header1 from '../components/Header.vue'
import { RouterLink } from 'vue-router';
import axios from 'axios'

import { useRoute } from 'vue-router'
let router = useRoute()
let parmId = router.params.id

let srt = ref('')
axios.get(`https://fakestoreapi.com/products/${parmId}`)
    .then(resp1 => {
        srt.value = resp1.data.image
 
    })




import { ref } from 'vue'
defineProps({
    msg: String,
})
const count = ref(0)

</script>

<style scoped>
.katta {}

.ikki {
    width: 69%;
    height: 80vh;
    margin-left: 60vh;
    margin-top: -85vh;
    border-radius: 15px;
    position: relative;
}


img {
    width: 25vh;
    height: 30vh;
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
    margin-top: 30px;
    margin-left: -10vh;
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
</style>

 