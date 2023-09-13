<template>
    <header3></header3>
    <div class="div shadow-5 border rounded-5">
        
        <label class="lbl" for="">
            <p>Rasm :</p>
            <input class="int border rounded-5" type="image">
        </label>

        <label class="lbl2" for="">
            <p> Title</p>
            <input class="shadow-2 border rounded-2" type="name">
        </label> 

        <label class="lbl3" for="">
            <p>old price</p>
            <input class="shadow-2 border rounded-2" type="name">
        </label> 

        <label class="lbl4" for="">
            <p>new price</p>
            <input class="shadow-2 border rounded-2" type="name">
        </label>



        <button type="button" class="btn btn-outline-danger bt1" data-mdb-ripple-color="dark">cancel</button>
        <button type="button" class="btn btn-outline-success bt2" data-mdb-ripple-color="dark">s e n d</button>

    </div>
</template>

<script setup>
import header3 from '../components/Header.vue'
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
.lbl {
    margin-left: 5vh;
    margin-top: 10vh
}
.shadow-2{
    width: 60vh;
    height: 5vh;
}
.lbl2{
    margin-left: 32.5vh;
    display: block;
    margin-bottom: 2vh;
}
.lbl3{
    margin-left: 32.5vh;
    margin-bottom: 2vh;
}
.lbl4{
    margin-left: 32.5vh;
}
.bt1{
        margin-top: 5vh;
        margin-left: 47.5vh;
}
.bt2{
        margin-left: 5vh;
}
 
</style>