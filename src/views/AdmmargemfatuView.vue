<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarAdm from '../components/NavbarAdm.vue'
import Footerbar from '../components/FooterBar.vue'
import { ref, computed } from 'vue'

const entries = ref([
  { id: 1, categoria: 'Reparo de Tela', valor: 150, data: '2024-08-01' },
  { id: 2, categoria: 'Troca de Bateria', valor: 80, data: '2024-08-02' },
  { id: 3, categoria: 'Reparo de Botões', valor: 100, data: '2024-08-05' },
  { id: 4, categoria: 'Limpeza Interna', valor: 60, data: '2024-08-08' },
  { id: 5, categoria: 'Substituição de Câmera', valor: 120, data: '2024-08-10' },
  { id: 6, categoria: 'Instalação de Película', valor: 30, data: '2024-08-12' },
  { id: 7, categoria: 'Acessórios Personalizados', valor: 45, data: '2024-08-15' },
  { id: 8, categoria: 'Conserto de Conector de Carregamento', valor: 90, data: '2024-08-17' },
  { id: 9, categoria: 'Configuração e Atualização de Software', valor: 50, data: '2024-08-20' },
  { id: 10, categoria: 'Substituição de Placa-mãe', valor: 200, data: '2024-08-25' },
  { id: 11, categoria: 'Venda de Fones de Ouvido', valor: 150, data: '2024-09-01' },
  { id: 12, categoria: 'Venda de Carregadores Rápidos', valor: 75, data: '2024-09-05' },
  { id: 13, categoria: 'Venda de Cases para Smartphone', valor: 40, data: '2024-09-10' },
  { id: 14, categoria: 'Venda de Baterias Externas', valor: 90, data: '2024-09-15' },
  { id: 15, categoria: 'Reparo de Botão de Volume', valor: 85, data: '2024-09-20' },
  { id: 16, categoria: 'Venda de Protetores de Tela', valor: 50, data: '2024-09-25' },
  { id: 17, categoria: 'Venda de Estojos para Celulares', valor: 120, data: '2024-10-01' },
  { id: 18, categoria: 'Venda de Adaptadores de Fone', valor: 30, data: '2024-10-05' },
  { id: 19, categoria: 'Venda de Suporte para Veículo', valor: 80, data: '2024-10-10' },
  { id: 20, categoria: 'Configuração de Sistemas Operacionais', valor: 180, data: '2024-10-15' }
])

const exits = ref([
  { id: 1, date: '2024-01-15', description: 'Compra de ferramentas para conserto de celulares', value: 30 },
  { id: 2, date: '2024-02-20', description: 'Aquisição de peças de reposição para smartphones', value: 45 },
  { id: 3, date: '2024-03-05', description: 'Pagamento de licença de software para diagnóstico de celulares', value: 20 },
  { id: 4, date: '2024-04-12', description: 'Compra de estoque de película de vidro temperado', value: 20 },
  { id: 5, date: '2024-05-23', description: 'Despesa com treinamento em reparo de smartphones', value: 50 },
  { id: 6, date: '2024-06-30', description: 'Compra de materiais para limpeza e manutenção de celulares', value: 80 },
  { id: 7, date: '2024-07-10', description: 'Pagamento de aluguel de espaço para loja de acessórios', value: 800 },
  { id: 8, date: '2024-08-18', description: 'Aquisição de fones de ouvido Bluetooth em estoque', value: 300 },
  { id: 9, date: '2024-09-25', description: 'Compra de ferramentas de precisão para reparo', value: 150 },
  { id: 10, date: '2024-10-07', description: 'Despesas gerais de operação da loja', value: 50 }
])


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


const totalEntriesValue = computed(() => {
  return filteredEntries.value.reduce((acc, entry) => acc + entry.valor, 0)
})

</script>

<template>
  <NavbarAdm />
  <div class="container">
    <SidebarAdm />
    <div class="content">
      <div class="header">
        <h1>Gere a margem de faturamento</h1>
      </div>
      <div class="data">
        <label for="data">Informe a data:</label>
        <input type="date" v-model="selectedDate" />
      </div>
      <div class="tabelas">
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
        <div class="valores">
          <div class="result">
            <h4>Valor Bruto</h4>
            <p>R$ {{ totalEntriesValue }}</p>
          </div>
          <div class="result">
            <h4>Valor Líquido</h4>
            <p>R${{ totalEntriesValue - 1545 }}</p>
          </div>
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
  width: 100%;
  background-color: #d9d9d9;
}
.content>div {
  margin-left: 2rem;
}
.tabelas {
  display: flex;
}
h4{
  margin-top: 0;
}
.table-container{
  background-color: #F4F4F4;
  border-radius: 5px;
  padding: 10px;
  margin-right: 40px;
}
.data {
  width: 200px;
  margin-bottom: 20px;
}

td{
  padding-right: 20px;
}

.valores {
  display: grid;
  flex-direction: row;
  margin-top: 80px;
  margin-right: 40px;
}

.result {
  padding: 10px;
  margin-top: 20px;
  background-color: #F4F4F4;
  border-radius: 5px;
  width: 200px;
  height: 80px;
}
</style>
