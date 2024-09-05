<script setup>
import { reactive } from 'vue'


const Produtos = reactive([{ tipo: 'Manutenção', nome: 'Conserto tela', preco: 100.0 }])
const quantProduto = Produtos.length
</script>
<template>
  <nav>
    <div class="container">
      <div class="img-cardapio">
        <img
          src="../assets/imgs/cardapio.png"
          alt="cardapio"
        />
      </div>
      <div class="img-principal">
        <img
          src="../assets/imgs/logo.png"
          alt="logo"
        />
      </div>
      <div class="search-box">
        <input type="text" class="search-text" placeholder="O que você está procurando?" />
        <a class="search-btn">
          <img
            class="loupe-blue"
            src="../assets/imgs/lupa.png"
            alt="lupa"
            width="25"
            height="25"
          />
        </a>
      </div>
      <div class="user">
        <img
          src="../assets/imgs/img-usuario.png"
          alt="foto usuario"
        />
        <div class="user-cadastro">
          <p class="minha-conta">MINHA CONTA</p>
          <RouterLink to="/login">entrar/cadastrar</RouterLink>
        </div>
      </div>
      <div class="content-carrinho">
        <img
          src="../assets/imgs/carrinho.png"
          alt="carrinho"
        />
        <div>
          <div class="carrinho">
            <p id="carrinho">carrinho</p>
            <img
              src="../assets/imgs/setaSimples.png"
              alt="seta" 
            />
          </div>
          <p id="produtos">{{ quantProduto }} Produtos</p>
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
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  align-items: center;
  border: 0;
  outline: 0;
  margin-left: 10px;
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
}
a{
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
  height: 20px;
}
.carrinho img {
  width: 10px;
  height: 10px;
  rotate: 90deg;
  margin-top: 12px;
}
.carrinho #carrinho {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-top: 5px;
  color: white;
}
#produtos {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-top: 10px;
  margin-left: 3px;
  color: white;
}
</style> 