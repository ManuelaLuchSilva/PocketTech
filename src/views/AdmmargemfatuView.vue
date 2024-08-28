<script setup>
import { ref, computed } from 'vue'

const data = ref(null)

const entradas = ref([
  {
    categoria: 'Reparo de Tela',
    valor: 150,
    data: '2024-08-01'
  },
  {
    categoria: 'Troca de Bateria',
    valor: 80,
    data: '2024-08-02'
  },
  {
    categoria: 'Reparo de Botões',
    valor: 100,
    data: '2024-08-05'
  },
  {
    categoria: 'Limpeza Interna',
    valor: 60,
    data: '2024-08-08'
  },
  {
    categoria: 'Substituição de Câmera',
    valor: 120,
    data: '2024-08-10'
  },
  {
    categoria: 'Instalação de Película',
    valor: 30,
    data: '2024-08-12'
  },
  {
    categoria: 'Acessórios Personalizados',
    valor: 45,
    data: '2024-08-15'
  },
  {
    categoria: 'Conserto de Conector de Carregamento',
    valor: 90,
    data: '2024-08-17'
  },
  {
    categoria: 'Configuração e Atualização de Software',
    valor: 50,
    data: '2024-08-20'
  },
  {
    categoria: 'Substituição de Placa-mãe',
    valor: 200,
    data: '2024-08-25'
  }
])

const saidas = ref({
  Custos: 0,
  Despesas: 0,
  'Outras Saídas': 0
})

const valorBruto = computed(() => {
  let totalEntradas = 0
  for (const value of Object.values(entradas.value)) {
    totalEntradas += parseFloat(value)
  }
  return totalEntradas.toFixed(2)
})

const valorLiquido = computed(() => {
  let totalSaidas = 0
  for (const value of Object.values(saidas.value)) {
    totalSaidas += parseFloat(value)
  }
  return (valorBruto.value - totalSaidas).toFixed(2)
})
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>Gere a margem de faturamento</h1>
    </div>
    <div class="content">
      <div class="data">
        <label for="data">Informe a data:</label>
        <input type="date" id="data" v-model="data" />
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
            <tr v-for="(entrada, index) in entradas" :key="index">
              <td>{{ entrada.categoria }}</td>
              <td>R${{ entrada.valor }}</td>
              <td>{{ entrada.data }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="value-box">
      <h3>Saídas</h3>
      <div class="value" v-for="(value, key) in saidas" :key="key">{{ key }}: {{ value }}</div>
    </div>
  </div>
  <div class="results">
    <div class="result">
      <h3>Valor Bruto</h3>
      <span>{{ valorBruto }}</span>
    </div>
    <div class="result">
      <h3>Valor Líquido</h3>
      <span>{{ valorLiquido }}</span>
    </div>
  </div>
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
