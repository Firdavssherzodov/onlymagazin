<template>
    <div>
        <div id="carouselExampleIndicators" class=" carousel slide " data-mdb-ride="carousel" >
            <div class="carousel-indicators">
                <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner div_carusel img">
                <div class="carousel-item active">
                    <img src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663790507_11-mykaleidoscope-ru-p-uzbekskie-frukti-yeda-oboi-11.jpg" class="d-block w-100"
                        alt="Wild Landscape" />
                </div>
                <div class="carousel-item">
                    <img src="https://avatars.mds.yandex.net/get-altay/1903890/2a00000169c3a0168a1348a85aa637816ee7/orig" class="d-block w-100" alt="Camera" />
                </div>
                <div class="carousel-item">
                    <img src="https://toshvilstat.uz/images/yangiliklar2022/060920228.jpg" class="d-block w-100" alt="Exotic Fruits" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.slide{
    height: 3% !important;
    margin: auto;
    width: 85%;
}
.div_carusel{
    height: 400px !important;
    width: 90% ;
    margin: auto;
    border-radius:10px ;
     
}
</style>