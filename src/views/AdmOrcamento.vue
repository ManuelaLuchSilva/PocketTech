<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarAdm from '../components/NavbarAdm.vue'
import Footerbar from '../components/FooterBar.vue'
import { store } from '../store/store.js'
import { reactive, computed, watch } from 'vue'

const formData = reactive({
  nomeCliente: '',
  telefone: '',
  endereco: '',
  quantidade: 0,
  subtotal: 0,
  descontos: 0,
  servico: '',
  pagamento: '',
  descricao: '',
  total: 0
})

const preencherDadosCliente = () => {
  const cliente = store.clients.find((c) => c.name === formData.nomeCliente)
  if (cliente) {
    formData.telefone = cliente.phone
    formData.endereco = cliente.address
  } else {
    formData.telefone = ''
    formData.endereco = ''
  }
}

const calcularSubtotal = () => {
  const selectedService = store.services.find((service) => service.id === formData.servico)
  if (selectedService) {
    formData.subtotal = selectedService.price * formData.quantidade
  } else {
    formData.subtotal = 0
  }
}

const calcularTotal = () => {
  formData.total = formData.subtotal - formData.descontos
}

watch(() => formData.quantidade, calcularSubtotal)
watch(() => formData.servico, calcularSubtotal)
watch(() => formData.subtotal, calcularTotal)
watch(() => formData.descontos, calcularTotal)

watch(() => formData.nomeCliente, preencherDadosCliente)

const registrarOrcamento = () => {
  const cliente = store.clients.find((c) => c.name === formData.nomeCliente)
  if (cliente && formData.quantidade != 0) {
    cliente.services += 1
    formData.nomeCliente = ''
    formData.telefone = ''
    formData.endereco = ''
    formData.quantidade = 0
    formData.subtotal = 0
    formData.descontos = 0
    formData.servico = ''
    formData.pagamento = ''
    formData.descricao = ''
    formData.total = 0
  } else if (formData.quantidade == 0) {
    alert('Adicione a quantidade desejada')
  }
}
</script>

<template>
  <NavbarAdm />
  <div class="container">
    <SidebarAdm />
    <div class="content">
      <div class="title">
        <h1>Registre um Orçamento</h1>
      </div>
      <form @submit.prevent="registrarOrcamento">
        <div class="form-group">
          <label for="nome-cliente">Nome cliente</label>
          <input
            type="text"
            id="nome-cliente"
            v-model="formData.nomeCliente"
            placeholder="Informe o nome do cliente"
            required
          />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            v-model="formData.telefone"
            placeholder="Cell: ex (DDD) 9 9999-9999"
            readonly
            required
          />
        </div>
        <div class="form-group">
          <label for="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            v-model="formData.endereco"
            placeholder="Informe o endereço do cliente"
            readonly
            required
          />
        </div>
        <div class="form-group">
          <label for="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            v-model.number="formData.quantidade"
            placeholder="Informe a quantidade de itens utilizado"
            required
          />
        </div>
        <div class="form-group">
          <label for="subtotal">Subtotal (R$)</label>
          <input
            type="number"
            id="subtotal"
            v-model.number="formData.subtotal"
            placeholder="R$"
            readonly
          />
        </div>
        <div class="form-group">
          <label for="descontos">Descontos (R$):</label>
          <input
            type="number"
            id="descontos"
            v-model.number="formData.descontos"
            placeholder="R$"
          />
        </div>
        <div class="form-group">
          <label for="servico">Serviço</label>
          <select id="servico" v-model.number="formData.servico" required>
            <option value="">Selecione o serviço</option>
            <option v-for="service in store.services" :key="service.id" :value="service.id">
              {{ service.name }} - R$ {{ service.price }}
            </option>
          </select>
        </div>
        <div class="form-group pagamento">
          <label for="forma-pagamento">Forma de Pagamento</label>
          <select id="pagamento" v-model="formData.pagamento" required>
            <option value="">Selecione a forma de pagamento</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao_credito">Cartão de Crédito</option>
            <option value="cartao_debito">Cartão de Débito</option>
            <option value="pix">Pix</option>
            <option value="transferencia">Transferência Bancária</option>
            <option value="boleto">Boleto Bancário</option>
          </select>
        </div>
        <div class="form-group descricao">
          <label for="descricao">Descrição</label>
          <textarea
            id="descricao"
            v-model="formData.descricao"
            placeholder="Descreva o que será feito"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="total">Total (R$):</label>
          <input
            type="number"
            id="total"
            v-model.number="formData.total"
            placeholder="R$"
            readonly
          />
        </div>
        <div class="form-group">
          <button type="submit">Registrar Orçamento</button>
        </div>
      </form>
    </div>
  </div>
  <FooterBar />
</template>

<style scoped>
.container {
  display: flex;
  width: auto;
}

.content {
  margin-top: 60px;
  margin-left: 3rem;
  margin-right: 3rem;
  display: grid;
  width: 100%;
}
form {
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #ccc;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
}
.form-group {
  margin: 20px;
  grid-column: span 2;
}

label {
  display: block;
  margin: 5px;
}

input,
textarea,
select {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
}
.pagamento {
  grid-column: 5 / span 2;
}
.descricao {
  grid-column: 1 / span 4;
}

h1 {
  text-align: center;
}
</style>
