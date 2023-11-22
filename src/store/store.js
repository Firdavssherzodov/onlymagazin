import { ref } from "vue";


 const localData =  JSON.parse(localStorage.getItem('')) || []

const storage = ref(localData)

 localStorage.setItem('malumot', JSON.stringify(storage))
 

 
export {
    storage
    
}

