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
          src="https://s3-alpha-sig.figma.com/img/9a5e/a57f/3aa6723342957096838d4315c5812e81?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJm7LpxfsKKyIYV5frJN3PsDUzmUzsthveXrUublSULqlMcm-cIQwUBS8vdsCKISdngj8EWq0ToQtAItAasFZYo9tePu3E8pXarFV-ko6focc~l9b5-Z4AZUl6RW5Oh~kQ351zoCfPsMj4gpn4dF-HtbZ-tia6ezt3kqMByADTpCao5A5qetcu2cyM61dxZ6-aft7VsJqAax0c8isGVlJaE01Xk69K71Q~VjClOTITV7ufd2XlUyQQRY-wKaDF~a0bLyb3It4Oc4cX19lPcsy-mQpApvSATqvqJLffN0Ihq6DECdYArbNt-hXf7C3p4LwDC5g4-vvaO30qwCtFvOoQ__"
          alt="cardapio"
        />
      </div>
      <div class="img-principal">
        <img
          src="https://s3-alpha-sig.figma.com/img/142c/ba25/11cee177fed5d2d85490b612476dedbb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ps5Kxq-At7yGw7ByZe6m1BQXycmevDe2oE4nlbkYq3RhiKX20xbyaTbRn8XCZSe6zl9Z4cmhQJ3HMNGN~phEoiQEUfSJ7NWXaguqlbmOd~AIHnBT0F5IiQ6kAgfcMT4mfd8qOI-CxWKslZWgZ1S8pFz27iDjFNaOHLBVwnC2zj7bXXVyyXQoOgowKntMT2Go5aojjqB7klWFMMeTGOVyOfYAvgOlzTiYqAIThw9GAPgTJOiJW~oPRf1dQnPZHdmjw1E7MRCVhF1fEoYIGWN5qFgqDX~BfgtsFA1nf1zEqayfAPmBV~GGGizMjz1w0ZkbTs9zTdHAubn-ZEIXYsASxw__"
          alt="logo"
        />
      </div>
      <div class="user">
        <img
          src="https://s3-alpha-sig.figma.com/img/20c6/4be9/bf1cf051a4c44c30a9fa7c009141e7af?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYvdoqy3gVui~0eKRqpJ4LflUmVLFUeM25eGJRukwxt9X6DoSGRDHcR5~Iicpj8UzfiAQlXda1Jl7tgoAV4wl1hV33zoCcbSYDUHabBTFzz9ux32frzQDIrsvjOYAy0cIkf4oNj9uVTn9ukxM3UgeQFAem6hzbuJ9VFO4HBe5WeKs2~CEkktt2KAqL-se6P5gkCN5ZNTM27aIMZdhW1ODugSjzA-8PdQ6V~Lr1nrpg7cLDyiq5vPYB~NZ1xcSgrPTri8zg3SulOGjzTW7BUMQaxUCgWAMLlLT2prq89PC0Fi9btbBphSfuMU~hXyw4hwFNUGtrfLAlo7qx5uFH~--w__"
          alt="foto usuario"
        />
        <div class="user-cadastro">
          <p class="minha-conta">MINHA CONTA</p>
          <p class="entrar">Entrar/Cadastro</p>
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
.img-principal{
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