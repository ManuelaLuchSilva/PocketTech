<script setup>
import { store } from '../store/store.js'
import { ref, computed } from 'vue'

const isCartMenuVisible = ref(false)

const toggleCartMenu = () => {
  isCartMenuVisible.value = !isCartMenuVisible.value
}

const userName = computed(() => store.user.name)
</script>
<template>
  <nav>
    <div class="container">
      <div class="img-cardapio">
        <img src="../../public/imgs/cardapio.png" alt="cardapio" />
      </div>
      <div class="img-principal">
        <img src="../../public/imgs/logo.png" alt="logo" />
      </div>
      <div class="search-box">
        <input type="text" class="search-text" placeholder="O que você está procurando?" />
        <div class="search-btn">
          <img class="loupe-blue" src="../../public/imgs/lupa.png" alt="lupa" width="25" height="25" />
        </div>
      </div>
      <div class="user">
        <img src="../../public/imgs/img-usuario.png" alt="foto usuario" />
        <div class="user-cadastro" v-if="userName">
          <p class="minha-conta">Olá {{ userName }}</p>
          <RouterLink to="/login">Trocar de conta</RouterLink>
        </div>
        <div class="user-cadastro" v-else>
          <p class="minha-conta">MINHA CONTA</p>
          <RouterLink to="/login">Entrar/Cadastrar</RouterLink>
        </div>
      </div>
      <div class="content-carrinho" @click="toggleCartMenu">
        <img src="../../public/imgs/carrinho.png" alt="carrinho" />
        <div>
          <div class="carrinho">
            <p id="carrinho">carrinho</p>
            <img src="../../public/imgs/setaSimples.png" alt="seta" />
          </div>
          <p id="produtos">{{ store.cartCount }} Produtos</p>
        </div>
        <div v-if="isCartMenuVisible" class="cart-dropdown">
          <ul>
            <li v-for="(product, index) in store.cart" :key="index">
              {{ product.name }} - R${{ product.price }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Danfo&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Major+Mono+Display&family=Noto+Serif+JP:wght@200..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.container {
  display: flex;
  justify-content: space-between;
}

nav {
  background-color: #0a163a;
  width: 100%;
  height: 75px;
  top: 0;
  margin: 0;
}
.img-principal img {
  width: 170px;
}
.img-cardapio {
  margin: 15px 50px 15px 40px;
}
.img-cardapio img {
  width: 45px;
  height: 45px;
}
.search-box {
  width: 56%;
  height: 34px;
  opacity: 0px;
  margin: 18px 15px 18px 0;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1px 5px;
  position: relative;
  background-color: #fff;
  border-radius: 60px;
}
.search-text {
  width: calc(100% - 28px);
  height: 34px;
  border-radius: 60px;
  background-color: none;
  color: #898989;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  align-items: center;
  border: 0;
  outline: 0;
  margin-left: 10px;
}
.search-box:hover .search-btn img {
  opacity: 0.7;
}
.search-box input::placeholder {
  color: #898989;
  margin: 8px 0px 8px 40px;
}
.search-btn {
  width: 28px;
  height: 27px;
}

.user {
  width: auto;
  display: flex;
  align-items: center;
}
.user img,
p {
  margin-right: 10px;
}
.user img {
  width: 40px;
}
.user-cadastro {
  color: white;
  text-decoration: none;
  line-height:40%;
  margin-bottom:5px;
}
a {
  text-decoration: none;
  color: white;
}
.user-cadastro .minha-conta {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 200;
  text-align: left;
}
.user-cadastro .entrar {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 200;
  text-align: left;
}
.content-carrinho {
  display: flex;
  margin: 8px;
  border-radius: 8px;
  opacity: 0px;
  padding-right: 10px;
  background: #005188db;
}
.content-carrinho > img {
  width: 20px;
  height: 20px;
  margin: 20px 5px 0 5px;
}
.carrinho {
  display: flex;
  height: 17px;
}
.carrinho img {
  width: 10px;
  height: 10px;
  rotate: 90deg;
  margin-top: 16px;
}
.carrinho #carrinho {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-top: 10px;
  margin-left: 5px;
  color: white;
}
#produtos {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-top: 14px;
  margin-left: 3px;
  color: white;
}
.cart-dropdown {
  background-color: white;
  border: 1px solid #ddd;
  position: absolute;
  right: 0;
  top: 80px;
  width: 250px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 5px;
  padding: 10px;
}

.cart-dropdown ul {
  list-style-type: none;
  padding: 0;
}

.cart-dropdown li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.cart-dropdown li:last-child {
  border-bottom: none;
}
</style>
