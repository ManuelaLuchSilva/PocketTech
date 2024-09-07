<script setup>
import SidebarAdm from '../components/SidebarAdm.vue';
import NavbarAdm from '../components/NavbarAdm.vue'
import Footerbar from '../components/FooterBar.vue'
import { ref, computed } from 'vue'

const clients = ref([
  {
    name: 'João',
    lastName: 'Silva',
    cpf: '123.456.789-00',
    services: 5,
    address: 'Rua A, 123',
    phone: '(11) 99999-1111'
  },
  {
    name: 'Maria',
    lastName: 'Santos',
    cpf: '987.654.321-00',
    services: 2,
    address: 'Rua B, 456',
    phone: '(21) 98888-2222'
  },
  {
    name: 'Pedro',
    lastName: 'Oliveira',
    cpf: '111.222.333-00',
    services: 1,
    address: 'Rua C, 789',
    phone: '(31) 97777-3333'
  },
  {
    name: 'Ana',
    lastName: 'Costa',
    cpf: '234.567.890-12',
    services: 4,
    address: 'Rua D, 101',
    phone: '(41) 96666-4444'
  },
  {
    name: 'Carlos',
    lastName: 'Pereira',
    cpf: '345.678.901-23',
    services: 3,
    address: 'Rua E, 202',
    phone: '(51) 95555-5555'
  },
  {
    name: 'Fernanda',
    lastName: 'Almeida',
    cpf: '456.789.012-34',
    services: 6,
    address: 'Rua F, 303',
    phone: '(61) 94444-6666'
  },
  {
    name: 'Ricardo',
    lastName: 'Lima',
    cpf: '567.890.123-45',
    services: 2,
    address: 'Rua G, 404',
    phone: '(71) 93333-7777'
  },
  {
    name: 'Juliana',
    lastName: 'Martins',
    cpf: '678.901.234-56',
    services: 7,
    address: 'Rua H, 505',
    phone: '(81) 92222-8888'
  },
  {
    name: 'Eduardo',
    lastName: 'Souza',
    cpf: '789.012.345-67',
    services: 1,
    address: 'Rua I, 606',
    phone: '(91) 91111-9999'
  },
  {
    name: 'Patricia',
    lastName: 'Mendes',
    cpf: '890.123.456-78',
    services: 3,
    address: 'Rua J, 707',
    phone: '(02) 90000-0000'
  },
  {
    name: 'Luiz',
    lastName: 'Oliveira',
    cpf: '901.234.567-89',
    services: 5,
    address: 'Rua K, 808',
    phone: '(03) 89999-1111'
  },
  {
    name: 'Roberta',
    lastName: 'Ferreira',
    cpf: '012.345.678-90',
    services: 4,
    address: 'Rua L, 909',
    phone: '(04) 88888-2222'
  },
  {
    name: 'Gabriel',
    lastName: 'Rocha',
    cpf: '123.456.790-12',
    services: 2,
    address: 'Rua M, 010',
    phone: '(05) 87777-3333'
  },
  {
    name: 'Beatriz',
    lastName: 'Lima',
    cpf: '234.567.891-23',
    services: 6,
    address: 'Rua N, 121',
    phone: '(06) 86666-4444'
  },
  {
    name: 'Marcelo',
    lastName: 'Silva',
    cpf: '345.678.902-34',
    services: 3,
    address: 'Rua O, 232',
    phone: '(07) 85555-5555'
  },
  {
    name: 'Isabela',
    lastName: 'Costa',
    cpf: '456.789.013-45',
    services: 7,
    address: 'Rua P, 343',
    phone: '(08) 84444-6666'
  },
  {
    name: 'Ricardo',
    lastName: 'Souza',
    cpf: '567.890.124-56',
    services: 4,
    address: 'Rua Q, 454',
    phone: '(09) 83333-7777'
  },
  {
    name: 'Viviane',
    lastName: 'Santos',
    cpf: '678.901.235-67',
    services: 5,
    address: 'Rua R, 565',
    phone: '(10) 82222-8888'
  },
  {
    name: 'Joana',
    lastName: 'Almeida',
    cpf: '789.012.346-78',
    services: 2,
    address: 'Rua S, 676',
    phone: '(11) 81111-9999'
  },
  {
    name: 'Felipe',
    lastName: 'Pereira',
    cpf: '890.123.457-89',
    services: 1,
    address: 'Rua T, 787',
    phone: '(12) 80000-0000'
  },
  {
    name: 'Carla',
    lastName: 'Martins',
    cpf: '901.234.568-90',
    services: 6,
    address: 'Rua U, 898',
    phone: '(13) 79999-1111'
  }
])

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
              src="../assets/imgs/lupa.png"
              alt="lupa"
              width="25"
              height="25"
            />
          </div>
          <div class="search-box">
            <input type="text" v-model="searchQueryCpf" placeholder="Informe o CPF do cliente" />

            <img
              class="loupe-blue"
              src="../assets/imgs/lupa.png"
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
                <th>Principais Clientes</th>
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
  opacity: 0px;
  margin: 18px 0;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1px 5px;
  position: relative;
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
  align-items: center;
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
