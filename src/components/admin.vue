<template>
    <header3></header3>
    <div class="div shadow-5 border rounded-5">
        
        <router-link to="/"><h4 class="m-5">Ortga qaytish </h4></router-link>
<form @submit.prevent = "Addsubmit">
        <label class="lbl2" for="">
            <h5> Title</h5>
            <input class="shadow-2 border rounded-2"    type="name" name="title" v-model="title"/>
        </label> 

        <label class="lbl3" for="">
            <h5> description</h5>
            <input class="shadow-2 border rounded-2"   type="name" name="description" v-model="description"/> 
        </label> 

        <label class="lbl4" for="">
            <h5>Image</h5>
            <input class="shadow-2 border rounded-2"   type="name" name="image" v-model="image"/>
        </label>



        <button type=" button" class="btn btn-danger bt1 shadow" data-mdb-ripple-color="dark">C A N C E L</button>
        <button type="submit" class="btn btn-primary bt2" data-mdb-ripple-color="dark">S U B M I T</button>
</form>
    </div>
</template>

<script setup>
import header3 from '../components/Header.vue'
import  axios  from 'axios';
import { ref } from 'vue';
 

let title = ref('')
let description = ref('')
let image = ref('')


const Addsubmit = async () => {
    await axios.post('https://yangi-travel.onrender.com/add/',{
        title:title.value,
        description:description.value,
        image:image.value

    })
    title.value = ' ',
    description.value = ' ',
    image.value = ''
    
}
 
</script>

<style  scoped>


 
.div {
    width: 50%;
    height: 80vh;
    margin: auto;
    margin-top: 5vh;
}
.int {
    width: 20.5vh;
    height: 30vh;
    border: none;
}
 
.shadow-2{
    width: 70vh;
    height: 5vh;
    border: none !important;
    border-bottom-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
}
.lbl2{
    margin-left: 15vh;
    display: block;
    margin-top: 15vh;
}
.lbl3{
    margin-top: 1vh;
    margin-left: 15vh;
    margin-bottom: 2vh; 
}
.lbl4{
    margin-left: 15vh;
}
.bt1{
        margin-top: 5vh;
        margin-left: 33vh;
        color: #fff;
}
.bt2{
        margin-left: 5vh;
        color: #fff;
}
button{
    width: 14vh;
    height: 5vh;    
    border-bottom-left-radius: 30px !important;
    border-top-right-radius: 30px !important;
}
h5{
font-weight: 400;
}
input{

    border:  solid;
}
 
</style>