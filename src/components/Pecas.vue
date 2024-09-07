<script setup>
import { reactive, ref } from 'vue'

const itens = ref([
  {
    nome: 'Tela LCD para iPhone 12',
    quantidade: 8,
    lote: 2023001,
    codigo: 10001,
    fornecedor: 'TechParts'
  },
  {
    nome: 'Bateria para Samsung Galaxy S21',
    quantidade: 12,
    lote: 2023002,
    codigo: 10002,
    fornecedor: 'MobileFix'
  },
  {
    nome: 'Câmera Traseira para iPhone 11',
    quantidade: 5,
    lote: 2023003,
    codigo: 10003,
    fornecedor: 'akdjh'
  }
]);


const novoItem = reactive({
  nome: '',
  quantidade: 0,
  lote: 0,
  codigo: 0,
  fornecedor: ''
})

const adicionarItem = () => {
  itens.value.push({ ...novoItem })

  novoItem.nome = ''
  novoItem.quantidade = 0
  novoItem.lote = 0
  novoItem.codigo = 0
  novoItem.fornecedor = ''
}
</script>

<template>
  <div class="tabela">
    <form class="addTabela" @submit.prevent="adicionarItem">
      <div class="input-container">
        <input v-model="novoItem.nome" type="text" placeholder="Insira o nome da peça" required />
        <input
          v-model.number="novoItem.quantidade"
          type="number"
          placeholder="Insira a quantidade"
          required
        />
        <input v-model.number="novoItem.lote" type="number" placeholder="Insira o lote" required />
        <input
          v-model.number="novoItem.codigo"
          type="number"
          placeholder="Insira o código"
          required
        />
        <input v-model="novoItem.fornecedor" type="text" placeholder="Insira fornecedor" required />
      </div>
      <button type="submit">Adicionar</button>
    </form>
    <div>
      <p>Estoque de Peças</p>
      <table>
        <thead>
          <tr>
            <th>Nome da Peça</th>
            <th>Quantidade</th>
            <th>Lote</th>
            <th>Código</th>
            <th>Fornecedor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in itens" :key="item.codigo">
            <td>{{ item.nome }}</td>
            <td>{{ item.quantidade }}</td>
            <td>{{ item.lote }}</td>
            <td>{{ item.codigo }}</td>
            <td>{{ item.fornecedor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  text-align: left;
  height: auto;
}
th {
  height: 30px;
  text-align: center;
}

table {
  background-color: #d9d9d9;
  width: 100%;
  height: auto;
  border-collapse: collapse;
}
div p {
  font-size: 20px;
  color: black;
  text-align: center;
}
form {
  margin-bottom: 10px;
}
input {
  margin: 5px;
  margin-top: 30px;
}
button {
  align-self: center;
}
</style>
