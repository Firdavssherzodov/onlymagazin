<template >
  <header4></header4>
  <!-- axios.put -->
  <div class="div shadow-6 border rounded-5">

    <router-link to="/">
      <h4 class="m-5">Ortga qaytish</h4>
    </router-link>
    <form @submit.prevent="Addsubmit">
      <label class="lbl2" for="">
        <h5> Title</h5>
        <input class="shadow-5 border rounded-2" type="name" name="title" v-model="title" />
      </label>

      <label class="lbl3" for="">
        <h5> description</h5>
        <input class="shadow-5 border rounded-2 " type="name" name="description" v-model="description" />
      </label>

      <label class="lbl4" for="">
        <h5>Image</h5>
        <input class="shadow-5 border rounded-2" type="name" name="image" v-model="image" />
      </label>



      <button type=" button" class="btn btn-danger bt1 shadow buttonn" data-mdb-ripple-color="dark" @click="Replace()">T O Z A L A S H</button>
      <button type="submit" class="btn btn-primary bt2 buttonn buttom " data-mdb-ripple-color="dark">Q  O' S H I S H</button>
      <button  class="btn btn-warning bt2 buttonn  tugma" data-mdb-ripple-color="dark"  @click="updataData()">T A H R I R L A S H  </button>
    </form>
  </div>

  <!-- axios.get -->
  <div class="diva">


    <div class="card shadow" v-for="(srt,index) in qabul" :key="index">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img :src="srt.image" class="img-fluid"/>
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ srt.title }}</h5>
        <p class="card-text">{{ srt.description }}.</p>
        {{ srt._id }}
        
        


        <button class="btn blt btn-danger ml-5 rounded-9 fs-5 ml-12" @click="deleteTravel(srt._id,index)" >  <i class="fas fa-trash-can"></i></button>
        <button class="btn btn-warning ml-5 fs-5 rounded-9 ml-12" type="submit" @click="getData(srt._id)"  ><i class="fas fa-pen "></i></button>
     
      </div>
    </div>
   <h1 ref="firdavs">5</h1>
  </div>
</template>
  

  
<script setup>
import header4 from '../components/Header.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'


let title = ref('')
let description = ref('')
let image =   ref(' ')
const id = ref(null)


const qabul = ref([])

let firdavs = ref()




// axios.get
const Kiruvchi = async () => {
  let response = await axios.get('https://yangi-travel.onrender.com/')
  qabul.value.push(...response.data.travels)

}

Kiruvchi()


const deleteTravel = async (idw,index) => {

     qabul.value.splice(index,1)

    await axios.delete(`https://yangi-travel.onrender.com/${idw}`)
    id.value = idw  
    qabul.value = []
 }

// axios.post
const Addsubmit = async () => {
  await axios.post('https://yangi-travel.onrender.com/add/', {
    title: title.value,
    description: description.value,
    image: image.value
  })
    title.value = ' ',
    description.value = ' ',
    image.value = ''

  qabul.value = []
  Kiruvchi()
}


// axios.put
let getData = async (idx) => {
  let response = await axios.get(`https://yangi-travel.onrender.com/${idx}`)
  console.log(response);
  let travel = response.data.travel
  title.value = travel.title
  description.value = travel.description
  image.value = travel.image
  id.value = idx

    let button1 = document.querySelector('.buttom')
  button1.setAttribute('disabled',true)

  let button2 = document.querySelector('.tugma')
  button2.removeAttribute('disabled',true)
}



let updataData = async () => {

  await axios.put(`https://yangi-travel.onrender.com/${id.value}`, {
    title: title.value,
    description: description.value,
    image: image.value

  })


}



    let getIDformURL = () => {
  let url = window.location.href
  let parth = url.split('/')
  let id = parth[parth.length - 1]
  return id
}
onMounted(() => {
  let id = getIDformURL()
  getData(id)
})



function Replace(){
  let button1 = document.querySelector('.buttom')
  button1.removeAttribute('disabled',true)

  let button2 = document.querySelector('.tugma')
  button2.setAttribute('disabled',true)
}







</script>
  
  
<style scoped>

.fa-trash-can{
color: rgb(66, 63, 63);
}
.fa-trash-can:hover{
  color: #fff;
}


.div {
  width: 30%;
  height: 80vh;
  margin: auto;
  margin-top: 5vh;
  margin-left: 100em !important;
  position: sticky;
  top: 220px !important;
  transition: 2s;
}

.int {
  width: 20.5vh;
  height: 30vh;
  border: none;
}

.shadow-5 {
  width: 40vh;
  height: 5vh;
  border: none !important;
  border-bottom-left-radius: 20px !important;
  border-top-right-radius: 20px !important;
}

.lbl2 {
  margin-left: 8vh;
  display: block;
  margin-top: 12vh;
}

.lbl3 {
  margin-top: 5vh;
  margin-left: 8vh;
  margin-bottom: 2vh;
}

.lbl4 {
  margin-top: 5vh;
  margin-left: 8vh;
}

.bt1 {
  margin-top: 7vh;
  margin-left: 5vh;
  color: #fff;
}

.bt2 {
  margin-left: 2vh;
  color: #fff;
}

.buttonn {
  width: 14vh;
  height: 5vh;
  border-bottom-left-radius: 30px !important;
  border-top-right-radius: 30px !important;
}

h5 {
  font-weight: 400;
}

input {

  border: solid black, white !important;
}

.card {
  width: 25vh;
  height: 30vh;
  margin: 5vh;

}

.diva {
  width: 60%;
  height: auto;
  margin: 5vh;
  margin-left: 8vh;
  margin-top: -79.5vh;
  display: flex;
  flex-wrap: wrap;
}
</style>