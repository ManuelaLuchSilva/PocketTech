<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarAdm from '../components/NavbarAdm.vue'
import Footerbar from '../components/FooterBar.vue'
import { ref, computed } from 'vue'
import { store } from '../store/store.js'

const clients = computed(() => store.clients)

function top10ClientsByServices(clients) {
  const sortedClients = [...clients].sort((a, b) => b.services - a.services)
  const top10 = []
  let count = 0
  for (const client of sortedClients) {
    if (count < 10) {
      top10.push(client)
      count++
    } else {
      break
    }
  }
  return top10
}

const top10Clients = computed(() => top10ClientsByServices(clients.value))

const searchQueryName = ref('')
const searchQueryCpf = ref('')

const filteredClients = computed(() => {
  return clients.value.filter((client) => {
    const nameMatches =
      client.name.toLowerCase().includes(searchQueryName.value.toLowerCase()) ||
      client.lastName.toLowerCase().includes(searchQueryName.value.toLowerCase())
    const cpfMatches = client.cpf.includes(searchQueryCpf.value)
    return (
      (searchQueryName.value === '' || nameMatches) && (searchQueryCpf.value === '' || cpfMatches)
    )
  })
})
</script>

<template>
  <NavbarAdm />
  <div class="container">
    <SidebarAdm />
    <section class="content">
      <div>
        <div class="table-container">
          <table>
            <thead>
              <tr class="title">
                <th>&nbsp;</th>
                <th>Principais Clientes</th>
                <th>&nbsp;</th>
              </tr>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Quantidade de serviços prestados</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="client in top10Clients" :key="client.cpf">
                <td>{{ client.name }} {{ client.lastName }}</td>
                <td>{{ client.cpf }}</td>
                <td>{{ client.services }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="search-container">
          <div class="search-box">
            <input type="text" v-model="searchQueryName" placeholder="Informe o nome do cliente" />
            <img
              class="loupe-blue"
              src="../../public/imgs/lupa.png"
              alt="lupa"
              width="25"
              height="25"
            />
          </div>
          <div class="search-box">
            <input type="text" v-model="searchQueryCpf" placeholder="Informe o CPF do cliente" />
            <img
              class="loupe-blue"
              src="../../public/imgs/lupa.png"
              alt="lupa"
              width="25"
              height="25"
            />
          </div>
        </div>
        
        <div class="table-container">
          <table>
            <thead>
              <tr class="title">
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Clientes</th>
              </tr>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Telefone</th>
                <th>CPF</th>
                <th>Endereço</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(client, index) in filteredClients" :key="index">
                <td>{{ client.name }}</td>
                <td>{{ client.lastName }}</td>
                <td>{{ client.phone }}</td>
                <td>{{ client.cpf }}</td>
                <td>{{ client.address }}</td>
              </tr>
            </tbody>
          </table>
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

.table-container {
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #ccc;
  display: flex;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.title th {
  border: 0 !important;
}

th,
td {
  padding: 10px;
  text-align: center;
  border-top: 1px solid black;
}

td:not(:last-child),
th:not(:last-child) {
  border-right: 1px solid black;
}

.search-box {
  width: 56%;
  height: 34px;
  margin: 18px 0;
  display: flex;
  align-items: center;
  padding: 1px 5px;
  background-color: #fff;
  border-radius: 10px;
}

.search-box:not(:last-child) {
  margin-right: 10% !important;
}

input {
  width: calc(100% - 28px);
  background-color: none;
  color: #898989;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  border: 0 !important;
  outline: 0;
  margin-left: 10px;
}

.search-box img {
  width: 28px;
  height: 27px;
}

.search-box input::placeholder {
  color: #898989;
  margin: 8px 0px 8px 40px;
}

.search-container {
  display: flex;
  margin-bottom: 20px;
}

.search-container input {
  padding: 8px;
  border: 1px solid #ccc;
}
</style>
