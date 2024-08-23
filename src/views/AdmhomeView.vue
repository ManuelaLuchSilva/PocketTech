<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarLogin from '../components/NavbarLogin.vue'
import { reactive } from 'vue';

const grafico = reactive([

  {
    id: 1,
    valor: 1000,
    mes: 'janeiro'
  },
  {
    id: 2,
    valor: 1000,
    mes: 'fevereiro'
  },
  {
    id: 3,
    valor: 1000,
    mes: 'março'
  },
  {
    id: 4,
    valor: 1000,
    mes: 'abril'
  },
  {
    id: 5,
    valor: 1000,
    mes: 'maio'
  },
  {
    id: 6,
    valor: 100000,
    mes: 'junho'
  },
])
</script>
<template>
  <NavbarLogin />
  <div class="container">
    <SidebarAdm />
    <section class="content">
      <div class="valorLiq">
        <img src="" alt="img" />
        <div>
          <h4>Valor líquido</h4>
          <p>R$ {{}}</p>
        </div>
      </div>

      <div class="valorBruto">
        <img src="" alt="img" />
        <div>
          <h4>Valor bruto</h4>
          <p>R$ {{}}</p>
        </div>
      </div>

      <div class="vendas">
        <img src="" alt="">
        <div>
          <h4>Vendas</h4>
          <p>{{ }}</p>
        </div>
      </div>
      <div class="barra">
        <div class="grafico" v-for="produto in grafico" :key="produto.id">
          <h5>{{ produto.valor }}</h5>
          <div class="grafico1"></div>
          <p>{{ produto.mes }}</p>
        </div>
        <!-- https://vue-echarts.dev/ -->
      </div>
    </section>
  </div>
</template>
<style scoped>
.container {
  display: flex;
}

.content {
  margin-top: 60px;
  width: calc(100% - 16rem);
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-around;
}

.content>div {
  grid-column: span 2;
  background-color: #d9d9d9;
  display: flex;
  border-radius: 10px;
  min-width: 500px;
  margin-bottom: 50px;
  min-height: 100px;
}

.barra {
  background-color: #d9d9d9;
  grid-column: span 4 !important;
  min-height: 150px;
  width: 75%;
  display: flex;
  align-items: flex-end;
  color: black;
  text-align: center;
}


.content img {
  margin: 20px;
  height: calc(100% - 40px);
}

.grafico:not(.grafico:first-child) {
  margin-left: 0px !important;
}

.grafico {
  margin-left: 40px;
}

.grafico1 {
  height: 100px;
  width: 50px;
  margin: 5px;
  background-color: blue;
}
</style>
