<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const emit = defineEmits(['enviarUser'])
const router = useRouter()

const user = ref({
  name: '',
  password: '',
  rememberMe: false
})
const admName = 'admin'
const admPassword = 'admin'

function salvar() {
  if (user.value.name === admName && user.value.password === admPassword) {
    router.push('/admhome')
  } else {
    router.push('/')
  }
}
</script>

<template>
<form @submit.prevent="salvar()" validate>
    <div class="entrar">
      <h1 class="tit">Entrar</h1>
      <hr />
      <p class="infoDados">Informe os seus dados abaixo para acessá-la.</p>
    </div>

    <div class="log">
      <label for="">Usuario:</label>
      <input type="text" class="prench" v-model="user.name" required/>
      <label for="">Senha:</label>
      <input type="password" class="prench" v-model="user.password" required/>
    </div>

    <div class="confirm">
      <div class="checkboxLembrar">
        <input type="checkbox" class="lembrar" v-model="user.rememberMe" />
        <label for="">Manter-me logado</label>
      </div>
      <div>
        <RouterLink to="/admprodutos">Adm</RouterLink>
        <button class="buttonLogin" type="submit">Login</button>
      </div>
      <div class="cadastro">
        <p href="/">Esqueci minha senha</p>
        <RouterLink to="/cadastro"> CADASTRE-SE</RouterLink>
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

.confirm {
  text-align: center;
}

.tit {
  margin-left: 340px;
  padding-top: 20px;
}

hr {
  max-width: 700px;
}

.infoDados {
  margin-left: 229px;
}

.log {
  max-width: 100px;
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.prench {
  min-width: 390px;
  min-height: 25px;
  border: none;
  margin-top: 5px;
}

.checkboxLembrar {
  display: flex;
  justify-content: center;
  font-size: 15px;
}
.lembrar {
  margin-bottom: 18px;
  background-color: #d9d9d9;
}

.buttonLogin {
  min-width: 190px;
  min-height: 35px;
  max-width: min-content;
  max-height: min-content;
  background-color: #00233c;
  color: #ffff;
  border-radius: 8px;
}

.cadastro {
  font-size: 11px;
  margin-top: 15px;
  margin-left: 17px;
  margin-bottom: 10px;
}
.cadastro a {
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
}
</style>
