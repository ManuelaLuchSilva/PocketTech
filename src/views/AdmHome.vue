<script setup>
import NavbarAdm from '../components/NavbarAdm.vue'
import SidebarAdm from '../components/SidebarAdm.vue'
import FooterBar from '../components/FooterBar.vue'
import { ref, computed, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartContainer = ref(null)

onMounted(() => {
  const myChart = echarts.init(chartContainer.value)

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      show: true,
      feature: {
        magicType: { type: ['line', 'bar'] }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: 'R${value}'
      }
    },
    series: [
      {
        type: 'line',
        data: [350, 230, 264, 218, 155, 147, 260, 200, 270, 420, 390, 555]
      }
    ]
  }
  myChart.setOption(option)
})

const entries = ref([
  { id: 1, date: '15-01-2024', description: 'Troca de tela de smartphone', value: 480 },
  { id: 2, date: '20-02-2024', description: 'Compra de capa protetora para celulares', value: 300 },
  { id: 3, date: '05-03-2024', description: 'Substituição de bateria de celular', value: 380 },
  {
    id: 4,
    date: '12-04-2024',
    description: 'Instalação de película de vidro temperado',
    value: 300
  },
  { id: 5, date: '23-05-2024', description: 'Reparo de botão de volume em smartphone', value: 90 },
  { id: 6, date: '30-06-2024', description: 'Compra de carregador rápido USB-C', value: 65 },
  { id: 7, date: '10-07-2024', description: 'Reparo de conector de carregamento', value: 85 },
  { id: 8, date: '18-08-2024', description: 'Venda de fones de ouvido Bluetooth', value: 150 },
  {
    id: 9,
    date: '25-09-2024',
    description: 'Substituição de câmera traseira de celular',
    value: 250
  },
  {
    id: 10,
    date: '07-10-2024',
    description: 'Compra de suporte para carro com carregador sem fio',
    value: 185
  },
  {
    id: 11,
    date: '12-11-2024',
    description: 'Instalação de chip de memória para smartphone',
    value: 130
  },
  {
    id: 12,
    date: '01-12-2024',
    description: 'Venda de protetores de tela para vários modelos',
    value: 300
  },
  { id: 13, date: '15-12-2024', description: 'Reparo de tela quebrada de tablet', value: 220 },
  {
    id: 14,
    date: '25-12-2024',
    description: 'Compra de bateria externa para celulares',
    value: 95
  },
  {
    id: 15,
    date: '10-01-2025',
    description: 'Substituição de conector USB de smartphone',
    value: 50
  },
  {
    id: 16,
    date: '20-01-2025',
    description: 'Venda de cabos de carregamento múltiplos',
    value: 80
  },
  {
    id: 17,
    date: '05-02-2025',
    description: 'Reparo de botão de início em smartphone',
    value: 110
  },
  { id: 18, date: '15-02-2025', description: 'Compra de adaptadores de fone de ouvido', value: 65 },
  {
    id: 19,
    date: '25-03-2025',
    description: 'Instalação de novo sistema operacional em tablet',
    value: 200
  },
  {
    id: 20,
    date: '10-04-2025',
    description: 'Venda de estojos de proteção para celulares',
    value: 120
  }
])

const exits = ref([
  {
    id: 1,
    date: '15-01-2024',
    description: 'Compra de ferramentas para conserto de celulares',
    value: 300
  },
  {
    id: 2,
    date: '20-02-2024',
    description: 'Aquisição de peças de reposição para smartphones',
    value: 450
  },
  {
    id: 3,
    date: '05-03-2024',
    description: 'Pagamento de licença de software para diagnóstico de celulares',
    value: 200
  },
  {
    id: 4,
    date: '12-04-2024',
    description: 'Compra de estoque de película de vidro temperado',
    value: 120
  },
  {
    id: 5,
    date: '23-05-2024',
    description: 'Despesa com treinamento em reparo de smartphones',
    value: 250
  },
  {
    id: 6,
    date: '30-06-2024',
    description: 'Compra de materiais para limpeza e manutenção de celulares',
    value: 80
  },
  {
    id: 7,
    date: '10-07-2024',
    description: 'Pagamento de aluguel de espaço para loja de acessórios',
    value: 1000
  },
  {
    id: 8,
    date: '18-08-2024',
    description: 'Aquisição de fones de ouvido Bluetooth em estoque',
    value: 200
  },
  {
    id: 9,
    date: '25-09-2024',
    description: 'Compra de ferramentas de precisão para reparo',
    value: 150
  },
  {
    id: 10,
    date: '07-10-2024',
    description: 'Despesas gerais de operação da loja',
    value: 350
  }
])
const totalEntriesValue = computed(() => {
  return entries.value.reduce((acc, entry) => acc + entry.value, 0)
})

const totalExitsValue = computed(() => {
  return exits.value.reduce((acc, exit) => acc + exit.value, 0)
})

const netValue = computed(() => {
  return totalEntriesValue.value - totalExitsValue.value
})
const services = computed(() => {
  return Math.max(...entries.value.map((entry) => entry.id))
})
</script>

<template>
  <NavbarAdm />
  <div class="container">
    <SidebarAdm />
    <div class="content">
      <div class="grid-container">
        <div class="box">
          <div class="descricao">
            <h4>Valor líquido</h4>
            <p>R$ {{ totalEntriesValue.toFixed(2) }}</p>
          </div>
        </div>
        <div class="box">
          <div class="descricao">
            <h4>Valor bruto</h4>
            <p>R$ {{ netValue.toFixed(2) }}</p>
          </div>
        </div>
        <div class="box">
          <div class="descricao">
            <h4>Vendas</h4>
            <p>{{ services }}</p>
          </div>
        </div>
        <div ref="chartContainer" class="grafico"></div>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<style scoped>
.container {
  display: flex;
  width: calc(100% - 16rem);
}
.content {
  margin-top: 60px;
  margin-left: 3rem;
  width: 100%;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  padding: 10px;
  justify-content: space-between;
}

.grid-container > div {
  background-color: #d9d9d9;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  margin: 20px;
  align-content: center;
}
.box {
  grid-column: span 3;
}
.descricao {
  font-family: 'Inter', sans-serif;
  width: 100%;
}
.box .descricao {
  margin: 10px auto 10px 60px;
}
.grafico {
  grid-column: 1/6;
  width: 100%;
  height: 400px;
}
</style>
