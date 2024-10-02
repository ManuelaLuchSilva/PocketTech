<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav>
    <div class="container">
      <div class="img-cardapio">
        <RouterLink to="/admhome"><img src="../../imgs/cardapio.png" alt="cardapio" /></RouterLink>
      </div>
      <div class="img-principal">
        <RouterLink to="/"> <img src="../../imgs/logo.png" alt="logo" /></RouterLink>
      </div>
      <div class="user">
        <img src="../../imgs/img-usuario.png" alt="foto usuario" />
        <div class="user-cadastro">
          <p class="minha-conta">ADM</p>
          <RouterLink to="/login" class="entrar">Trocar de conta</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Danfo&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Major+Mono+Display&family=Noto+Serif+JP:wght@200..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.container {
  display: flex;
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
.img-principal {
  margin-right: 70%;
}
.img-cardapio {
  margin: 15px 50px 15px 40px;
}
.img-cardapio img {
  width: 45px;
  height: 45px;
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
</style>
