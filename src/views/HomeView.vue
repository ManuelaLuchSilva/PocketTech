<script setup>
import CarouselPag from '../components/CarouselPag.vue'
import CardProduct from '../components/CardProduct.vue'
import CardAcessorios from '../components/CardAcessorios.vue'
import CardPhone from '../components/CardPhone.vue'
import FooterBar from "../components/FooterBar.vue";
import NavBar from "../components/NavbarAdm.vue";
</script>

<template>
  <NavBar />
  <CarouselPag />
  <section class="container-main">
    <div class="titleProduct">
      <h2>Acessórios</h2>
      <img
        src="../assets/imgs/setaTorta.png"
        alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button class="left-button">
        <img
          src="../assets/imgs/setaSimples.png"
          alt="" />
      </button>
      <CardAcessorios />
      <CardAcessorios />
      <CardAcessorios />
      <CardAcessorios />
      <button class="right-button">
        <img
          src="../assets/imgs/setaSimples.png"
          alt="" />
      </button>
    </div>

    <div class="titleProduct">
      <h2>Produtos em Destaque</h2>
      <img
        src="../assets/imgs/setaTorta.png"
        alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button class="left-button">
        <img
          src="../assets/imgs/setaSimples.png"
          alt="" />
      </button>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <button class="right-button">
        <img
          src="../assets/imgs/setaSimples.png"
          alt="" />
      </button>
    </div>
    <div class="titleProduct">
      <h2>Celulares e Smartphones</h2>
      <img
        src="../assets/imgs/setaTorta.png"
        alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button class="left-button">
        <img
          src="../assets/imgs/setaSimples.png"
          alt="" />
      </button>
      <CardPhone />
      <CardPhone />
      <CardPhone />
      <CardPhone />
      <button class="right-button">
        <img
          src="../assets/imgs/setaSimples.png"
          alt="" />
      </button>
    </div>
  </section>

<FooterBar/>
</template>

<style scoped>
.container-main {
  background-color: #ffffff;
  margin: 0 12rem;
  min-height: 100px;
  margin-top: 10px;
}

.titleProduct {
  display: flex;
  margin: 8px 10px 22px 50px;
}

.titleProduct img {
  margin-top: 23px;
  margin-left: 10px;
  width: 25px;
  height: 28px;
  rotate: -20deg;
}

.titleProduct h2 {
  font-family: 'Inter', sans-serif;
  font-size: 23px;
  font-style: italic;
  font-weight: 600;
  text-align: left;
  color: #00477a;
}

.produtos {
  display: flex;
  justify-content: space-between;
}

.produtos:not(:last-child) {
  margin-bottom: 90px;
}

.produtos:last-child {
  padding-bottom: 200px;
}

.left-button,
.right-button {
  border: 0;
  background-color: white;
}

.left-button img {
  width: 20px;
  height: 20px;
  rotate: 180deg;
  border: 0;
  background-color: none;
}

.right-button img {
  width: 20px;
  height: 20px;
  border: 0;
  background-color: none;
}

button {
  padding-bottom: 15px;
  transition-duration: 200ms;
  transition-timing-function: linear;
}

button:hover {
  transition-duration: 200ms;
  transition-timing-function: linear;
  background-color: #e9e9e9;
}
</style>
