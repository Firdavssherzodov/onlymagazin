<template>
    <div class="div">
<a href="">Bo'limlar</a>
<a href="">Bo'limlar</a>
<a href="">Bo'limlar</a>
<a href="">Bo'limlar</a>
<a href="">Bo'limlar</a>
<a href="">Bo'limlar</a>
<a href="">Bo'limlar</a>
<a href="">Bo'limlar</a>
<a href="">Bo'limlar</a>
 


    </div>
</template>

<script setup>

</script>

<style  scoped>
.div{
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
a{
    font-size: 18px;
    font-family: 'Hind Siliguri', sans-serif;
    color: rgb(109, 109, 109);
}
a:hover{
    color: black !important;
    transition: 1s !important;
    font-family: 'Hind Siliguri', sans-serif;
    border-bottom: 2px solid transparent;

}
@media screen and (max-width: 570px){

 a{
    display: flex;
    font-size: 12px !important;
    justify-content: space-around;
    align-items: center;
    
}
a:active{
    color: rgb(240, 120, 120) !important;
    transition: 1s !important;
    font-family: 'Hind Siliguri', sans-serif;
    border-bottom: 2px solid transparent;
}

}

</style>