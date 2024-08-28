<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="sideBar">
    <section>
      <h3>Produtos</h3>
      <ul>
        <li>
          <RouterLink to="/admprodutos">Cliente</RouterLink>
        </li>
        <li>
          <RouterLink>Orçamentos</RouterLink>
        </li>
        <li>
            <RouterLink to="/pecas">Peças</RouterLink>
        </li>
        <li>
          <RouterLink to="/EntradaESaida">Entrada/Saída</RouterLink>
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <h3>Faturamento</h3>
      <ul>
        <li>
          <RouterLink to="/admentreesaida">Entradas e saídas</RouterLink>
        </li>
        <li>
          <RouterLink to="/admmargemfatu">Margens de faturamento</RouterLink>
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <h3>Emitir Relatório</h3>
    </section>
  </div>
</template>
<style scoped>
.sideBar {
  background-color: #d9d9d9;
  height: auto;
  width: 15rem;
  padding-top: 10px;
  padding-bottom: 10px;
  display: fixed;
}
.sideBar section {
  margin-left: 2rem;
  margin-top: 1rem;
}
section {
  display: block;
  margin-bottom: 1em;
}
section h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: left;
}
hr{
  margin-top: 100px;
}
ul {
  list-style: none;
  padding: 0;
  width: 100%;
}
li a {
  text-decoration: none;
  color: black;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
}
li a:hover {
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  color: #0a163a;
  font-weight: bold;
}
</style>