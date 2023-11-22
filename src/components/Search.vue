<template>
  <div class="diva">
    <section class="border p-4 mb-4 d-flex align-items-center flex-column">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <form class="form w-100">
          <button>
            <svg
              width="17"
              height="22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <input
            class="input"
            placeholder="Mahsulot va toifalarni qidirish"
            required=""
            type="text"
          />
          <button class="reset" type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
      </nav>
      <!-- Navbar -->
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.form-control {
  border: solid 1px grey;
}
.navbar {
  width: 80%;
}

/* From uiverse.io by @satyamchaudharydev */
/* removing default style of button */

.form button {
  border: none;
  background: none;
  color: #8b8ba7;
}
/* styling of whole input container */
.form {
  --timing: 0.3s;
  --width-of-input: 200px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: (2rem);
  transition: border-radius 0.5s ease;
  background: var(--input-bg, #fff);
}
/* styling of Input */
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
}
/* styling of animated border */
.form:before {
  content: "";
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
  transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
@media (max-width: 380px) {
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .diva{
    width: 100% !important;
  }

}
</style>
