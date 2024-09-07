<script setup>
import NavbarAdm from "@/components/NavbarAdm.vue";
import FooterBar from "../components/FooterBar.vue";
import Pecas from "@/components/Pecas.vue";
import SideBarAdm from "../components/SidebarAdm.vue";

</script>

<template>
    <NavbarAdm />
  <div class="container">
    <SideBarAdm />
    <div class="content">
    <Pecas />
    </div></div>
    <FooterBar />
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


</style> 