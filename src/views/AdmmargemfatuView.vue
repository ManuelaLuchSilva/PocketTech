<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarAdm from '../components/NavbarAdm.vue'
import Footerbar from '../components/FooterBar.vue'
import { ref, computed } from 'vue'

const entries = ref([
{
    id: 1,
    categoria: 'Reparo de Tela',
    valor: 150,
    data: '01-08-2024'
  },
  {
    id: 2,
    categoria: 'Troca de Bateria',
    valor: 80,
    data: '02-08-2024'
  },
  {
    id: 3,
    categoria: 'Reparo de Botões',
    valor: 100,
    data: '05-08-2024'
  },
  {
    id: 4,
    categoria: 'Limpeza Interna',
    valor: 60,
    data: '08-08-2024'
  },
  {
    id: 5,
    categoria: 'Substituição de Câmera',
    valor: 120,
    data: '10-08-2024'
  },
  {
    id: 6,
    categoria: 'Instalação de Película',
    valor: 30,
    data: '12-08-2024'
  },
  {
    id: 7,
    categoria: 'Acessórios Personalizados',
    valor: 45,
    data: '15-08-2024'
  },
  {
    id: 8,
    categoria: 'Conserto de Conector de Carregamento',
    valor: 90,
    data: '17-08-2024'
  },
  {
    id: 9,
    categoria: 'Configuração e Atualização de Software',
    valor: 50,
    data: '20-08-2024'
  },
  {
    id: 10,
    categoria: 'Substituição de Placa-mãe',
    valor: 200,
    data: '25-08-2024'
  }
])

const exits = ref({
  Custos: 0,
  Despesas: 0,
  'Outras Saídas': 0
})

const valorBruto = computed(() => {
  let totalEntradas = 0
  for (const value of Object.values(entries.value)) {
    totalEntradas += parseFloat(value)
  }
  return totalEntradas.toFixed(2)
})

const valorLiquido = computed(() => {
  let totalSaidas = 0
  for (const value of Object.values(exits.value)) {
    totalSaidas += parseFloat(value)
  }
  return (valorBruto.value - totalSaidas).toFixed(2)
})


const selectedDate = ref(null)

const filteredEntries = computed(() => {
  if (!selectedDate.value) {
    return entries.value
  }
  return entries.value.filter((entry) => entry.data === selectedDate.value)
})

const filteredExits = computed(() => {
  if (!selectedDate.value) {
    return exits.value
  }
  return exits.value.filter((exit) => exit.data === selectedDate.value)
})
</script>

<template>
  <NavbarAdm/>
  <div class="container">
    <SidebarAdm />
    <div class="header">
      <h1>Gere a margem de faturamento</h1>
    </div>
    <div class="content">
      <div class="data">
        <label for="data">Informe a data:</label>
        <input type="date" v-model="selectedDate" />
      </div>
      <div class="table-container">
        <h2>Entradas</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in filteredEntries" :key="entry.id">
              <td>{{ entry.categoria }}</td>
              <td>{{ entry.valor }}</td>
              <td>{{ entry.data }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-container">
        <h2>Saídas</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="exit in filteredExits" :key="exit.id">
              <td>{{ exit.categoria }}</td>
              <td>{{ exit.valor }}</td>
              <td>{{ exit.data }}</td>
            </tr>
          </tbody>
        </table>
        <div class="result">
      <h3>Valor Bruto</h3>
      <span>{{ valorBruto }}</span>
    </div>
    <div class="result">
      <h3>Valor Líquido</h3>
      <span>{{ valorLiquido }}</span>
    </div>
      </div>
    </div>
  </div>
  <Footerbar/>
</template>

<style scoped>
.container {
  display: flex;
  width: calc(100% - 16rem);
}

.content {
  margin-top: 60px;
  margin-left: 3rem;
  display: grid;
  width: 100%;
}

.data {
  display: flex;
  width: 200px;
}

.values {
  display: flex;
  gap: 20px;
  flex-grow: 1;
}

.value-box {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.results {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.result {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
