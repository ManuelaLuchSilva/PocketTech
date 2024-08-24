<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarLogin from '../components/NavbarLogin.vue'

import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const vendas = ref([150, 230, 224, 218, 135, 147, 260, 134, 100, 138, 400])

const chartContainer = ref(null)

onMounted(() => {
  const myChart = echarts.init(chartContainer.value, null, {
    renderer: 'canvas',
    useDirtyRect: false
  })

  const option = {
    xAxis: {
      type: 'category',
      data: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ]
    },
    yAxis: {
      name: 'Vendas',
      type: 'value'
    },
    series: [
      {
        data: vendas.value,
        type: 'line'
      }
    ]
  }

  myChart.setOption(option)

  window.addEventListener('resize', () => {
    myChart.resize()
  })
})
let vendasTotal = 0
for (const value of vendas.value) {
  vendasTotal += value
}
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
        <img src="" alt="" />
        <div>
          <h4>Vendas:</h4>
          <p>Total de {{ vendasTotal }} vendas</p>
        </div>
      </div>
      <div class="grafico">
        <div ref="chartContainer" class="chart-container"></div>
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

.content > div {
  grid-column: span 2;
  background-color: #d9d9d9;
  display: flex;
  border-radius: 10px;
  min-width: 500px;
  margin-bottom: 50px;
  min-height: 100px;
}

.grafico {
  grid-column: span 4 !important;
  min-height: 150px;
  width: 75%;
  display: flex;
  align-items: flex-end;
  color: black;
  text-align: center;
}
.chart-container {
  width: 100%;
  height: 400px;
}

.content img {
  margin: 20px;
  height: calc(100% - 40px);
}
</style>
