<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarAdm from '../components/NavbarAdm.vue'
import Footerbar from '../components/FooterBar.vue'
import { ref, computed } from 'vue'

const entries = ref([
  { id: 1, date: '15-01-2024', description: 'Troca de tela de smartphone', value: 180 },
  { id: 2, date: '20-02-2024', description: 'Compra de capa protetora para celulares', value: 45 },
  { id: 3, date: '05-03-2024', description: 'Substituição de bateria de celular', value: 120 },
  {
    id: 4,
    date: '12-04-2024',
    description: 'Instalação de película de vidro temperado',
    value: 35
  },
  { id: 5, date: '23-05-2024', description: 'Reparo de botão de volume em smartphone', value: 90 },
  { id: 6, date: '30-06-2024', description: 'Compra de carregador rápido USB-C', value: 55 },
  { id: 7, date: '10-07-2024', description: 'Reparo de conector de carregamento', value: 75 },
  { id: 8, date: '18-08-2024', description: 'Venda de fones de ouvido Bluetooth', value: 150 },
  {
    id: 9,
    date: '25-09-2024',
    description: 'Substituição de câmera traseira de celular',
    value: 200
  },
  {
    id: 10,
    date: '07-10-2024',
    description: 'Compra de suporte para carro com carregador sem fio',
    value: 85
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
    value: 70
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
    value: 600
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

const selectedDate = ref(null)

const filteredEntries = computed(() => {
  if (!selectedDate.value) {
    return entries.value
  }
  return entries.value.filter((entry) => entry.date === selectedDate.value)
})

const filteredExits = computed(() => {
  if (!selectedDate.value) {
    return exits.value
  }
  return exits.value.filter((exit) => exit.date === selectedDate.value)
})
</script>
<template>
  <NavbarAdm />
  <div class="container">
    <SidebarAdm />
    <section class="content">
      <h3>Gere o Faturamento de Entrada/Saída</h3>
      <div class="tableRegistro">
        <div class="input-group">
          <label for="data">Informe a data:</label>
          <div class="date">
            <input type="date" v-model="selectedDate" />
          </div>
        </div>
        <div class="tables-container">
          <div class="table-container">
            <h2>Entradas</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="entry in filteredEntries" :key="entry.id">
                  <td>{{ entry.date }}</td>
                  <td>{{ entry.description }}</td>
                  <td>{{ entry.value }}</td>
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
                  <td>{{ exit.date }}</td>
                  <td>{{ exit.description }}</td>
                  <td>{{ exit.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footerbar />
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
.tableRegistro {
  background-color: #d9d9d9;
}
h3 {
  text-align: center;
  margin: 0;
}

.input-group {
  margin: 40px 0 0 40px;
  display: block;
  align-items: center;
  width: 15rem;
}
input {
  border: 0;
  width: 100%;
}
.date {
  width: 100%;
  padding: 3px;
  background-color: white;
}

.tables-container {
  display: flex;
  gap: 20px;
}

.table-container {
  padding: 10px;
  margin: 40px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
}
</style>
