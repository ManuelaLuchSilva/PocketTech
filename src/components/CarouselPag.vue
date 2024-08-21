<script setup>
import { ref } from 'vue'

const slides = [
  { image: 'https://s3-alpha-sig.figma.com/img/1e74/95a0/3f21f63c46d02467332c1959cdfd5eaf?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=REzFFJOPS2hHoi2soGi7Z1WdavXM7wSXrdq6U2tEf4ZWVCIIFZSecfzaPhCleeQGc8~3g8Kh6g7ZKU~g1gA0TQYFeD0RPD9smlwLTgEUo7iTf8vZ25blg5QZ4pqAs-B7vmWneYtXnQ0xhWw3C3C3oH5mQx99vIY-NxpMIK12IQLfCmTcnI08i2oOJ7dEwguApsE8a5sp210UQP4P3NAJ5Fv~nZDkeXNgrpFcK7ZUMW1qCydtzjCT~2zrA9Yr~G4s-MSzkV~YIe~t9ITQBIclqNlNE0Zi-Dc27DfTyhHTa6pCXBP7B7TLw~AYSAmDkRytmlbcPqnJ6Odrcmmw0e0jBA__', alt: 'Description of image 1' },
  { image: 'path/to/image2.jpg', alt: 'Description of image 2' },
  { image: 'path/to/image3.jpg', alt: 'Description of image 3' }
  // Adicionar mais imgs
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
        src="https://s3-alpha-sig.figma.com/img/252c/b48a/eec9414d2421b4929432d0deee61b834?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1aE5iBjdvINEl~VV6789FToOS3~1yO7j5zuZmDVxR5Tdn9g4pl8cWSb0x1HrxrIF5ScNHD1adaDnTxWAzlBM44UujyJ-xT3L3~Rb1liAiv2SGo1H775S04HlkuOYj13YOmVZ1tMYAoR-hNsvpK44QCUFdyHUpDpxaWi8h9hLJ-esNZSN~yxvbQt5lWgQBHCu~QIzSqHl~Up-hJfNlXz9hWHRow85JcwhgIqhaLj9ABBQ6ze5Rt8ATCFogn-kmsaBOmksy9iMNY-WdtJyyyYPtOKBgs9PEdgDV8nB3RB7ngpMTWyDvHA3h6i~tvBuuBCFpIgIiYWQdHEIedN2JapIA__"
        alt="prev-button"
        id="prevButton"
      />
    </button>
    <button @click="nextSlide" class="carousel-button next-button">
      <img
        src="https://s3-alpha-sig.figma.com/img/252c/b48a/eec9414d2421b4929432d0deee61b834?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1aE5iBjdvINEl~VV6789FToOS3~1yO7j5zuZmDVxR5Tdn9g4pl8cWSb0x1HrxrIF5ScNHD1adaDnTxWAzlBM44UujyJ-xT3L3~Rb1liAiv2SGo1H775S04HlkuOYj13YOmVZ1tMYAoR-hNsvpK44QCUFdyHUpDpxaWi8h9hLJ-esNZSN~yxvbQt5lWgQBHCu~QIzSqHl~Up-hJfNlXz9hWHRow85JcwhgIqhaLj9ABBQ6ze5Rt8ATCFogn-kmsaBOmksy9iMNY-WdtJyyyYPtOKBgs9PEdgDV8nB3RB7ngpMTWyDvHA3h6i~tvBuuBCFpIgIiYWQdHEIedN2JapIA__"
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
}

.carousel-button {
  position: absolute;
  top: 50%;
  background-color: black;
  padding: 2px;
  border-radius: 30px;
  color: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
}
.carousel-button img{
  padding: 3px;
}
.carousel-button img:hover {
  transition: all 200ms;
  transform: scale(1.2);
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
