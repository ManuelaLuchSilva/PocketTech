<script setup>
import CarouselPag from '../components/CarouselPag.vue'
import CardProduct from '../components/CardProduct.vue'
import CardAcessorios from '../components/CardAcessorios.vue'
import CardPhone from '../components/CardPhone.vue'
import FooterBar from '../components/FooterBar.vue'
import NavBar from '../components/NavBar.vue'
import { ref, computed } from 'vue'

//Script Acessorio Slider
const acessorio = ref([
  { id: 1, image: '../assets/imgs/img-usuario.png' },
  { id: 2, image: '' },
  { id: 3, image: '' },
  { id: 4, image: '' },
  { id: 5, image: '' },
  { id: 6, image: '' },
  { id: 7, image: '' },
  { id: 8, image: '' }
])

const sliderAcessorio = ref(0)
const pedacoSliderAcessorio = computed(() => {
  const tamanhoPedaco = 4
  const result = []
  for (let i = 0; i < acessorio.value.length; i += tamanhoPedaco) {
    result.push(acessorio.value.slice(i, i + tamanhoPedaco))
  }
  return result
})
const prevSlideAcessorio = () => {
  sliderAcessorio.value =
    (sliderAcessorio.value - 1 + pedacoSliderAcessorio.value.length) %
    pedacoSliderAcessorio.value.length
}

const nextSlideAcessorio = () => {
  sliderAcessorio.value = (sliderAcessorio.value + 1) % pedacoSliderAcessorio.value.length
}

//Script Products Slider
const products = ref([
  { id: 1, image: '', price: 79.99, discountType: 'PIX', discountPercentage: 5 },
  { id: 2, image: '', price: 69.99, discountType: 'PIX', discountPercentage: 4 },
  { id: 3, image: '', price: 49.99, discountType: 'PIX', discountPercentage: 6 },
  { id: 4, image: '', price: 99.99, discountType: 'PIX', discountPercentage: 7 },
  { id: 5, image: '', price: 129.99, discountType: 'PIX', discountPercentage: 8 },
  { id: 6, image: '', price: 79.9, discountType: 'PIX', discountPercentage: 5 },
  { id: 7, image: '', price: 54.99, discountType: 'PIX', discountPercentage: 6 },
  { id: 8, image: '', price: 109.99, discountType: 'PIX', discountPercentage: 7 }
])

const sliderProduct = ref(0)

const pedacoSliderProduct = computed(() => {
  const tamanhoPedaco = 4
  const result = []
  for (let i = 0; i < products.value.length; i += tamanhoPedaco) {
    result.push(products.value.slice(i, i + tamanhoPedaco))
  }
  return result
})

const prevSlideProduct = () => {
  sliderProduct.value =
    (sliderProduct.value - 1 + pedacoSliderProduct.value.length) % pedacoSliderProduct.value.length
}

const nextSlideProduct = () => {
  sliderProduct.value = (sliderProduct.value + 1) % pedacoSliderProduct.value.length
}

//Script Phones Slider
const phones = ref([
  { id: 1, image: '', price: 119.99, discountType: 'PIX', discountPercentage: 12 },
  { id: 2, image: '', price: 99.99, discountType: 'PIX', discountPercentage: 7 },
  { id: 3, image: '', price: 69.99, discountType: 'PIX', discountPercentage: 10 },
  { id: 4, image: '', price: 159.99, discountType: 'PIX', discountPercentage: 20 },
  { id: 5, image: '', price: 209.99, discountType: 'PIX', discountPercentage: 25 },
  { id: 6, image: '', price: 79.99, discountType: 'PIX', discountPercentage: 15 },
  { id: 7, image: '', price: 139.99, discountType: 'PIX', discountPercentage: 18 },
  { id: 8, image: '', price: 219.99, discountType: 'PIX', discountPercentage: 22 }
])

const sliderPhone = ref(0)

const pedacosSliderPhone = computed(() => {
  const tamanhoPedaco = 4
  const result = []
  for (let i = 0; i < phones.value.length; i += tamanhoPedaco) {
    result.push(phones.value.slice(i, i + tamanhoPedaco))
  }
  return result
})

const prevSlidePhone = () => {
  sliderPhone.value =
    (sliderPhone.value - 1 + pedacosSliderPhone.value.length) % pedacosSliderPhone.value.length
}

const nextSlidePhone = () => {
  sliderPhone.value = (sliderPhone.value + 1) % pedacosSliderPhone.value.length
}
</script>

<template>
  <NavBar />
  <CarouselPag />
  <section class="container-main">
    <div class="titleProduct">
      <h2>Acessórios</h2>
      <img src="../assets/imgs/setaTorta.png" alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button @click="prevSlideAcessorio" class="left-button">
        <img src="../assets/imgs/setaSimples.png" alt="" />
      </button>
      <div class="carouselAcessorio">
        <div
          class="carousel-container"
          :style="{ transform: `translateX(-${sliderAcessorio * 100}%)` }"
        >
          <div
          class="carousel-slide"
          v-for="(pedaco, index) in pedacoSliderAcessorio"
          :key="index"
        >
          <CardAcessorios
            v-for="item in pedaco"
            :key="item.id"
            :acessorio="item"
            />
          </div>
        </div>
      </div>
      <button @click="nextSlideAcessorio" class="right-button">
        <img src="../assets/imgs/setaSimples.png" alt="" />
      </button>
    </div>

    <div class="titleProduct">
      <h2>Produtos em Destaque</h2>
      <img src="../assets/imgs/setaTorta.png" alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button @click="prevSlideProduct" class="left-button">
        <img src="../assets/imgs/setaSimples.png" alt="" />
      </button>
      <div class="carouselProduct">
        <div
          class="carousel-container"
          :style="{ transform: `translateX(-${sliderProduct * 100}%)` }"
        >
          <div class="carousel-slide" v-for="(pedaco, index) in pedacoSliderProduct" :key="index">
            <CardProduct v-for="item in pedaco" :key="item.id" :product="item" />
          </div>
        </div>
      </div>
      <button @click="nextSlideProduct" class="right-button">
        <img src="../assets/imgs/setaSimples.png" alt="" />
      </button>
    </div>
    <div class="titleProduct">
      <h2>Celulares e Smartphones</h2>
      <img src="../assets/imgs/setaTorta.png" alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button @click="prevSlidePhone" class="left-button">
        <img src="../assets/imgs/setaSimples.png" alt="" />
      </button>
      <div class="carouselPhone">
        <div
          class="carousel-container"
          :style="{ transform: `translateX(-${sliderPhone * 100}%)` }"
        >
          <div class="carousel-slide" v-for="(chunk, index) in pedacosSliderPhone" :key="index">
            <CardPhone v-for="item in chunk" :key="item.id" :phone="item" />
          </div>
        </div>
      </div>
      <button @click="nextSlidePhone" class="right-button">
        <img src="../assets/imgs/setaSimples.png" alt="" />
      </button>
    </div>
  </section>

  <FooterBar />
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
.right-button:hover {
  transform: translateX(-30%);
}
.left-button:hover {
  transform: translateX(30%);
}
/* Carousel Acessorio*/
.carouselAcessorio {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.CardAcessorios {
  flex: 1;
  margin: 0 10px;
}
/* Carousel Product*/
.carouselProduct {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.CardProduct {
  flex: 1;
  margin: 0 10px;
}
/* CarouselPhone */
.carouselPhone {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.CardPhone {
  flex: 1;
  margin: 0 10px;
}

/* Style geral Carouse */
.carousel-container {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide {
  display: flex;
  flex: 1;
  margin: 5px;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
