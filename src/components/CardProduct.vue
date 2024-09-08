<script setup>
import { reactive } from 'vue';

const props = defineProps({
  product: Object
});

const productData = reactive({
  image: props.product.image,
  price: {
    value: props.product.price,
  },
  discount: {
    type: props.product.discountType,
    percentage: props.product.discountPercentage
  }
});
</script>

<template>
  <div class="product-card">
    <div class="product-content">
      <img :src="productData.image" alt="Imagem do Produto">
    </div>
    <div class="product-price">
      <p class="aVista">À vista</p>
      <span class="price">R${{ productData.price.value }}</span>
      <p class="discount">{{ productData.discount.type }} com {{ productData.discount.percentage }}% desconto</p>
    </div>
    <button class="buy-button">COMPRAR</button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  width: 11.5rem;
  margin: 20px;
}

.product-content {
  height: 200px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.aVista {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
}

.price,
span {
  font-family: 'Inter', sans-serif;
  font-size: 25px;
  font-weight: 400;
  text-align: left;
  margin: 0;
  padding: 0;
}

.discount {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #444444;
}

.buy-button {
  background-color: #00233c;
  color: #fff;
  width: 90%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5%;
}
</style>
