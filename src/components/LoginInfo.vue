<script setup>
import { ref } from 'vue'

const user = ref({
  email: '',
  password: '',
  rememberMe: false
})
const adminEmail = 'admin'
  const adminPassword = 'admin'
const admin = ref(false)

  if (user.value.email === adminEmail && user.value.password === adminPassword) {
    admin.value == true
  } else {
    admin.value
  }
</script>

<template>
  <form>
    <div class="entrar">
      <h1 class="tit">Entrar</h1>
      <hr />
      <p class="infoDados">Informe os seus dados abaixo para acessá-la.</p>
    </div>

    <div class="log">
      <label for="">Email:</label>
      <input type="email" class="prench" v-model="user.email"/>
      <label for="">Senha:</label>
      <input type="password" class="prench" v-model="user.password"/>
    </div>

    <div class="confirm">
      <div class="checkboxLembrar">
        <input type="checkbox" class="lembrar" v-model="user.rememberMe"/>
        <label for="">Manter-me logado</label>
      </div>
      <div>
        <RouterLink to="/admhome">Adm</RouterLink>
        <input class="buttonLogin" type="button" value="Login" />
      </div>
      <div class="esquecOrCadastro">
        <a href="/" class="esq">Esqueci minha senha</a>
        <p class="cadastro">Novo no Site !<RouterLink to="/cadastro"> CADASTRE-SE</RouterLink></p>
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
  margin-left: 287px;
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
  padding-left: 13px;
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

.esquecOrCadastro {
  font-size: 11px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.esq {
  margin-left: 36px;
}

.cadastro {
  margin-left: 17px;
  margin-top: 15px;
}
</style>
