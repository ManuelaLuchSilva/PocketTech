<script setup>
import SidebarAdm from '../components/SidebarAdm.vue'
import NavbarLogin from '../components/NavbarLogin.vue'
</script>
<template>
  <NavbarLogin />
  <div class="container">
    <SidebarAdm />
    <section class="content">
      <div class="valorLiq">
        <img src="" alt="img" />
        <div>
          <h4>Valor líquido</h4>
          <p>R$ {{}}</p>
        </div>
      </div>

      <div class="valorBruto">
        <img src="" alt="img" />
        <div>
          <h4>Valor bruto</h4>
          <p>R$ {{}}</p>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.container {
  display: flex;
}
.content {
  margin-top: 60px;
  width: calc(100% - 16rem);
  display: flex;
  justify-content: space-around;
}
.content > div {
  background-color: #d9d9d9;
  display: flex;
  border-radius: 10px;
  width: 40%;
  margin-bottom: 50px;
  height: 150px;
}
div img{
    margin: 20px;
    height: calc(100% - 40px);
}
</style>
