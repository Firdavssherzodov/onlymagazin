<template>
    <div class="kattadiv">
<h2 class="h2">Sotuv Bo'limi</h2>


        <div class="div1">
            <i class="far fa-heart"></i>
            <img src="https://yukber.uz/image/cache/catalog/YK9120/fc75668b-ee71-4037-bcee-b1175bec2374.jpg.500x500_q85_crop-scale-700x700.jpg" alt="">
            
            <p class="p1">Lorem ipsum dolor sit amet consectetur <br> elit. Repellen</p>
             <p class="p2 "> <i class="i1 fas fa-star"></i> 4.5 (1255 marta)</p>
            <span>  <i class=" fas fa-cart-plus"></i>  </span>
             <p class="p3">10.000 so'm</p>
             <h6 class="p4">5 000 so'm</h6>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
.kattadiv{
    width: 100%;
    height: 80em;
    border: solid blue;
    margin-top: 2%;
}
.h2{
    margin: 30px;
    margin-left: 12%;
    color: black;
    font-family: 'Ubuntu' , sans-serif;
}
.div1{
    width: 40vh;
    height: 65vh;
    border: solid rgb(164, 164, 164);
    margin-left: 7%;
    border-radius: 5px;
}
.div1 img{
    width: 35vh;
    height: 40vh;
    border-radius: 5px;
  position:relative;
  top: 8px;
  left: 20px;
}
.div1 img:hover{
    transform:scale(1.02);
}
.p1{
    font-size: 12px;
    padding: 10px;
    margin-top: 5px;
    
}
.p2{
    font-size: 12px;
    padding: 10px;
    color: grey;
    margin-top: -30px;
    
}
.p3{
    font-size: 12px;
    padding: 10px;
    text-decoration: line-through;
    position: relative;
    top: 10px;
    
}
.p4{
    font-size: 15px;
    padding: 10px;
    margin-top: -24px;
}
.i1{
    color:orange;
}
.fa-heart{
  position: absolute;
 left: 23%;
 z-index: 2;
 margin-top: 20px;
 font-size: 20px;
 color: rgb(103, 103, 103);
}
.fa-heart:hover{
    color: black;
}
.fa-heart::after{
    background-color: red;
}
.fa-cart-plus{
    color: rgb(25, 25, 25);
    position: absolute;
    left: 48vh;  
    margin-top: 28px;
    font-size: 24px;
    border-radius: 50%;
  
}
.fa-cart-plus:hover{
    transform: scale(1.02);
    color: black;  
}












</style>