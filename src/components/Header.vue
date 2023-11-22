<template>
  <header class="diva">
    <div class="d1 d-flex">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjFTO5P1yacBRXCLscjrh3Z3t3GAIH7B1UwsG4Ls0rifGayh_m_RDjdVY2ZtQNs0kBcI&usqp=CAU"
        alt=""
        class="px-5 rounded-circle my-1"
      />
      <h1 class="fs-3 py-4">Firdavs</h1>
    </div>
    <div class="d2">
      <div>
        <i
          class="fa-regular fa-user fs-4 text-primary"
          style="color: #838891"
        ></i>
        <p class="px-3">Kirish</p>
      </div>
      <div>
        <i
          class="fa-solid fa-bag-shopping fs-4 text-primary"
          style="color: #838891"
        ></i>
        <p class="px-3">Saralangan</p>
      </div>
      <div>
        <i
          class="fa-regular fa-heart fs-4 text-danger"
          style="color: #838891"
        ></i>
        <p class="px-3">Savat</p>
      </div>
    </div>
  </header>

  <section class="Menu">
    <div>
      <a
        href="#"
        class="fa-solid fa-house fs-4 text-primary"
        style="color: #8c8989"
      ></a>
    </div>
    <div>
      <a
        href="#"
        class="fa-solid fa-magnifying-glass fs-4 text-info"
        style="color: #8c8989"
      ></a>
    </div>
    <div>
      <a
        href="#"
        class="fa-solid fa-bag-shopping fs-4 text-primary"
        style="color: #8c8989"
      ></a>
    </div>
    <div>
      <a
        href="#"
        class="fa-regular fa-heart fs-4 text-danger"
        style="color: #8c8989"
      ></a>
    </div>
    <div>
      <a
        href="#"
        class="fa-regular fa-user fs-4 text-dark"
        style="color: #8c8989"
      ></a>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.diva {
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-around;
}
.d1 {
  width: 35%;
  height: 100%;
}
.d2 {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.d2 div {
  display: flex;
}
.d1 img {
  width: 17%;
  height: 90%;
}
.Menu {
  width: 350px;
  height: 60px;
  position: fixed;
  left: 40.5%;
  z-index: 22;
  bottom: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 2rem !important;
  background-color: aliceblue;
}
.Menu div {
  background-color: aliceblue;

  padding: 2.5vh 4vh;
  height: 100%;
  box-shadow: 0px 0px 4px grey;
}
/* Responsive */
@media (max-width: 385px) {
  .diva {
    display: none;
  }
  .Menu {
    width: 90%;
    left: 4%;
    bottom: 2% !important;
  }
}
</style>
