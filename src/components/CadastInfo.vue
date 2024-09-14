<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store/store.js'

const name = ref('')
const lastName = ref('')
const cpf = ref('')
const email = ref('')
const password = ref('')
const address = ref('')
const phone = ref('')
const termsAccepted = ref(false)

const router = useRouter()

const isValid = () => {
  if (!name.value || !lastName.value || !cpf.value || !email.value) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return false
  }
  return true
}

const registerClient = () => {
  if (termsAccepted.value && isValid()) {
    const newClient = {
      name: name.value,
      lastName: lastName.value,
      cpf: cpf.value,
      email: email.value,
      address: address.value,
      phone: phone.value
    }
    store.addClient(newClient)
    store.setUser(`${name.value} ${lastName.value}`)
    router.push('/')
  } else {
    if (!termsAccepted.value) {
      alert('Você precisa aceitar os termos e políticas de privacidade.')
    }
  }
}
</script>

<template>
  <form @submit.prevent="registerClient">
    <div class="entrar">
      <h1 class="tit">Cadastrar</h1>
      <hr />
      <p class="infoDados">Informe os seus dados abaixo.</p>
    </div>
    <div>
      <input type="text" v-model="name" class="prench1" placeholder="Nome" required />
      <input type="text" v-model="lastName" class="prench1" placeholder="Sobrenome" required />
    </div>
    <input type="text" v-model="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" class="prench2" placeholder="CPF, Ex.123.456.789-01" required />
    <div>
      <input type="email" v-model="email" class="prench3" placeholder="E-mail*" required />
      <input type="password" v-model="password" class="prench3" placeholder="Senha" required />
    </div>
    <div>
      <input type="text" v-model="address" class="prench3" placeholder="Endereço" required />
      <input type="text" v-model="phone" pattern="\d{2}\)\d{5}\-\d{4}" class="prench3" placeholder="Telefone" required />
    </div>

    <div class="confirm">
      <div class="checkboxLembrar">
        <input type="checkbox" v-model="termsAccepted" class="termos" />
        <label for="" class="concordo"
          >Estou ciente e CONCORDO com os termos de aceite e políticas de privacidade da Pocket
          Tech</label
        >
      </div>
      <div>
        <input class="buttonCadastro" type="submit" value="CRIAR CONTA" />
      </div>
      <div class="voltarCadastro">
        <p class="cadastro"><router-link to="/login">Voltar para o login</router-link></p>
      </div>
    </div>
  </form>
</template>

<style scoped>
form {
  min-width: 800px;
  min-height: 500px;
  max-width: min-content;
  max-height: min-content;
  margin: 100px 0px 100px 28%;
  background-color: #d9d9d9;
}
.confirm div {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
}
.tit {
  margin-left: 310px;
  padding-top: 20px;
}
hr {
  max-width: 700px;
}
.infoDados {
  margin-left: 260px;
}
.log {
  max-width: 100px;
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.prench1 {
  min-width: 305px;
  min-height: 27px;
  border: none;
  border-radius: 6px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 45px;
}
.prench2 {
  min-width: 305px;
  min-height: 27px;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 45px;
}
.prench3 {
  min-width: 660px;
  min-height: 27px;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 45px;
  display: block;
}
.checkboxLembrar {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 15px;
  align-content: center;
  flex-wrap: wrap;
  width: 300px;
}
.termos {
  background-color: #d9d9d9;
}
.concordo {
  font-size: 12px;
  margin-bottom: 0
}
.buttonCadastro {
  min-width: 190px;
  min-height: 35px;
  max-width: min-content;
  max-height: min-content;
  background-color: #00233c;
  color: #ffff;
  border-radius: 8px;
}
.voltarCadastro {
  font-size: 11px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.cadastro {
  margin-top: 15px;
  font-size: 15px;
}
a {
  font-weight: 600;
  color: black;
}
</style>
