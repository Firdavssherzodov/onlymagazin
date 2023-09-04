import { ref } from "vue";


 

const storage = ref([])

 localStorage.setItem('malumot', JSON.stringify(storage))
 


export {
    storage
    
}

