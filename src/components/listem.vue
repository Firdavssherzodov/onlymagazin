<!-- <template>
<li>
    <span v-if="id === activeId">Soso</span>
    {{ msg }}
</li>
</template>

<script setup>
import { onUpdated } from 'vue';
const props = defineProps({
    id:Number,
    msg:String,
    activeId:Number,
})
onUpdated(()=>{
    console.log('updating' + props.id);
})
</script>

<style scoped>
 
</style>







import { ref } from "vue";
import ListItem from './components/listem.vue'

const arr = ref([
  {id: 0 , msg:'Salom lom'},
  {id: 1 , msg:'Salom lom'},
  {id: 2 , msg:'Salom lom'},
  {id: 3 , msg:'Salom lom'},
  {id: 4 , msg:'Salom lom'},
  ])
  </script>
 
 <style scoped>
  #app{
    font-family: 'Avenir',Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing:grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

<div>
    <nav1/>
    <Search/>
    <carusel/>      
    <router-view/>
    <sotuv/>

    <button @click="activeId = (activeId + 1) %  arr.length">somsa</button>
  </div>
 
  <ul>
    <List-item
    v-for="msg in arr"
    :key="msg.id"
    :id="msg.id"
    :msg="msg.msg"
    :active-id="activeId"
    />
  </ul> -->