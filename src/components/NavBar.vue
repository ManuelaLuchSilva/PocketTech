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
      <div class="search-box">
        <input type="text" class="search-text" placeholder="O que você está procurando?" />
        <a class="search-btn">
          <img
            class="loupe-blue"
            src="https://s3-alpha-sig.figma.com/img/1beb/9435/c528e02aa8de44f8c825263145507fef?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSnTWJNmc2oMgk2X9nqG-7J624DnD7SCC8SoeM83De7MCo5xrrPM6P~NqD0tQDGeQs36WCufqZI1Ih39~fwZCAvCfKrN-ITT1CbAn6nUaDLwQyY34EAjKYBlHzbYQsW~J58qhSmDYGKh7Rwe7BZWvifRevcZkx0nCGwKgSkp87GyuYxbUdUqYYMNb0cHAMH72k2XUXlrcjkVdDPuGqrpi7mQEmfyIwMLmheTUcQoqPau7XEcM3J5v~Y55VW8fzCBEO9vK7uu~n9Qi1ChvNchiChB~g5gwXcZJB~8ZH-EkDoq0Z5JCNYxKGrTfZzICfv0fOJm4hpKDYPgvMILI5a7hA__"
            alt="lupa"
            width="25"
            height="25"
          />
        </a>
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
      <div class="content-carrinho">
        <img
          src="https://s3-alpha-sig.figma.com/img/b565/45c2/bec94f87a1e197948c3353e614a13646?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwY9-8Gj7edyUH3hhdw5z3Dn1gm3p4S0t9c9ytXMSUpr~COdeJ5ZYcPPGBvRrfog1AE9SEWqCk0gahtTyo42-Vm3HleDs2X5ZWd9DR2k9ASn7SjsBNoo1UmYoY2xCn1aNisCLQqcW9XWmzt6zmJs3au5m4oxM8Rdey1f1lZDDsRZXAWp06aANfoIDqIKpw-GIWmowOUR-f9ra5zqMzWGVA1nDPJMD3NZhUuSSfsu7be0Wq9lG2~H0fJ4Fj67a~MWMrEu4uqGlmyqwvgUWrqo5fS256pvHFoDhHgKYulK2FQCfxBm67jMSru6dYsV0MLBJcTgIk34rBH60mB9FJiXTQ__"
          alt="carrinho"
        />
        <div>
          <div class="carrinho">
            <p id="carrinho">carrinho</p>
            <img
              src="https://s3-alpha-sig.figma.com/img/252c/b48a/eec9414d2421b4929432d0deee61b834?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1aE5iBjdvINEl~VV6789FToOS3~1yO7j5zuZmDVxR5Tdn9g4pl8cWSb0x1HrxrIF5ScNHD1adaDnTxWAzlBM44UujyJ-xT3L3~Rb1liAiv2SGo1H775S04HlkuOYj13YOmVZ1tMYAoR-hNsvpK44QCUFdyHUpDpxaWi8h9hLJ-esNZSN~yxvbQt5lWgQBHCu~QIzSqHl~Up-hJfNlXz9hWHRow85JcwhgIqhaLj9ABBQ6ze5Rt8ATCFogn-kmsaBOmksy9iMNY-WdtJyyyYPtOKBgs9PEdgDV8nB3RB7ngpMTWyDvHA3h6i~tvBuuBCFpIgIiYWQdHEIedN2JapIA__"
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
  margin: 18px 10% 18px 0;
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