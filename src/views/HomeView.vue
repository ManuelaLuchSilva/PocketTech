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
  { id: 1, image: 'src/assets/imgs/Acessorios/Capinhas.png' },
  { id: 2, image: 'src/assets/imgs/Acessorios/adesivoCelular.jpg' },
  { id: 3, image: 'src/assets/imgs/Acessorios/foneOuvido.jpg' },
  { id: 4, image: 'src/assets/imgs/Acessorios/headset.jpg' },
  { id: 5, image: 'src/assets/imgs/Acessorios/suporteCelular.jpg' },
  { id: 6, image: 'src/assets/imgs/Acessorios/pelicula.png' },
  { id: 7, image: 'src/assets/imgs/Acessorios/carregador.png' },
  { id: 8, image: 'src/assets/imgs/Acessorios/suporteSpiderman.png' }
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
  {
    id: 1,
    name: 'Películas de Vidro 3D Anti-quebra',
    image: 'src/assets/imgs/products/Pelicula.png',
    price: 79.99,
    discountType: 'PIX',
    discountPercentage: 5
  },
  {
    id: 2,
    name: 'Suporte Veicular Magnético para Smartphones',
    image: 'src/assets/imgs/products/SuporteCelular.jpg',
    price: 69.99,
    discountType: 'PIX',
    discountPercentage: 4
  },
  {
    id: 3,
    name: 'Carregadores Rápidos USB-C e Wireless',
    image: 'src/assets/imgs/products/Carregador.jpg',
    price: 49.99,
    discountType: 'PIX',
    discountPercentage: 6
  },
  {
    id: 4,
    name: 'Fones de Ouvido Bluetooth In-ear',
    image: 'src/assets/imgs/products/FoneBluetooth.jpg',
    price: 99.99,
    discountType: 'PIX',
    discountPercentage: 7
  },
  {
    id: 5,
    name: 'Pacote de Manutenção Completa para Celulares',
    image: 'src/assets/imgs/products/ManutencaoCelular.jpg',
    price: 129.99,
    discountType: 'PIX',
    discountPercentage: 8
  },
  {
    id: 6,
    name: 'Capinhas Antichoque Personalizadas',
    image: 'src/assets/imgs/products/CapaCelular.jpg',
    price: 79.9,
    discountType: 'PIX',
    discountPercentage: 5
  },
  {
    id: 7,
    name: 'Baterias Externas (Power Banks) de Alta Capacidade',
    image: 'src/assets/imgs/products/BateriaExterna.jpg',
    price: 54.99,
    discountType: 'PIX',
    discountPercentage: 6
  },
  {
    id: 8,
    name: 'Cabo de Selfie',
    image: 'src/assets/imgs/products/CabodeSelfie.png',
    price: 109.99,
    discountType: 'PIX',
    discountPercentage: 7
  }
])

const sliderProduct = ref(0)

const pedacoSliderProduct = computed(() => {
  const tamanhoPedaco = 4
  const result = []
  for (let contador = 0; contador < products.value.length; contador += tamanhoPedaco) {
    result.push(products.value.slice(contador, contador + tamanhoPedaco))
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
  {
    id: 1,
    name: 'iPhone 15 Pro',
    image: 'src/assets/imgs/Phones/Iphone15Pro.png',
    price: 1199.99,
    discountType: 'PIX',
    discountPercentage: 12
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    image: 'src/assets/imgs/Phones/SamsungGalaxyS24Ultra.png',
    price: 1099.99,
    discountType: 'PIX',
    discountPercentage: 7
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    image: 'src/assets/imgs/Phones/GooglePixel8Pro.png',
    price: 999.99,
    discountType: 'PIX',
    discountPercentage: 10
  },
  {
    id: 4,
    name: 'OnePlus 12',
    image: 'src/assets/imgs/Phones/oneplus12.jpg',
    price: 1299.99,
    discountType: 'PIX',
    discountPercentage: 20
  },
  {
    id: 5,
    name: 'Xiaomi Mi 13 Pro',
    image: 'src/assets/imgs/Phones/XiaomiMi13Pro.png',
    price: 1199.99,
    discountType: 'PIX',
    discountPercentage: 25
  },
  {
    id: 6,
    name: 'Sony Xperia 1 V',
    image: 'src/assets/imgs/Phones/sonyXperia.jpg',
    price: 899.99,
    discountType: 'PIX',
    discountPercentage: 15
  },
  {
    id: 7,
    name: 'Oppo Find X6 Pro',
    image: 'src/assets/imgs/Phones/OppoX6.png',
    price: 1099.99,
    discountType: 'PIX',
    discountPercentage: 18
  },
  {
    id: 8,
    name: 'Huawei P60 Pro',
    image: 'src/assets/imgs/Phones/huaweiP60.jpg',
    price: 1249.99,
    discountType: 'PIX',
    discountPercentage: 22
  }
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
          <div class="carousel-slide" v-for="(pedaco, index) in pedacoSliderAcessorio" :key="index">
            <CardAcessorios v-for="item in pedaco" :key="item.id" :acessorio="item" />
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
