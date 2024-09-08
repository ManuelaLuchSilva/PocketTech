<script setup>
import { ref } from 'vue'

const props = defineProps({
  acessorio: Object
})
const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="acessories-card">
    <div :class="['acessories-content', { expanded: isExpanded }]" @click="toggleExpand">
      <img :src="props.acessorio.image" alt="Imagem do Acessório" />
    </div>
    <button class="see-more" @click="toggleExpand">Ver produto</button>
  </div>
</template>

<style scoped>
.acessories-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  width: 11.5rem;
  margin: 20px;
}

.acessories-content {
  height: 150px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
}

.acessories-content.expanded {
  transform: scale(1.5);
}

.acessories-content img {
  width: 100%;
  height: 100%;
}
button {
  border: 0;
  background-color: #ffffff;
}
button:hover {
  transition-timing-function: ease-in-out;
  transition-duration: 600ms;
  background-color: #ececec;
  border-radius: 4px;
}
.see-more {
  color: #00477a;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  text-align: center;
  width: 100%;
}

.acessories-card:hover .acessories-content {
  transform: scale(1.1);
}
</style>
