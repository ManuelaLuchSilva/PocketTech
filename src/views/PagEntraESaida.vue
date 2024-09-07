<script setup>
import NavbarAdm from '@/components/NavbarAdm.vue'
import EntradaESaida from '@/components/EntradaESaida.vue'
import FooterBar from '@/components/FooterBar.vue'
import SidebarAdm from '@/components/SidebarAdm.vue'
</script>

<template>
  <NavbarAdm />
  <div class="container">
    <SidebarAdm />
    <section class="content">
      <EntradaESaida />
    </section>
  </div>
  <FooterBar class="footerBar" />
</template>

<style scoped>
.container {
  display: flex;
  width: auto;
}

.content {
  margin-top: 60px;
  margin-left: 3rem;
  display: grid;
  width: 100%;
}</style>
