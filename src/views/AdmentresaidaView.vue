<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarAdm from '../components/NavbarAdm.vue'
import Footerbar from '../components/FooterBar.vue'
import { ref, computed } from 'vue'

const entries = ref([
  { id: 1, date: '2024-01-15', description: 'Troca de tela de smartphone', value: 480 },
  { id: 2, date: '2024-02-20', description: 'Compra de capa protetora para celulares', value: 300 },
  { id: 3, date: '2024-03-05', description: 'Substituição de bateria de celular', value: 580 },
  { id: 4, date: '2024-04-12', description: 'Instalação de película de vidro temperado', value: 300 },
  { id: 5, date: '2024-05-23', description: 'Reparo de botão de volume em smartphone', value: 90 },
  { id: 6, date: '2024-06-30', description: 'Compra de carregador rápido USB-C', value: 65 },
  { id: 7, date: '2024-07-10', description: 'Reparo de conector de carregamento', value: 85 },
  { id: 8, date: '2024-08-18', description: 'Venda de fones de ouvido Bluetooth', value: 150 },
  { id: 9, date: '2024-09-25', description: 'Substituição de câmera traseira de celular', value: 250 },
  { id: 10, date: '2024-10-07', description: 'Compra de suporte para carro com carregador sem fio', value: 185 },
  { id: 11, date: '2024-11-12', description: 'Instalação de chip de memória para smartphone', value: 130 },
  { id: 12, date: '2024-12-01', description: 'Venda de protetores de tela para vários modelos', value: 700 },
  { id: 13, date: '2024-12-15', description: 'Reparo de tela quebrada de tablet', value: 220 },
  { id: 14, date: '2024-12-25', description: 'Compra de bateria externa para celulares', value: 95 },
  { id: 15, date: '2025-01-10', description: 'Substituição de conector USB de smartphone', value: 50 },
  { id: 16, date: '2025-01-20', description: 'Venda de cabos de carregamento múltiplos', value: 80 },
  { id: 17, date: '2025-02-05', description: 'Reparo de botão de início em smartphone', value: 110 },
  { id: 18, date: '2025-02-15', description: 'Compra de adaptadores de fone de ouvido', value: 65 },
  { id: 19, date: '2025-03-25', description: 'Instalação de novo sistema operacional em tablet', value: 200 },
  { id: 20, date: '2025-04-10', description: 'Venda de estojos de proteção para celulares', value: 120 }
]);

const exits = ref([
  { id: 1, date: '2024-01-15', description: 'Compra de ferramentas para conserto de celulares', value: 300 },
  { id: 2, date: '2024-02-20', description: 'Aquisição de peças de reposição para smartphones', value: 450 },
  { id: 3, date: '2024-03-05', description: 'Pagamento de licença de software para diagnóstico de celulares', value: 200 },
  { id: 4, date: '2024-04-12', description: 'Compra de estoque de película de vidro temperado', value: 120 },
  { id: 5, date: '2024-05-23', description: 'Despesa com treinamento em reparo de smartphones', value: 250 },
  { id: 6, date: '2024-06-30', description: 'Compra de materiais para limpeza e manutenção de celulares', value: 80 },
  { id: 7, date: '2024-07-10', description: 'Pagamento de aluguel de espaço para loja de acessórios', value: 1000 },
  { id: 8, date: '2024-08-18', description: 'Aquisição de fones de ouvido Bluetooth em estoque', value: 200 },
  { id: 9, date: '2024-09-25', description: 'Compra de ferramentas de precisão para reparo', value: 150 },
  { id: 10, date: '2024-10-07', description: 'Despesas gerais de operação da loja', value: 350 }
]);


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
  width: calc(100% - 20rem);
}

.content {
  margin-top: 60px;
  margin-left: 3rem;
  display: grid;
  width: auto;
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
  width: 80%;
}
.date {
  width: 100%;
  padding: 3px;
  background-color: white;
}

.tables-container {
  display: flex;
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
