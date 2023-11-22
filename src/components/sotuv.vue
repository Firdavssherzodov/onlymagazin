<template>
    <div class="diva">
    
      
  

            
 
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
let isActive = ref(false)
let srt = ref([])

const api ='https://yangi-travel.onrender.com/'


axios.get( api )
    .then(resp => {
        resp.data.travels.forEach(element => {
            srt.value.push(element)

            
        });
        
    })


 
 


</script>


<style scoped>




</style>