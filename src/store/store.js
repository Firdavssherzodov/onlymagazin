import { ref } from "vue";


 const localData =  JSON.parse(localStorage.getItem('product')) || []

const storage = ref(localData)

 localStorage.setItem('malumot', JSON.stringify(storage))
 

 
export {
    storage
    
}

