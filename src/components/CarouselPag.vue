<script setup>
import { ref } from 'vue'

const slides = [
  { image: 'imgs/banner.png', alt: 'Banner 1' },
  { image: 'imgs/banner2.png', alt: 'Banner 2' },
  { image: 'imgs/banner3.png', alt: 'Banner 3' },
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}
</script>
<template>
  <div class="carousel-container">
    <div class="carousel">
      <div
        class="carousel-slide"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <img :src="slide.image" :alt="slide.alt" />
      </div>
    </div>
    <button @click="prevSlide" class="carousel-button prev-button">
      <img
        src="../../imgs/seta.png"
        alt="prev-button"
        id="prevButton"
      />
    </button>
    <button @click="nextSlide" class="carousel-button next-button">
      <img
        src="../../imgs/seta.png"
        alt="next-button"
      />
    </button>
  </div>
</template>
<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  margin: 25px 12rem;
}

.carousel {
  width: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  opacity: 0.9;
}

.carousel-button {
  position: absolute;
  top: 50%;
  background-color: transparent;
  border-radius: 30px;
  color: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
}
.carousel-button img{
  width: 100px;
}
.carousel-button:hover img {
  transition-timing-function: ease-in-out;
  transition-duration: 400ms;
  transform: scale(2);
}
.prev-button {
  left: 10px;
}
.prev-button img {
  rotate: 180deg;
  width: 20px;
}

.next-button {
  right: 10px;
}
.next-button img {
  width: 20px;
}
</style>