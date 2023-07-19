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
@media screen and (max-width: 470px){


.div a{
    display: 
    flex;
    font-size: 10px;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
}
}

</style>